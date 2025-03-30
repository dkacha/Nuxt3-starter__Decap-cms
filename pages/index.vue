<template>
  <div>
    <nuxt-img
       :src="data.cover.image"
       :alt="data.cover.alt"
       :width="590"
    />

    <div v-if="data.supplement" class="space-top-medium" v-html="marked(data.supplement)" />

    <img-lazy
      v-for="(photo, index) in data.photoList"
      :key="index"
      :src="photo.image"
      :alt="photo.alt"
      :width="590"
      :height="590"
      class="space-top-medium" 
    />
  </div>
</template>


<script setup lang="ts">
import data from '@/content/uvod.json'
import { marked } from 'marked'
</script>