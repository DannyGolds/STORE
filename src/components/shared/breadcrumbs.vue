<template>
  <div class="breadcrumb">
    <div class="container">
      <div class="breadcrumbs">
        <p class="breadcrumbs-route">
          {{ before }}
          <span class="breadcrumbs-active">{{ active }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    before: {
      type: String,
      default: "Главная",
    },
    active: {
      type: String,
      default: "/",
    },
  },
}
</script>
