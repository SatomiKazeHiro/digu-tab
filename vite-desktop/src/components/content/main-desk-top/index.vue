<script setup lang="ts">
import DeskTop from "@/components/common/desk-top/index.vue";
import apps from "@/apps";
</script>

<template>
  <div class="main-desktop-wrap">
    <DeskTop :apps="apps" />
  </div>
</template>

<style lang="less" scoped>
.main-desktop-wrap {
}
</style>
