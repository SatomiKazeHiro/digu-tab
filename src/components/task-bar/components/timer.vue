<template>
  <div>{{ time }}</div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    showTime: { type: Boolean, default: true },
  },
  data() {
    return {
      timer: null,
      time: null,
    };
  },
  created() {
    this.timer = setInterval(() => {
      if (this.showTime) this.time = dayjs().format("YYYY-MM-DD HH:mm:ss");
      else this.time = dayjs().format("YYYY-MM-DD");
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped></style>
