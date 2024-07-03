<template>
  <button
    class="shared-btn"
    :style="{
      borderRadius: br,
      padding,
      width: `${width}px`,
      height: `${height}px`,
      color,
      flexDirection: imgAfter ? 'row-reverse' : 'row',
      textTransform: tt,
    }"
  >
    <span v-html="img" :style="{ margin: imgMargin }"></span>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    br: {
      type: String,
      default: "20",
    },
    tt: {
      type: String,
      default: "uppercase",
    },
    img: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#fff",
    },
    imgAfter: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    padding: {
      type: String,
      default: "0 15px",
    },
    height: {
      type: String,
      default: "50",
    },
    width: {
      type: String,
      required: false,
    },
    imgMargin: {
      type: String,
      default: "0",
    },
  },
}
</script>

<style lang="scss" scoped>
.shared-btn {
  display: flex;
  background-color: $m-y-col;
  border: none;
  align-items: center;
  justify-content: center;
  font-family: "SF Pro Display", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    box-shadow: 0 0 10px #ff8000a6;
    background-image: linear-gradient(#fdb806, #fd8006);
  }
}
</style>
