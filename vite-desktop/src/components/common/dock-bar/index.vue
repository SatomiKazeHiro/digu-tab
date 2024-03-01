<script setup lang="ts">
import { reactive, inject } from "vue";
import DockMenu from "./dock-menu.vue";

// const props = defineProps({
//   type: {
//     type: String,
//     default: "dock",
//   },
// });
</script>

<template>
  <div class="dock-bar-wrap">
    <DockMenu />
  </div>
</template>

<style lang="less" scoped>
.dock-bar {
  width: 100%;
  height: 100%;
}
</style>
