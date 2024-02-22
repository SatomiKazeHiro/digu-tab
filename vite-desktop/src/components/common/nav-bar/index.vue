<script setup lang="ts"></script>

<template>
  <div class="nav-bar">
    <div class="menu box">
      <slot name="menu"></slot>
    </div>
    <div class="sora box">
      <slot name="sora"></slot>
    </div>
    <div class="ext box">
      <slot name="ext"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-bar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .box {
    display: flex;
    align-items: center;
    gap: 12px;
    > button {
      user-select: none;
    }
  }
}
</style>
