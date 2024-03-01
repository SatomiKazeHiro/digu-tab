<script setup lang="ts">
import SvgIcon from "@/components/content/wk-svg-icon/index.vue";
</script>

<template>
  <div class="dock-menu-wrap">
    <span class="cell-box">
      <button class="wk logo">Wk</button>
      <div class="delimiter"></div>
      <button class="wk">
        <SvgIcon name="dock-menu" size="20" />
      </button>
    </span>
    <span class="sora"></span>
  </div>
</template>

<style lang="less" scoped>
.dock-menu-wrap {
  width: 100%;
  padding: 0 20px;
  display: flex;
  .cell-box {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.68);
    padding: 0 16px;
    color: rgba(255, 255, 255, 0.88);
    border-radius: 22px;
    gap: 12px;
    .logo {
      font-weight: bold;
      font-family: HarmonyOS_Sans_Bold;
    }
    .delimiter {
      width: 1px;
      height: 12px;
      border-right: 1px solid #fff6;
    }
  }
  .sora {
    flex: 1;
  }
}
</style>
