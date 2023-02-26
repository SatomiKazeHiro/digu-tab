<template>
  <div id="app">
    <div class="bg"></div>
  </div>
</template>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
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
    }
  }
}
</style>
