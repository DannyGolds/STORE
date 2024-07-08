<template>
  <section class="wrap">
    <div class="info">
      <h1 class="info-title">Эксклюзивное меню на Ваш вкус</h1>
      <router-link to="/menu" class="text router"
        >Смотреть всё меню</router-link
      >
      <btn
        text="Акции на сегодня"
        br="0 22px 22px 0"
        color="#1f2125"
        height="90"
        width="316"
        :img="fire"
        imgMargin="0 18px 0 0"
        @click="$router.push('/menu')"
      />
    </div>
    <div class="galery" ref="container">
      <div class="scrollbar">
        <div class="scroll" ref="scrl">
          <div
            class="circle"
            ref="thumb"
            @mousedown.prevent="scroll"
            @dragstart.prevent="
              () => {
                return false
              }
            "
          ></div>
        </div>
        <router-link to="/menu" class="text link">Смотреть всё</router-link>
      </div>
      <div class="galery-container" ref="cont" scroll="no">
        <main-cart
          v-for="cart in getGallery"
          :key="cart.img"
          :img="require(`@/assets/images/content/${cart.imgPath}`)"
          :title="cart.title"
          @click="$router.push({ name: cart.url })"
        />
      </div>
    </div>
  </section>
</template>

<script>
import btn from "@/components/shared/ui-btn/shared-btn.vue"
import mainCart from "@/components/shared/ui-main-cart/ui-cart.vue"
import { fire } from "@/components/shared/icons.js"
export default {
  name: "main-page",
  components: {
    mainCart,
    btn,
  },
  data() {
    return {
      fire,
    }
  },
  methods: {
    scroll(e) {
      const thumb = this.$refs.thumb
      const cont = this.$refs.cont
      const hiddenWidth =
        parseInt(cont.scrollWidth) -
        parseInt(this.$refs.container.getBoundingClientRect().width)
      const hiddenWidth09 =
        parseInt(cont.scrollWidth) -
        parseInt(this.$refs.container.getBoundingClientRect().width) * 0.9
      const scrlWidth = getComputedStyle(this.$refs.scrl).width
      const shiftX = e.clientX - thumb.getBoundingClientRect().left
      function onmousemove(e) {
        moveAt(e.pageX)
      }

      function moveAt(pageX) {
        if (pageX - shiftX - cont.getBoundingClientRect().left < 0) {
          thumb.style.left = 0
          return false
        } else if (
          parseInt(pageX - shiftX - cont.getBoundingClientRect().left) >
          parseInt(scrlWidth)
        ) {
          thumb.style.left = parseInt(scrlWidth) - 12 + "px"
          return false
        }
        thumb.style.left =
          pageX - shiftX - cont.getBoundingClientRect().left + "px"
        if (window.innerWidth <= 1830) {
          cont.scrollTo(
            (parseInt(thumb.style.left) * hiddenWidth09) / parseInt(scrlWidth),
            0
          )
        } else {
          cont.scrollTo(
            (parseInt(thumb.style.left) * hiddenWidth) / parseInt(scrlWidth),
            0
          )
        }
      }
      function onMouseUp() {
        document.removeEventListener("mouseup", onMouseUp)
        document.removeEventListener("mousemove", onmousemove)
      }

      document.addEventListener("mousemove", onmousemove)

      document.addEventListener("mouseup", onMouseUp)
    },
  },
  created() {
    this.$store.dispatch("initMainGallery")
  },
  computed: {
    getGallery() {
      return this.$store.getters.getMainGallery
    },
  },
}
</script>

<style lang="scss" scoped src="./main-page.scss" />
