<template>
  <div class="cart">
    <img :src="img" alt="" class="cart-img" />
    <h2 class="cart-large">{{ title }}</h2>
    <p class="cart-description">{{ description }}</p>
    <span class="cart-large">{{ formatPrice(price) }}</span>
    <slot class="btn"></slot>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
        notation: "compact",
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  min-height: 80px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 35px;
  align-items: center;
  background: $dark-cart-bg;
  @extend %cart-br;
  overflow: hidden;
  &:last-child {
    justify-self: stretch;
    text-transform: lowercase;
  }
}

img.cart-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  object-position: center;
}
h2.cart-large,
span.cart-large {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  font-family: "SF Pro Display", sans-serif;
  text-transform: uppercase;
}

h2.cart-large {
  grid-column-start: 2;
  grid-column-end: 5;
}

span.cart-large {
  grid-column-start: 10;
  grid-column-end: 12;
}

p.cart-description {
  font-size: 16px;
  font-weight: 400;
  color: $cart-desc;
  font-family: "SF Pro Display", sans-serif;
  grid-column-start: 5;
  grid-column-end: 10;
}
</style>
