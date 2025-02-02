<template>
  <ul class="navigation">
    <li
      v-for="(item, index) in navigationList"
      :key="index"
      :class="[
        'item',
        {
          'item--small': item.small
        }
      ]"
    >
      <nuxt-link
        :to="item.to"
        class="link"
      >
        {{ item.text }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">

const navigationList = [
  {
    to: '/',
    text: 'Úvod'
  },
  {
    to: '/kdo-jsme',
    text: 'Kdo jsme'
  },
  {
    to: '/co-nabizime',
    text: 'Co nabízíme'
  },
  {
    to: '/nase-prace',
    text: 'Naše práce'
  },
  {
    to: '/kontakty',
    text: 'Kontakty'
  },
  {
    to: '/ke-stazeni',
    text: 'Ke stažení',
    small: true
  }
];
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as var;

.navigation {
  list-style: none;
  padding: 0;
}

.item {
  padding: 0;
  margin-bottom: 5px;
  font-size: 18px;

  &::before {
    display: none;
  }

  &--small {
    margin: 55px 0 0;
    font-size: 13px;
  }
}

.link {
  color: var.$gray;
  text-decoration: none;
  transition: color var.$transitionTime;

  &:hover,
  &.router-link-active {
    color: var.$white;

    @media (min-width: var.$mq-desktop) {
      color: var.$black;
    }
  }
}

</style>
