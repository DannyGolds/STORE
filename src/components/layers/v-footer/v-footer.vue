<template>
  <footer>
    <div class="container">
      <div class="body">
        <p class="text">
          Политика конфиденциальности и защита прав. Copyriting 2019 ©
        </p>
        <nav class="nav">
          <a
            class="nav-link"
            v-for="link in links"
            :key="link"
            :href="link.path"
            target="_blank"
            >{{ link.name }}</a
          >
        </nav>
        <span class="text">Сайт создан digital агентством yuweb.kz</span>
      </div>
    </div>
  </footer>
</template>

<script>
import links from "./links.js"
export default {
  data() {
    return {
      links,
    }
  },
}
</script>

<style lang="scss" scoped src="./footer.scss" />
