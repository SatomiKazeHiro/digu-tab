<script setup lang="ts">
import PopperItem from "@/components/common/nav-bar/popper-item.vue";
import SvgIcon from "@/components/content/wk-svg-icon/index.vue";
import type { NavItem } from "@/components/common/nav-bar/item.utils.ts";

let menu: Array<NavItem> = [
  {
    name: "设置",
    click: () => {
      console.log("设置");
    },
  },
  {
    name: "锁屏",
    click: () => {
      console.log("锁屏");
    },
  },
];
</script>

<template>
  <PopperItem :menu="menu" :offset="[-12, 0]">
    <SvgIcon name="windows" size="24" />
  </PopperItem>
</template>

<style lang="less" scoped></style>
