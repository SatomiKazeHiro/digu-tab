<template>
  <div id="dock-bar-wrap">
    <div class="dock-bar"></div>
  </div>
</template>

<script>
export default {
  name: "DockBar",
};
</script>

<style lang="less" scoped>
#dock-bar-wrap {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  .dock-bar {
    height: 64px;
    width: 50%;
    background: rgba(255, 255, 255, 0.64);
    border-radius: 8px;
  }
}
</style>
