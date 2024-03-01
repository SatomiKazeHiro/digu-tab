<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import { inject } from "vue";
import EventBus from "@/utils/event-bus.js";
import DkItem from "./item.vue";

const props = defineProps({
  apps: {
    type: Object,
    default: () => ({}),
  },
});
const $getConfig: any = inject("$getConfig");

// 桌面配置
const Desktop = {
  // 桌面应有的空间大小
  get h() {
    let hExcess =
      Number($getConfig("DesktopMenu", "height") + $getConfig("DesktopDock", "height")) || 0;
    return window.innerHeight - hExcess;
  },
  get w() {
    return window.innerWidth;
  },
  // 留给布局的空间大小
  get ih() {
    let paddingExcess = 16; // 8+8
    return this.h - paddingExcess;
  },
  get iw() {
    return window.innerWidth;
  },
};

// 桌面图标参数
const item = reactive({
  maxWidth: 88,
  maxHeight: 104,
  rowGap: 12, // 行间距（元素垂直边距）
  columnGap: 12, // 列间距（元素水平距离）
});

// 布局参数
const LayoutParams = reactive({
  colNum: 1,
  rowHeight: item.maxHeight,
  margin: [item.columnGap, item.rowGap], // 框架问题，失效，以垂直为准
  isResizable: false,
});

// 桌面样式
const LayoutStyle = reactive({
  "--width": Desktop.iw,
  "--height": Desktop.ih,
});

// 网格
const LayoutGrid = reactive({
  colNum: 1,
  rowNum: 1,
});

// 需要计算出来的参数
const calculateParams = () => {
  let lwExcess = (Desktop.iw - item.columnGap) % (item.maxWidth + item.columnGap); // gap + w + gap + w + ... + gap + w => n * W + (n + 1) * gap
  let lhExcess = (Desktop.ih - item.rowGap) % (item.maxHeight + item.rowGap);

  let layoutWidth = window.innerWidth - lwExcess;
  let layoutHeight = Desktop.ih - lhExcess;

  LayoutGrid.colNum = Math.floor(layoutWidth / (item.maxWidth + item.columnGap));
  LayoutGrid.rowNum = Math.floor(layoutHeight / (item.maxHeight + item.rowGap));
  LayoutParams.colNum = LayoutGrid.colNum;

  LayoutStyle["--width"] = layoutWidth;
  LayoutStyle["--height"] = layoutHeight;
};
calculateParams();

// 渲染应用
let appList = computed(() => Object.values(props.apps));
let layout = ref([
  ...appList.value.map((app, index) => ({
    w: 1,
    h: 1,
    x: 0,
    y: 0,
    i: index,
    _info: app,
  })),
]);
const updateGrid = () => {
  layout.value.forEach((t, i) => {
    t.x = Math.floor(i / LayoutGrid.rowNum);
    t.y = Math.floor(i % LayoutGrid.rowNum);
  });
};
updateGrid();

// 接收窗口变化，修改参数
EventBus.on("onResize", () => {
  calculateParams();
  updateGrid();
});
</script>

<template>
  <div class="desktop-wrap">
    <div class="desktop-content" :style="LayoutStyle">
      <grid-layout v-model:layout="layout" v-bind="LayoutParams">
        <template #default="{ gridItemProps }">
          <grid-item
            v-for="item in layout"
            :key="item.i"
            v-bind="gridItemProps"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
          >
            <DkItem :icon="item._info.icon" :label="item._info.label" />
          </grid-item>
        </template>
      </grid-layout>
    </div>
  </div>
</template>

<style lang="less" scoped>
.desktop-wrap {
  padding: 12px 0;
  .desktop-content {
    width: calc(var(--width) * 1px);
    height: calc(var(--height) * 1px);

    .vue-grid-item {
      background: transparent;
      cursor: none !important;
    }
  }
}
</style>
