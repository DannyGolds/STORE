<template>
  <header class="header">
    <div class="container">
      <div class="body">
        <div class="wr">
          <router-link to="/">
            <img src="@/assets/images/icons/logo.svg" alt="" class="icon" />
          </router-link>
          <button
            class="brg"
            @click="toggleMenuActivity"
            :class="{ active: isMobileMenuActive }"
          >
            <span></span>
          </button>
        </div>
        <div class="content">
          <nav class="header-nav">
            <ul class="socials">
              <a
                class="s-itm"
                v-for="soc in socials"
                :key="soc"
                :href="soc.url"
                target="_blank"
              >
                <img
                  :src="require(`@/assets/images/icons/${soc.icon}`)"
                  :alt="soc.name"
                  class="s-svg"
                />
              </a>
            </ul>
            <ul class="main-nav" :class="{ active: isMobileMenuActive }">
              <li class="nav-item" v-for="itm in nav" :key="itm.name">
                <router-link
                  active-class="route-active"
                  :to="itm.urlPath"
                  class="nav-url"
                  >{{ itm.urlTitle }}</router-link
                >
              </li>
            </ul>
          </nav>
          <nav class="store-nav">
            <input type="text" class="store-input" />
            <button class="store-bg-btn search"></button>
            <span class="store-text">корзина</span>
            <button class="store-bg-btn busket" @click="pushToPage('/busket')">
              <img src="@/assets/images/icons/basket.svg" alt="" />
            </button>
            <span class="store-text y">{{ "00" }}</span>
            <btn
              text="акции"
              :img="fire"
              br="50px"
              height="40"
              color="#16181b"
              @click="pushToPage('/stocks')"
            />
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import btn from "@/components/shared/ui-btn/shared-btn.vue"
import { nav, socials } from "@/components/shared/navigation.js"
import { fire } from "@/components/shared/icons.js"
export default {
  components: {
    btn,
  },
  data() {
    return {
      fire,
      nav,
      socials,
      isMobileMenuActive: false,
    }
  },
  methods: {
    pushToPage(page) {
      this.$router.push(page)
    },
    toggleMenuActivity() {
      this.isMobileMenuActive = !this.isMobileMenuActive
    },
  },
}
</script>

<style src="./header.scss" lang="scss" scoped></style>
