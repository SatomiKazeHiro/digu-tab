<template>
  <i :class="['wk-icon', spin && 'svg-icon-spin']" :style="getStyle">
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>
  </i>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed } from "vue";
import type { CSSProperties } from "vue";
const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#ffffff",
  },
  hoverColor: {
    type: String,
    default: "#1890ff",
  },
  size: {
    type: [Number, String],
    default: 20,
  },
  spin: {
    type: Boolean,
    default: false,
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const getStyle = computed((): CSSProperties => {
  const { size, hoverColor, color } = props;
  let s = `${size}`;
  s = `${s.replace("px", "")}px`;
  return {
    fontSize: s,
    "--hover-color": hoverColor || color,
  };
});
</script>

<style scoped lang="less">
i.wk-icon {
  --color: inherit;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  font-size: inherit;
  line-height: 1em;
  color: var(--color);
  fill: currentColor;
  transition: color 0.2s;

  &:hover {
    color: var(--hover-color);
  }

  svg {
    width: 1em;
    height: 1em;
  }
}

.svg-icon-spin {
  animation: circle 1.5s infinite linear;
}

/* 旋转动画 */
@keyframes circle {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
