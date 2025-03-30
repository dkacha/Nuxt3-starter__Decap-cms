<template>
  <div>
    <nuxt-img
       :src="data.cover.image"
       :alt="data.cover.alt"
       :width="590"
    />
    <div class="wrap-gray">
      <h1 class="title-page">
        {{ title }}
      </h1>

      <div v-html="marked(data.description)" />
    </div>

    <div v-for="(item, index) in data.basic_info_boxes" :key="index" class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        {{ item.title }}
      </h2>

      <div v-html="marked(item.description)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '@/content/co-nabizime.json'
import { marked } from 'marked'

const title = 'Co nabízíme'

useHead({
  title,
})
</script>
