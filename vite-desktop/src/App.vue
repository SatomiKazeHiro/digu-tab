<script setup lang="ts">
import { nextTick } from "vue";
import EventBus from "@/utils/event-bus.ts";
import MainNavBar from "./components/content/main-nav-bar/index.vue";
import MainDseskTop from "./components/content/main-desk-top/index.vue";
import MainDock from "./components/content/main-dock/index.vue";

const onResize = () => {
  EventBus.emit("onResize", {
    width: window.innerWidth,
    height: window.innerHeight,
  });
};
window.addEventListener("resize", () => {
  nextTick(() => onResize());
});
</script>

<template>
  <div class="main-viewer-wrap">
    <MainNavBar />
    <MainDseskTop style="flex: 1" />
    <MainDock />
  </div>
</template>

<style lang="less" scoped>
.main-viewer-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
