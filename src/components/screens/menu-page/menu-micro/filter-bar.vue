<template>
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
            @click="toggleTheme(false)"
            v-html="grids"
          ></button>
          <button
            class="filter-btn"
            @click="toggleTheme(true)"
            v-html="columns"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { columns, grids } from "@/components/shared/icons"
export default {
  name: "Filtered",
  data() {
    return {
      columns,
      grids,
    }
  },
  methods: {
    toggleTheme(prop) {
      this.$store.dispatch("setMenuOptions", { isDarkTheme: prop })
    },
  },
}
</script>

<style lang="scss" scoped>
.filt {
  font-size: 16px;
  font-weight: 600;
  font-family: "SF Pro Display", sans-serif;
  color: $m-y-col;
  &:nth-child(2) {
    margin-left: 30px;
  }
}

button.filter-btn {
  border: none;
  background-repeat: no-repeat;
  margin-left: 25px;
  background-color: transparent;
  cursor: pointer;
}

.filter-item {
  position: relative;
  background: transparent;
  border: none;
  height: 30px;
  padding: 5px;
  color: $m-t-col;
  cursor: pointer;
  border-radius: 0;
  option {
    background: $m-d-col;
    &:focus {
      background: #000;
    }
  }
}
.filter-bar {
  display: flex;
  align-items: center;
}
</style>
