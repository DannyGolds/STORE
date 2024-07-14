<template>
  <div class="cart" :class="{ dark: isDarkTheme }">
    <img :src="img" alt="" class="cart-img" :class="{ dark: isDarkTheme }" />
    <router-link
      class="cart-title link"
      :class="{ dark: isDarkTheme }"
      :to="{
        name: 'cart',
        params: { id },
      }"
      :img="img"
      :title="title"
      description="Привет"
      :price="price"
      >{{ title }}</router-link
    >
    <p
      class="cart-description"
      :title="description"
      :class="{ dark: isDarkTheme }"
    >
      {{ formatText(description) }}
    </p>
    <span class="cart-title span" :class="{ dark: isDarkTheme }">{{
      formatPrice(price)
    }}</span>
    <v-btn
      v-show="isDarkTheme"
      br="50px 0 0 50px"
      :img="busketDark"
      color="#000"
      :imgAfter="true"
      text="В корзину"
      height="44"
      imgMargin="10"
      width="150"
      tt="lowercase"
    ></v-btn>
    <v-btn
      v-show="!isDarkTheme"
      br="50px 0 0 50px"
      position="absolute"
      :img="busketBright"
      color="#fff"
      :imgAfter="true"
      text="В корзину"
      height="44"
      imgMargin="10"
      width="150"
      tt="lowercase"
      bottom="22px"
      right="0"
    ></v-btn>
  </div>
</template>

<script>
import VBtn from "@/components/shared/ui-btn/shared-btn.vue"
import { busketDark, busketBright } from "@/components/shared/icons"
export default {
  name: "ProductCart",
  components: {
    VBtn,
  },
  data() {
    return {
      busketDark,
      busketBright,
    }
  },
  props: {
    isDarkTheme: {
      type: Boolean,
      default: true,
    },
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
    id: {
      type: String,
      required: true,
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
    formatText(text) {
      return text.slice(0, 80) + (text.length > 80 ? "..." : "")
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  &.dark {
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 80px;
    gap: 0 35px;
    align-items: center;
    background: $dark-cart-bg;
    overflow: hidden;
    &:last-child {
      justify-self: stretch;
      text-transform: lowercase;
    }
  }
  &-img.dark {
    height: 100%;
    margin: 0;
  }
}

.cart {
  position: relative;
  background: #fff;
  @extend %cart-br;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 50px;
  max-height: 471px;
  &-img {
    height: 55%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 22px;
  }
  &-btn {
    position: absolute;
    right: 0;
    bottom: 30px;
  }
}

.cart-title.dark {
  color: #fff;
  text-transform: uppercase;
  margin: 0;
}

.cart-title {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  font-family: "SF Pro Display", sans-serif;
}

.link {
  grid-column-start: 2;
  grid-column-end: 5;
  margin-bottom: 0;
  text-decoration: none;
  margin: 20px;
}

.link.dark {
  margin: 0;
}

.span {
  position: absolute;
  bottom: 30px;
}

.span.dark {
  grid-column-start: 10;
  grid-column-end: 12;
  position: static;
}

.cart-description.dark {
  grid-column-start: 5;
  grid-column-end: 10;
  margin: 0;
}

.cart-description {
  font-size: 16px;
  font-weight: 400;
  color: $cart-desc;
  font-family: "SF Pro Display", sans-serif;
  text-align: justify;
  margin-bottom: 22px;
}

h2,
p,
span {
  margin: 0 20px;
}
img {
  height: 40%;
}
</style>
