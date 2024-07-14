<template>
  <div class="error">
    <h1 class="error-text">Извини, но у нас не найдена страница :(</h1>
  </div>
</template>

<script>
export default {
  name: "errPage",
  data() {},
}
</script>

<style scoped lang="scss">
.error {
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  &-text {
    font-size: 3em;
    color: $m-y-col;
    text-align: center;
    font-family: "SF Pro Display", sans-serif;
  }
}
</style>
