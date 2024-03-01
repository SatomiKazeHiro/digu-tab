<script setup lang="ts">
import DeskTop from "@/components/common/desk-top/index.vue";
import WindowModal from "../../common/window-modal/index.vue";

import apps from "@/apps";
</script>

<template>
  <div class="main-desktop-wrap">
    <DeskTop :apps="apps">
      <template #desktop>
        <!-- <WindowModal title="1111" :width="720" :height="480" /> -->
      </template>
    </DeskTop>
  </div>
</template>

<style lang="less" scoped>
.main-desktop-wrap {
}
</style>
