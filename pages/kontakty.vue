<template>
  <div>
    <app-map v-if="data.gps" :center="data.gps.replaceAll(' ', '').split(',').map(Number)" />
    <div class="wrap-gray">
      <h1 class="title-page">
        {{ title }}
      </h1>

      <div v-html="marked(data.description)" />

      <ul v-if="data.employees" class="team">
        <li v-for="(employee, index) in data.employees" :key="index" class="team__item">
          <h2 class="team__name">
            {{ employee.name }}
          </h2>
          <a :href="'mailto:' + employee.email">
            {{ employee.email }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '@/content/kontakty.json'
import { marked } from 'marked'

const title = 'Kontakty'

useHead({
  title,
})
</script>

<style lang="scss" scoped>
.team {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 -15px;

  &__item {
    flex: 1;
    min-width: 220px;
    margin: 30px 15px 10px;
    padding-left: 0;

    &::before {
      display: none;
    }
  }

  &__name {
    margin: 0;
    font-size: 18px;
  }
}
</style>
