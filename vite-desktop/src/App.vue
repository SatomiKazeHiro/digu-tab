<script setup lang="ts">
import { nextTick } from "vue";
import EventBus from "@/utils/event-bus.js";
import MainNavBar from "./components/content/main-nav-bar/index.vue";
import MainDseskTop from "./components/content/main-desk-top/index.vue";

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
  <MainNavBar />
  <MainDseskTop />
</template>

<style lang="less" scoped></style>
