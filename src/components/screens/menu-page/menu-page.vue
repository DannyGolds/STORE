<template>
  <section class="menu">
    <breadcrumbs before="Главная / Меню /" active="Алкогольные напитки" />
    <filtered v-show="$route.path.endsWith('menu/') | $route.path.endsWith('menu')"/>
    <div class="container">
      <div class="content">
        <aside class="menu-bar" id="sidebar">
          <h1 class="title">Наше меню</h1>
          <ul class="menu-items">
            <ul
              class="menu-item"
              v-for="(item, key) in menuList"
              :key="key"
              :class="{ active: menuOptions.activeListMenu == key }"
            >
              <p
                class="menu-items-title"
                @click="
                  () => {
                    setMenuOptions({ activeListMenu: key })
                    setMenuOptions({
                      activeItemMenu: Object.keys(
                        menuList[menuOptions.activeListMenu].assort
                      )[0],
                    })
                  }
                "
              >
                {{ item.title }}
              </p>
              <li
                class="menu-items-item"
                v-for="(assortItem, assortKey) in item.assort"
                :key="assortKey"
                v-show="menuOptions.activeListMenu == key"
              >
                <button
                  :class="{ active: menuOptions.activeItemMenu == assortKey }"
                  @click="
                    () => {
                      setMenuOptions({ activeItemMenu: assortKey })
                    }
                  "
                >
                  {{ assortItem.title }}
                </button>
              </li>
            </ul>
          </ul>
        </aside>
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "@/components/shared/breadcrumbs.vue"
import Filtered from "./menu-micro/filter-bar.vue"
export default {
  name: "vMenu",
  components: {
    Breadcrumbs,
    Filtered,
  },
  methods: {
    setMenuOptions(payload) {
      this.$store.dispatch("setMenuOptions", payload)
    },
  },
  created() {
    this.$store.dispatch("initMenuPage")
  },
  computed: {
    menuList() {
      return this.$store.getters.getMenu
    },
    menuOptions() {
      return this.$store.getters.getMenuOptions
    },
  },
}
</script>

<style lang="scss" scoped src="./menu.scss" />
