<template>
  <div class="cart-wrapper">
    <div class="cart-images">
      <img
        v-for="img in getDataByID[0].img.slice(1, 5)"
        :key="img"
        :src="img"
        alt=""
        class="cart-image"
      />
    </div>
    <div class="cart-describe">
      <h2 class="cart-title">{{ getDataByID[0].title }}</h2>
      <p class="cart-text small">Рейтинг {{ getDataByID[0].rate }}</p>
      <h2 class="cart-title price">
        {{ getDataByID[0].price }} ₽
      </h2>
      <p class="cart-text text">{{ getDataByID[0].desc }}</p>
      <p class="cart-text small">*Бесплатная доставка при заказе от 10 тыс. ₽</p>
      <p class="cart-text small article">Артикуль товара {{ this.$route.params.id }}</p>
      <v-btn
        position="absolute"
        bottom="0"
        right="0"
        br="10px"
        :img="busketBright"
        color="#fff"
        :imgAfter="true"
        text="В корзину"
        height="44"
        imgMargin="10"
        width="150"
        tt="lowercase"
      />
    </div>
    <div class="cart-events"></div>
    <div class="cart-same-offers">
      <p class="cart-text">Сопутствующие предложения (i)</p>
      <product-cart
        class="cart-new"
        v-for="product in getDataByID[1].slice(0, 3)"
        :key="product.id"
        isDarkTheme="true"
        :img="product.img"
        :title="product.title"
        :description="product.desc"
        :id="product.id"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import VBtn from "@/components/shared/ui-btn/shared-btn.vue"
import productCart from "../menu-micro/product-cart.vue"
import { busketBright } from "@/components/shared/icons"
export default {
  name: "menuCart",
  components: {
    productCart,
    VBtn,
  },
  data() {
    return {
      busketBright,
    }
  },
  computed: {
    getDataByID() {
      let thisProduct = {}
      let theSame = []
      let DB = this.$store.getters.getMenu
      Array.from(Object.values(DB)).forEach((itm) => {
        Array.from(Object.values(itm.assort)).forEach((item) => {
          Array.from(Object.values(item.assort)).forEach((it) => {
            theSame.push(it)
            if (it.id == this.$route.params.id) {
              thisProduct = it
            }
          })
        })
      })
      return [thisProduct, theSame]
    },
  },
}
</script>

<style lang="scss" scoped>
p,
h1,
h2,
a {
  font-family: "SF Pro Display", sans-serif;
}
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

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.cart-title {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

.cart-text {
  color: #7a7f84;
  font-size: 16px;
  font-weight: 600;
}

.text {
  text-align: justify;
}

.small {
  color: #51545a;
  margin-bottom: 16px;
  font-weight: 400;
}

.cart-describe {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 5;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
}

.cart-same-offers {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart-events {
  grid-row-start: 1;
  grid-row-end: 9;
}

.price {
  color: $m-y-col;
}

// .cart-images,
// .cart-describe,
// .cart-events,
// .cart-same-offers {
//   background: black;
// }
</style>
