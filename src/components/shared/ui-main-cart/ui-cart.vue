<template>
  <div class="m-cart">
    <img :src="img" alt="cart-img" class="m-cart-img" />
    <span class="m-cart-description">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "mCart",
  props: ["img", "title"],
}
</script>

<style lang="scss" scoped src="./ui-cart.scss" />
