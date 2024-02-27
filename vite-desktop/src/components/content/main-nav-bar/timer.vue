<script setup lang="ts">
import { reactive, onBeforeUnmount } from "vue";
import dayjs from "dayjs";

let time: String = "";
let timer: NodeJS.Timer | null = null;
timer = setInterval(() => {
  state.time = dayjs().format("YYYY-MM-DD HH:mm:ss");
}, 500);

const state = reactive({
  timer,
  time,
});

onBeforeUnmount(() => {
  state.timer && clearInterval(state.timer);
});
</script>

<template>
  <button class="wk">
    <span>{{ state.time }}</span>
  </button>
</template>

<style lang="less" scoped></style>
