<template>
  <div class="search-wrap" ref="wrap">
    <div
      class="search-icon"
      :class="{ on: isSearch }"
      @click="isSearch = !isSearch"
    >
      <box-icon
        name="search"
        :color="isSearch ? '#00a1d6' : '#fff'"
        size="17px"
      ></box-icon>
    </div>
    <div class="search-popover" :class="{ on: isSearch }" ref="popover">
      <div class="popover-wrap">
        <input placeholder="搜索..." />
        <button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      isSearch: false,
    };
  },
  mounted() {
    const wrap = this.$refs.wrap;
    const popover = this.$refs.popover;
    createPopper(wrap, popover, {
      placement: "bottom-end",
    });
  },
  methods: {
    search() {
      console.log("搜索");
    },
  },
};
</script>

<style lang="less" scoped>
.search-wrap {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .search-icon {
    padding: 2px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.23);
    }
    &.on {
      background-color: rgba(255, 255, 255, 0.23);
    }
  }
  .search-popover {
    width: 320px;
    height: 56px;
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
    .popover-wrap {
      width: 100%;
      height: 100%;
      padding: 0px 8px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.88);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 14px;
      input {
        height: 32px;
        flex: 1;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 0 8px;
        background-color: rgba(255, 255, 255, 0.1);
        color: #000;
      }
      button {
        height: 32px;
        border-radius: 4px;
        padding: 0 24px;
        background-color: rgba(0, 0, 0, 0.88);
        color: #fff;
        outline: none;
        border: none;
        transition: background-color 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #00a1d6;
        }
      }
    }
  }
}
</style>
