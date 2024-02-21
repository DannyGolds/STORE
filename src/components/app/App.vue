<template>
  <div class="wrapper">
    <v-header></v-header>
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "@/components/layers/v-header/v-header.vue"
import vFooter from "@/components/layers/v-footer/v-footer.vue"
export default {
  name: "App",
  components: {
    vHeader,
    vFooter,
  },
}
</script>

<style lang="scss" scoped src="./app.scss" />
