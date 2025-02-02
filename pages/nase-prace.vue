<template>
  <div>
    <div class="wrap-gray space-bottom-medium">
      <h1 class="title-page">
        {{ title }}
      </h1>
    </div>

    <div
      v-for="(work, index) in ourWorks"
      :key="'thumb' + index"
    >
      <a
        class="item"
        :href="work.gallery[0]"
        @click.prevent="openSilentGallery(index)"
      >
        <app-image class="space-top-medium" :width="590" :height="590">
          <img :src="work.cover" :alt="work.title" loading="lazy">
        </app-image>
        <h2 class="item__title">
          {{ work.title }}
        </h2>
      </a>

      <silent-box
        ref="gallery-detail"
        class="silentbox"
        :gallery="getSilentGallery(work.gallery)"
        preview-count="1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ourWorks, type TOurWorkitem } from '~/assets/data/ourWorks'

const title = 'Naše práce'

useHead({
  title,
})

function getSilentGallery (images: TOurWorkitem['gallery']) {
  return images.map((item) => {
    return {
      src: item
    }
  })
}

interface SilentBoxRef {
  openOverlay: (item: { src: string }, index: number) => void;
}

const refGalleryDetailList = useTemplateRef<SilentBoxRef[]>('gallery-detail');

function openSilentGallery (index: number) {
  const refGalleryDetail = refGalleryDetailList.value?.[index];
  
  if (!refGalleryDetail || !refGalleryDetail.openOverlay) {
    return
  }
  
  const openItem = {src: ourWorks[index]?.gallery[0]}
  refGalleryDetail.openOverlay(openItem, 0);
}
</script> 

<style lang="scss" scoped>
@use 'sass:color';
@use '~/assets/scss/variables' as var;

.item {
  display: block;
  text-decoration: none;
  color: inherit;
  background: var.$gray-light;
  transition: background var.$transitionTime;

  &:hover {
    background: color.adjust(var.$gray-light, $lightness: -4%);
  }

  &__title {
    margin: 0;
    padding: 20px;

    @media (min-width: var.$mq-tablet) {
      padding: 30px 50px;
    }
  }
}

:deep() {
  .silentbox > * {
    opacity: 0;
    animation: fadeIn 0.3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }

  .silentbox-item {
    display: none;
  }

  #silentbox-overlay__background {
    background: var.$gray-dark;
  }

  #silentbox-overlay__embed {
    top: 0;
    height: 95%;
    width: 95%;
  }

  #silentbox-overlay__arrow-buttons {
    .arrow {
      border: 0;
      transform: rotate(0deg);
      background: none;

      &.arrow-next {
        transform: rotate(180deg);
      }

      &::before {
        content: "";
        background: var.$black;
        position: absolute;
        top: -50%;
        left: 0;
        width: 200%;
        height: 200%;
        border-radius: 50%;
        z-index: -1;
        opacity: 0.6;
      }

      &::after {
        content: '';
        border-top: 1px solid var.$white;
        border-left: 1px solid var.$white;
        position: absolute;
        top: 15%;
        left: 80%;
        width: 70%;
        height: 70%;
        transform: rotate(-45deg);
      }
    }
  }
}

</style>

