<template>
  <div ref="app-image" :class="['app-img', { loaded }]">
    <div :style="{ 'padding-top': getPlaceholderHeight }" />
    
    <slot />
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  width: number;
  height: number;
}>()

const loaded = ref(false);

const getPlaceholderHeight = computed(() => {
  return (props.height / props.width) * 100 + '%'
});

const refAppImage = useTemplateRef('app-image');

onMounted(() =>{
  const img = refAppImage.value?.querySelector('img')

  if (img?.complete) {
    loaded.value = true
  }

  img?.addEventListener('load', () => {
    loaded.value = true
  })
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as var;

.app-img {
  position: relative;
  background: var.$gray-light;

  :deep(img) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity var.$transitionTime;
  }

  &.loaded :deep(img)  {
    opacity: 1;
  }
}
</style>
