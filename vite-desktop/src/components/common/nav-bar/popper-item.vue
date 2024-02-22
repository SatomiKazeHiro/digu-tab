<script setup lang="ts">
import { ref, useSlots, computed } from "vue";
import { useFloating, offset } from "@floating-ui/vue";
import type { Placement } from "@floating-ui/vue";
import type { NavItem } from "@/components/common/nav-bar/item.utils.ts";

const props = defineProps({
  menu: {
    type: Array<NavItem>,
    default: () => [],
  },
  placement: {
    type: String,
    default: "bottom-start",
  },
  offset: {
    type: Array<Number>,
    default: () => [],
  },
});
let offsetX = ref(Number(props.offset[0]) || 0);

// 下拉菜单
const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating, {
  placement: props.placement as Placement,
  middleware: [
    offset({
      crossAxis: offsetX.value,
    }),
  ],
});
// const hasPopper = ref(!!useSlots().popper);
let showPopper = ref(false);
let menuList = computed(() => props.menu);

// 下拉交互
const trigger = () => {
  showPopper.value = !showPopper.value;
  if (showPopper.value) {
    document.addEventListener("click", listenClick);
  }
};
let listenClick = (e) => {
  showPopper.value = false;
  document.removeEventListener("click", listenClick);
};
let menuClick = (cb: Function): void => {
  cb && cb();
  showPopper.value = false;
};
</script>

<template>
  <button class="wk" ref="reference" @click.stop="trigger">
    <slot></slot>
  </button>
  <div
    ref="floating"
    class="floating"
    :style="{ ...floatingStyles, '--offset-x': offsetX }"
    @click.stop=""
  >
    <template v-if="showPopper">
      <slot name="popper">
        <ul class="menu">
          <li
            v-for="(item, index) in menuList"
            :key="index"
            @click="menuClick(item.click)"
          >
            {{ item.name }}
          </li>
        </ul>
      </slot>
    </template>
  </div>
</template>

<style lang="less" scoped>
@bg-color: rgba(255, 255, 255, 0.4);
@bg-color-hover: rgba(0, 0, 0, 0.4);

.floating:not(:empty) {
  margin-top: 20px;
  background-color: @bg-color;
  border-radius: 4px;
  padding: 8px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: calc((4 - var(--offset-x, 0)) * 1px);
    top: -16px;
    border: 8px solid transparent;
    border-bottom: 8px solid @bg-color;
  }
  ul.menu {
    width: 120px;
    li {
      margin: 0 -2px;
      height: 28px;
      line-height: 28px;
      padding: 0 10px;
      border-radius: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      font-weight: 500;
      font-size: 16px;
      &:not(:first-child) {
        margin-top: 4px;
      }
      &:hover {
        background-color: @bg-color-hover;
      }
    }
  }
}
</style>
