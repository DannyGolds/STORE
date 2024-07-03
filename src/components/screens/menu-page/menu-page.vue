<template>
  <section class="menu">
    <div class="breadcrumb">
      <div class="container">
        <div class="breadcrumbs">
          <p class="breadcrumbs-route">
            Главная / Меню /
            <span class="breadcrumbs-active">Алкогольные напитки</span>
          </p>
        </div>
      </div>
    </div>
    <div class="filter-bar">
      <div class="container">
        <div class="filter-bar-body">
          <div class="filters">
            <span class="filt">
              Сорт:
              <select name="Сорт" id="type" class="filter-item">
                <option value="">Белое вино</option>
              </select>
            </span>
            <span class="filt">
              Сортировка:
              <select name="Сортировка" id="sort" class="filter-item">
                <option value="">По умолчанию</option>
                <option value="">Цена</option>
                <option value="">Изготовитель</option>
                <option value="">Год производства</option>
              </select>
            </span>
          </div>
          <div class="btns">
            <button
              class="filter-btn"
              :class="{ active: isGrid }"
              @click="toggleGrid(true)"
              v-html="getFilterState('grid')"
            ></button>
            <button
              class="filter-btn"
              :class="{ active: !isGrid }"
              @click="toggleGrid(false)"
              v-html="getFilterState('columns')"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <aside class="menu-bar">
          <h1 class="title">Наше меню</h1>
          <ul class="menu-items">
            <ul
              class="menu-item"
              v-for="(item, key) in menuData"
              :key="key"
              :class="{ active: activeList == key }"
            >
              <p
                class="menu-items-title"
                @click="
                  () => {
                    activeList = key
                    activeItem = Object.keys(menuData[activeList].assort)[0]
                  }
                "
              >
                {{ item.title }}
              </p>
              <li
                class="menu-items-item"
                v-for="(assortItem, assortKey) in item.assort"
                :key="assortKey"
                v-show="activeList == key"
              >
                <button
                  :class="{ active: activeItem == assortKey }"
                  @click="activeItem = assortKey"
                >
                  {{ assortItem.title }}
                </button>
              </li>
            </ul>
          </ul>
        </aside>
        <div
          class="menu-book"
          v-if="!isGrid && menuData[activeList] != undefined"
        >
          <cartColumns
            v-for="item in menuData[activeList].assort[activeItem].assort"
            :key="item"
            :img="item.img"
            :title="item.title"
            :description="item.desc"
            :price="item.price"
            ><v-btn
              br="50px 0 0 50px"
              :img="busketDark"
              color="#000"
              :imgAfter="true"
              text="В корзину"
              height="44"
              imgMargin="10"
              width="150"
              tt="lowercase"
            ></v-btn
          ></cartColumns>
        </div>
        <div
          class="menu-book-grid"
          v-else-if="isGrid && menuData[activeList] != undefined"
        >
          <cartGrid
            v-for="cart in menuData[activeList].assort[activeItem].assort"
            :key="cart"
            :img="cart.img"
            :title="cart.title"
            :description="cart.desc"
            :price="cart.price"
          >
            <v-btn
              br="50px 0 0 50px"
              :img="busketBright"
              color="#fff"
              :imgAfter="true"
              text="В корзину"
              height="44"
              imgMargin="10"
              width="150"
              tt="lowercase"
            />
          </cartGrid>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cartColumns from "./child/cart-columns.vue"
import cartGrid from "./child/cart-grid.vue"
import vBtn from "@/components/shared/ui-btn/shared-btn.vue"
import {
  columns,
  grids,
  c1,
  g1,
  busketDark,
  busketBright,
} from "@/components/shared/icons"
export default {
  name: "vMenu",
  components: {
    cartColumns,
    cartGrid,
    vBtn,
  },
  data() {
    return {
      isGrid: false,
      columns,
      grids,
      c1,
      g1,
      busketDark,
      busketBright,
      activeList: "alcohol",
      activeItem: "wines",
    }
  },
  methods: {
    toggleGrid(argue) {
      this.isGrid = this.isGrid != argue ? argue : this.isGrid
    },
    getFilterState(prop) {
      if (prop == "grid" && this.isGrid) {
        return this.g1
      } else if (prop == "grid" && !this.isGrid) {
        return this.grids
      } else if (prop == "columns" && this.isGrid) {
        return this.columns
      } else {
        return this.c1
      }
    },
  },
  created() {
    this.$store.dispatch("initMenuPage")
  },
  computed: {
    menuData() {
      return this.$store.getters.getMenu
    },
  },
}
</script>

<style lang="scss" scoped src="./menu.scss" />
