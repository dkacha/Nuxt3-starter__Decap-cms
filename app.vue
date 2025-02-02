<template>
  <div class="container">
    <transition name="fade">
      <a
        v-show="isOpenMobileNavigation"
        class="overlay-close hidden-desktop"
        href="#"
        @click.prevent="setMobileNavigation(false)"
      />
    </transition>

    <header class="sidebar">
      <a
        href="#"
        class="hidden-desktop hamburger"
        @click.prevent="setMobileNavigation(true)"
      >
        <hamburger />
      </a>

      <nuxt-link to="/" class="logo-link">
        <app-logo class="logo" />
      </nuxt-link>

      <div
        :class="[
          'load-content',
          'sidebar__toggle',
          { 'sidebar__toggle--open': isOpenMobileNavigation }
        ]"
      >
        <div class="sidebar__toggle-center">
          <nav class="navigation">
            <app-navigation />
          </nav>
          <p class="copyright">
            ATELIER GENESIS, spol. s r. o. {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </header>
    <div class="content load-content">
      <section>
        <nuxt-page />
      </section>
      <app-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpenMobileNavigation = ref(false);
const isMobil = ref(false);
const isTablet = ref(false);
const isDesktop = ref(false);

const route = useRoute();

watch(() => route.fullPath, () => {
  isOpenMobileNavigation.value = false
})

function setMobileNavigation (isOpen: boolean) {
  isOpenMobileNavigation.value = isOpen
}

function deviceDetektor () {
  isMobil.value = window.matchMedia('(max-width: 549.999px)').matches
  isTablet.value = window.matchMedia(
    '(min-width: 550px) and (max-width: 991.999px)'
  ).matches
  isDesktop.value = window.matchMedia('(min-width: 992px)').matches
}

useHead({
  titleTemplate: (titleChunk) => {
    return (titleChunk ? `${titleChunk} - ` : '') + '::: ATELIER GENESIS :::';
  }
})

onBeforeMount(() => {
  deviceDetektor()
  window.addEventListener('resize', deviceDetektor)
})
</script>

<style lang="scss">
@use '~/assets/scss/variables' as var;
@use '~/assets/scss/pageTransition';
@use '~/assets/scss/document';
@use '~/assets/scss/animations';
@use '~/assets/scss/animationsVue';
@use '~/assets/scss/utilities';

.overlay-close {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: rgba(var.$black, 0.7);
}

.load-content {
  opacity: 0;
  animation: fadeIn 0.7s 1.8s forwards;
}

.container {
  position: relative;
  max-width: 950px;
  padding: 0 15px;
  margin: auto;

  @media (min-width: var.$mq-tablet) and (max-width: var.$mq-tablet-max) {
    padding-right: 65px;
    padding-left: 65px;
  }
}

.hamburger {
  float: left;
  padding: 11px 15px;
  margin-left: -15px;
  background: var.$white;

  @media (min-width: var.$mq-tablet) {
    position: fixed;
    top: 40px;
    z-index: 1;
    padding: 21px;
    margin-left: -64px;
  }
}

.sidebar {
  @media (min-width: var.$mq-desktop) {
    position: fixed;
    z-index: 1;
    top: 50%;
    width: 240px;
    max-height: 100%;
    transform: translateY(-50%);
    text-align: right;
    overflow: auto;
    background: var.$white;
    padding: 20px 20px 20px 0;
  }

  @media (max-width: var.$mq-tablet-max) {
    max-width: 600px;
    margin: auto;
  }

  &__toggle {
    @media (max-width: var.$mq-tablet-max) {
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
      width: 250px;
      height: 100%;
      text-align: center;
      background: var.$black;
      transform: translateX(-100%);
      transition: transform var.$transitionTime;

      &--open {
        transform: translateX(0);
      }
    }
  }

  &__toggle-center {
    @media (max-width: var.$mq-tablet-max) {
      flex: 1;
      max-height: 100vh;
      overflow: auto;
      padding: 20px 0;
    }
  }
}

.content {
  padding-bottom: 50px;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (min-width: var.$mq-desktop) {
    padding-top: 50px;
    max-width: 590px;
    margin-right: 0;
  }
}

.logo-link {
  display: block;
  text-decoration: none;

  @media (max-width: var.$mq-tablet-max) {
    margin: 40px 0;
  }

  @media (max-width: var.$mq-mobile-max) {
    margin: 20px 0;
  }
}

.navigation {
  margin: 0;

  @media (min-width: var.$mq-desktop) {
    margin-top: 70px;
  }
}

.copyright {
  margin: 5px 0 0;
  font-size: 11px;
  color: var.$gray;
  letter-spacing: 0.01em;
}
</style>
