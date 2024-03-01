<script setup lang="ts">
import { ref, reactive, inject } from "vue";
import DockBar from "@/components/common/dock-bar/index.vue";

const $getConfig: any = inject("$getConfig");
const DockStyle = reactive({
  "--height": $getConfig("DesktopDock", "height"),
});

let state = ref("dock");
</script>

<template>
  <div class="main-dock-wrap" :class="{ [state]: true }" :style="DockStyle">
    <DockBar />
  </div>
</template>

<style lang="less" scoped>
.main-dock-wrap {
  width: 100%;
  height: calc(var(--height, 64) * 1px);
}
</style>
