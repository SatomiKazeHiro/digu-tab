<script setup lang="ts">
import { ref, reactive, computed, onMounted, inject } from "vue";

const props = defineProps({
  title: { type: String, default: "" },
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  top: { type: Number, default: 32 },
  left: { type: Number, default: 48 },
});

const $getConfig: any = inject("$getConfig");

const showPanel = computed(() => {
  return props.width && props.height;
});

const modalStyle = reactive({
  "--width": props.width,
  "--height": props.height,
  "--top": props.top,
  "--left": props.left,
});

const titleDom = ref(null);
const modalDom = ref(null);
onMounted(() => {
  if (titleDom.value && modalDom.value) {
    const title: HTMLElement = titleDom.value;
    const modal: HTMLElement = modalDom.value;

    title.addEventListener("mousedown", (event) => {
      // 鼠标点击位置相对弹框的距离
      const x = event.pageX - modal.offsetLeft;
      const y = event.pageY - modal.offsetTop;

      document.addEventListener("mousemove", move);
      function move(event: MouseEvent) {
        let left = event.pageX - x;
        left = left < 0 ? 0 : left;
        left =
          left + modal.offsetWidth > window.innerWidth
            ? window.innerWidth - modal.offsetWidth
            : left;

        let top = event.pageY - y;
        top = top < 0 ? 0 : top;
        top =
          top + modal.offsetHeight > window.innerHeight - $getConfig("DesktopMenu", "height")
            ? window.innerHeight - $getConfig("DesktopMenu", "height") - modal.offsetHeight
            : top;

        modal.style.left = left + "px";
        modal.style.top = top + "px";
      }

      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    });
  }
});
</script>

<template>
  <div v-if="showPanel" class="window-modal" :style="modalStyle" ref="modalDom">
    <div class="modal-nav">
      <span class="title" ref="titleDom">{{ props.title }}</span>
    </div>
    <div class="modal-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@nav-height: 40px;

.window-modal {
  width: calc(var(--width) * 1px);
  height: calc(var(--height) * 1px);
  position: absolute;
  left: calc(var(--left) * 1px);
  top: calc(var(--top) * 1px);
  background: #fff;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.1))
    drop-shadow(0 0 3px rgba(0, 0, 0, 0.05));
  border-radius: 8px;
  overflow: hidden;
  .modal-nav {
    width: 100%;
    display: flex;
    align-items: center;
    height: @nav-height;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.01) 0px 0px 0px 1px;
    .title {
      flex: 1;
      cursor: move;
      line-height: @nav-height;
      padding: 0 8px;
      user-select: none;
    }
  }
  .modal-content {
    height: calc(100% - @nav-height);
  }
}
</style>
