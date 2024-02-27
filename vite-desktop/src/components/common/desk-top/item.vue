<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="dt-app-item" :title="props.label">
    <div class="logo-box">
      <img :src="props.icon" />
    </div>
    <div class="desc-box">
      {{ props.label }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.dt-app-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  gap: 8px;
  transition: filter 0.1s;
  .logo-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    filter: drop-shadow(0 0 0.5px rgba(0, 0, 0, 0.2))
      drop-shadow(0 0 1.5px rgba(0, 0, 0, 0.1));
    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .desc-box {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 15px;
    text-align: center;
    color: #fff;
    line-height: 20px;
    filter: drop-shadow(0 0 0.5px rgba(0, 0, 0, 0.4))
      drop-shadow(0 0 1px rgba(0, 0, 0, 0.25))
      drop-shadow(0 0 1.5px rgba(0, 0, 0, 0.1));
  }
}
</style>
