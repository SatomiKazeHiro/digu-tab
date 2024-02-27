<script setup lang="ts">
import Bar from "@/components/common/nav-bar/index.vue";
import Timer from "./timer.vue";
import Setting from "./setting.vue";
</script>

<template>
  <div class="main-nav-bar-wrap">
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
.main-nav-bar-wrap {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.52);
  padding: 0 20px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}
</style>
