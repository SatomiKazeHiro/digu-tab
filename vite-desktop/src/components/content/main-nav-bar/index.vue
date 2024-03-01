<script setup lang="ts">
import { reactive, inject } from "vue";
import Bar from "@/components/common/nav-bar/index.vue";
import Timer from "./timer.vue";
import Setting from "./setting.vue";

const $getConfig: any = inject("$getConfig");
const MenuStyle = reactive({
  "--height": $getConfig("DesktopMenu", "height"),
});
</script>

<template>
  <div class="main-menu-wrap" :style="MenuStyle">
    <Bar>
      <template #menu>
        <Setting />
      </template>
      <template #ext>
        <Timer />
      </template>
    </Bar>
  </div>
</template>

<style lang="less" scoped>
.main-menu-wrap {
  width: 100%;
  height: calc(var(--height, 40) * 1px);
  background-color: rgba(0, 0, 0, 0.68);
  padding: 0 20px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}
</style>
