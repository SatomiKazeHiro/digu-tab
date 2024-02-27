<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import EventBus from "@/utils/event-bus.js";
import DkItem from "./item.vue";

const props = defineProps({
  apps: {
    type: Object,
    default: () => ({}),
  },
});

// 桌面图标参数
const item = reactive({
  maxWidth: 88,
  maxHeight: 104,
  rowGap: 12, // 行间距（元素垂直边距）
  columnGap: 12, // 列间距（元素水平距离）
});

// 桌面布局参数
const LP = reactive({
  colNum: 1,
  rowHeight: item.maxHeight,
  margin: [item.columnGap, item.rowGap], // 框架问题，失效，以垂直为准
  isResizable: false,
});

// 桌面样式
const LStyle = reactive({
  "--width": window.innerWidth,
  "--height": window.innerHeight,
});

// 网格
const LGrig = reactive({
  colNum: 1,
  rowNum: 1,
});

// 需要计算出来的参数
const calculateParams = () => {
  let lwExcess =
    (window.innerWidth - item.columnGap) % (item.maxWidth + item.columnGap); // gap + w + gap + w + ... + gap + w => n * W + (n + 1) * gap
  let lhExcess =
    (window.innerHeight - item.rowGap) % (item.maxHeight + item.rowGap);
  let layoutWidth = window.innerWidth - lwExcess;
  let layoutHeight = window.innerHeight - lhExcess;

  LGrig.colNum = Math.floor(layoutWidth / (item.maxWidth + item.columnGap));
  LGrig.rowNum = Math.floor(layoutHeight / (item.maxHeight + item.rowGap));

  LP.colNum = LGrig.colNum;
  LStyle["--width"] = layoutWidth;
  LStyle["--height"] = layoutHeight;
};
calculateParams();

// 渲染应用
let appList = computed(() => Object.values(props.apps));
let layout = ref([
  ...appList.value.map((app, index) => ({
    w: 1,
    h: 1,
    x: Math.floor(index / LGrig.rowNum),
    y: Math.floor(index % LGrig.rowNum),
    i: index,
    _info: app,
  })),
]);

// 接收窗口变化，修改参数
EventBus.on("onResize", () => {
  calculateParams();
});
</script>

<template>
  <div class="desktop-wrap">
    <div class="desktop-content" :style="LStyle">
      <grid-layout v-model:layout="layout" v-bind="LP">
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
