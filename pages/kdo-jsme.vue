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

    <div class="wrap-gray space-top-medium" v-for="(box, index) in data.basic_info_boxes">
      <h2 class="space-top-medium title-section" v-text="box.title" />
      <p v-html="box.description" />
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '@/content/kdo-jsme.json'
import { marked } from 'marked'

const title = 'Kdo jsme'

useHead({
  title,
})
</script>
