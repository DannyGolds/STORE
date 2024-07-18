<template>
  <div class="menu-book" :class="{ dark: options.isDarkTheme }">
    <Suspense v-if="menuList != '' && options != ''">
      <template #default>
        <product-cart
          
          v-for="item in menuList[options.activeListMenu].assort[
            options.activeItemMenu
          ].assort"
          :key="item"
          :img="item.img[0]"
          :title="item.title"
          :description="item.desc"
          :price="item.price"
          :id="item.id"
          :isDarkTheme="options.isDarkTheme"
        />
      </template>
      <template #fallback>loading...</template>
    </Suspense>
  </div>
</template>

<script>
import ProductCart from "../menu-micro/product-cart.vue"
export default {
  name: "MenuCommon",
  components: {
    ProductCart,
  },
  computed: {
    menuList() {
      return this.$store.getters.getMenu
    },
    options() {
      return this.$store.getters.getMenuOptions
    },
  },
  created() {
    this.$store.dispatch("initMenuPage")
  },
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  &-book.dark {
    grid-template-columns: 1fr;
    grid-auto-rows: 80px;
  }
  &-book {
    border-radius: 10px;
    overflow-y: auto;
    grid-row-start: 1;
    grid-row-end: 9;
    grid-column-start: 2;
    grid-column-end: 8;
    display: grid;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(4, 1fr);
  }
  &-book,
  &-book.dark {
    gap: 15px;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(34, 112, 143);
    }
  }
  &-items {
    padding-left: 15px;
    &-item > button {
      margin: 20px 0;
      background: transparent;
      border: none;
      color: $m-t-col;
      font-family: "SF Pro Display", sans-serif;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      &.active {
        color: $m-y-col;
      }
    }
    &-title {
      font-size: 16px;
      font-family: "SF Pro Display", sans-serif;
      font-weight: 400;
      width: 97%;
      color: $m-t-col;
      cursor: pointer;
    }
  }
  &-item {
    position: relative;
    margin-bottom: 20px;
    &.active {
      > p {
        color: $m-y-col;
      }
    }
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 4px;
      width: 0;
      height: 0;
      cursor: pointer;
      border-left: 6px solid $m-t-col;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-right: 0 solid transparent;
    }
    &.active::after {
      content: "";
      position: absolute;
      right: 0;
      top: 4px;
      width: 0;
      height: 0;
      cursor: pointer;
      border-top: 6px solid $m-y-col;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 0 solid transparent;
    }
  }
}
</style>
