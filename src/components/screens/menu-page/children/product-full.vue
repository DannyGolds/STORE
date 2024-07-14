<template>
  <div class="cart-wrapper">
    <div class="cart-images">
      <img src="" alt="" class="cart-image" />
    </div>
    <div class="cart-describe">{{ description }}</div>
    <div class="cart-events"></div>
    <div class="cart-same-offers"></div>
  </div>
</template>

<script>
export default {
  name: "menuCart",
  computed: {
    thisProductData() {}
  }
}
</script>

<style lang="scss" scoped>
.cart-wrapper {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-start: 2;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 9;
  gap: 35px;
}

.cart-images {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "m m m"
    "m m m"
    "m m m"
    "m m m"
    "a b c";
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 5;
  gap: 8px;
}

.cart-image {
  &:first-child {
    grid-area: m;
    background: black;
  }
  &:nth-child(2) {
    grid-area: a;
    background: black;
  }
  &:nth-child(3) {
    grid-area: b;
    background: black;
  }
  &:last-child {
    grid-area: c;
    background: black;
  }
}

.cart-describe {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 5;
}

.cart-same-offers {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 9;
}

.cart-events {
  grid-row-start: 1;
  grid-row-end: 9;
}

// .cart-images,
// .cart-describe,
// .cart-events,
// .cart-same-offers {
//   background: black;
// }
</style>
