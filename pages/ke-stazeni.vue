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
    </div>
    <div v-for="(section, index) in data.download_sections" :key="index" class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        {{ section.section_title }}  
      </h2>
      <ul>
        <li v-for="(file, fileIndex) in section.files" :key="`${index}-${fileIndex}`">
          <a :href="file.file">
            {{ file.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '@/content/ke-stazeni.json'

const title = 'Ke stažení'

useHead({
  title,
})
</script>
