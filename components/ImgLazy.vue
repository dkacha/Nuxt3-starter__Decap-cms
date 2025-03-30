<template>
    <div class="img-lazy"> 
      <div :style="{ 'padding-top': getPlaceholderHeight }" />
      <nuxt-img 
        :src="props.src"
        :alt="props.alt"
        :width="props.width"
        :height="props.height"
        :custom="true"
        fit="cover"
        loading="lazy"
        placeholder-class="img-loading"
        v-slot="{ src, isLoaded, imgAttrs }"
>
          <img
            v-bind="imgAttrs"
            :class="{
              'img-loaded': isLoaded
            }"
          >
        </nuxt-img>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  width: number;
  height: number;
  alt?: string;
}>()

const getPlaceholderHeight = computed(() => {
  return (props.height / props.width) * 100 + '%'
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as var;

.img-lazy {
  position: relative;
  background: var.$gray-light;

  :deep(img) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity var.$transitionTime;

    &.img-loaded {
      opacity: 1;
    }
  }
}
</style>
