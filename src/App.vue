<template>
  <div id="app">
    <task-bar />
    <desk-top />
    <dock-bar />
  </div>
</template>

<script>
import cmps from "./components";

export default {
  components: { ...cmps },
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: url("./assets/bg.jpeg");
    background-size: cover;
    filter: blur(2px);
    scale: 1.01;
    z-index: -1;
  }
}
</style>
