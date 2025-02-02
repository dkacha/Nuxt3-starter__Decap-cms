<template>
  <div class="app-blockquote">
    <img class="icon" src="~/assets/images/icons/quote-left.svg">
    <blockquote class="blockquote">
      <slot />
    </blockquote>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as var;

.app-blockquote {
  position: relative;
  padding-left: 50px;
}

.blockquote {
  margin: 0;
  line-height: 1.5;
  font-style: italic;

  @media (min-width: var.$mq-desktop) {
    font-size: 16px;
  }
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  opacity: 0.4;
}
</style>
