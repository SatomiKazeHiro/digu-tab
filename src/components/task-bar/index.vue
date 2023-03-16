<template>
  <div id="task-bar-wrap">
    <div class="left-wrap nav">
      <Control class="nav-item control" />
    </div>
    <div class="right-wrap nav">
      <Search class="nav-item search" />
      <Timer class="nav-item time" />
    </div>
  </div>
</template>

<script>
import Control from "./components/control.vue";
import Search from "./components/search.vue";
import Timer from "./components/timer.vue";

export default {
  name: "TaskBar",
  components: { Control, Timer, Search },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#task-bar-wrap {
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  color: #fff;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.88);
  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
