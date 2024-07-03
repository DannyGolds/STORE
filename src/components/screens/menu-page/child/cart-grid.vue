<template>
  <div class="cart">
    <img :src="img" alt="" class="cart-img" />
    <h2 class="cart-large title">{{ title }}</h2>
    <p class="cart-description">{{ description }}</p>
    <div class="wr">
      <span class="cart-large">{{ formatPrice(price) }}</span>
      <slot class="btn"></slot>
    </div>
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
  background: #fff;
  @extend %cart-br;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 22px;
  height: auto;
  &-img {
    height: 55%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 22px;
  }
}
h2.cart-large,
span.cart-large {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  font-family: "SF Pro Display", sans-serif;
  &.title {
    margin-bottom: 22px;
  }
}

p.cart-description {
  font-size: 16px;
  font-weight: 400;
  color: $cart-desc;
  font-family: "SF Pro Display", sans-serif;
  margin-bottom: 22px;
}

.wr {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

h2,
p,
span {
  margin: 0 20px;
}
</style>
