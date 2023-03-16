<template>
  <div class="control-wrap" ref="wrap">
    <div
      class="control-icon"
      :class="{ on: isActive }"
      @click="isActive = !isActive"
    >
      <box-icon
        type="solid"
        name="user-circle"
        :color="isActive ? '#00a1d6' : '#fff'"
        size="17px"
      ></box-icon>
    </div>
    <div class="control-popper" :class="{ on: isActive }" ref="popper">
      <div class="popper-wrap">
        <div class="list-item" v-for="(item, index) in itemList" :key="index">
          <box-icon :name="item.iconName" size="18px"></box-icon>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      isActive: false,
      itemList: [
        { iconName: "cog", label: "设置" },
        { iconName: "power-off", label: "锁屏" },
      ],
    };
  },
  mounted() {
    const wrap = this.$refs.wrap;
    const popper = this.$refs.popper;
    createPopper(wrap, popper, {
      placement: "bottom-start",
    });
  },
};
</script>

<style lang="less" scoped>
.control-wrap {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .control-icon {
    height: 100%;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.16);
    }
    &.on {
      background-color: rgba(255, 255, 255, 0.16);
    }
  }
  .control-popper {
    width: 140px;
    padding-top: 8px;
    opacity: 0;
    z-index: -100;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
    &.on {
      opacity: 1;
      z-index: 2;
      pointer-events: all;
    }
    .popper-wrap {
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .list-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        padding: 8px 16px;
        color: #333;
        font-size: 14px;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.88);
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 161, 214, 0.88);
          color: #fff;
          box-icon {
            fill: #fff;
          }
        }
      }
    }
  }
}
</style>
