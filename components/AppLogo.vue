<template>
  <span class="app-logo">
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 143.12"
    >
      <path
        class="symbol-a"
        d="M49.28 33.18c-5.14 11.5-10.3 22.97-15.47 34.45l-9.2 20.55-12.76 28.41A13788.3 13788.3 0 000 143.03c7.69-.05 12.05.06 21.62 0l12.56-27.96 12.56-27.96 26.29-.06c21-.03 26.25-.09 26.08-.26-.1-.11-1.98-4.2-4.18-9.06l-3.96-8.85-18.01-.05c-14.35-.04-17.98-.09-17.9-.27a3053 3053 0 0119.97-44.11c.1.1 22.76 50.54 30 66.77l3.9 8.66 1.53 3.47a51.86 51.86 0 001.29 2.77c.12.12 2.77-2.52 4.16-4.18a49.74 49.74 0 006.74-10.37 22.37 22.37 0 001.9-4.82c0-.2-7.64-17.4-17-38.24L88.16 5.36 85.79.09 74.99.04 64.19 0zm86.27 83.09a75.76 75.76 0 01-11.72 11.58l-1.77 1.4.3.54c.16.3 1.6 3.43 3.15 6.94l2.84 6.4H150l-3.82-8.55c-1.38-3.02-2.74-6.06-4.1-9.1l-.31-.7c-.18-.33-.68-1.58-.93-2.2a227.65 227.65 0 01-3.5-7.78l-.26-.46z"
      />
      <path
        class="symbol-g"
        d="M55.57 4.56A77.37 77.37 0 0037.6 11.8a73.74 73.74 0 00-24.03 22.16 66.83 66.83 0 00-1.48 72.88c.05 0 .35-.59.66-1.3l1.68-3.7 2.86-6.35 2.85-6.34c.61-1.32 1.11-2.5 1.11-2.6 0-.1-.16-.81-.35-1.6a45.14 45.14 0 01-1.74-13.4c0-5.97.66-10.18 2.41-15.46A50.12 50.12 0 0134.1 35.9c1-1 2-1.98 3.04-2.95a62.9 62.9 0 019.97-6.85c.71-.36 1.38-.8 2-1.3 0-.09.22-.62.47-1.18l3.2-7.1 3.3-7.32c1.98-4.3 2.36-5.29 2.02-5.25-.1 0-1.22.28-2.52.6zm37.79 3.52c1.06 2.33 2.11 4.67 3.16 7.02l2.88 6.4 1.59 3.51 1.5.86c.82.47 2.43 1.43 3.57 2.15a53.9 53.9 0 0119.62 21.5l.88 1.76h9.06c5 0 9.07-.07 9.07-.14 0-.4-1.93-5.36-2.9-7.5a71.77 71.77 0 00-40.43-36.9c-2.85-1.06-8.84-2.8-9.57-2.8-.24 0 .12.94 1.57 4.14zm27.39 60.76c0 .13.59 1.56 1.32 3.18l3.93 8.76 2.61 5.83-1.09 2.75a53.5 53.5 0 01-26.51 28.57 56.2 56.2 0 01-24.4 6.02c-6.34.24-12.67-.6-18.74-2.47a60.36 60.36 0 01-16.06-7.63c-1.3-.82-2.4-1.48-2.43-1.44-.09.1-5.93 13.04-6.82 15.11l-.24.56 1.83 1.16a74.5 74.5 0 0024.17 10.02 75.58 75.58 0 0049.65-5.68A71.47 71.47 0 00135 111.12a68.15 68.15 0 0012.47-31.34c.16-1.23.34-4.07.4-6.67l.1-4.5h-13.61c-11.13 0-13.6.04-13.6.23zM150 143.12c-100 0-50 0 0 0z"
      />
    </svg>
    <h1 class="label">
      ATELIER GENESIS
    </h1>
  </span>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as var;

.app-logo {
  display: block;
  transform: translateX(-30px);
  animation: fromLeft 3.5s forwards;

  @media (max-width: var.$mq-tablet-max) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.icon {
  display: block;
  width: 30px;
  height: 29px;
  fill: var.$gray;

  @media (min-width: var.$mq-tablet) {
    width: 60px;
    height: 57px;
  }

  @media (min-width: var.$mq-desktop) {
    width: 150px;
    height: 143px;
    margin-left: auto;
  }
}

.symbol-a {
  opacity: 0;
  animation: fadeIn 0.7s 0.5s forwards;
}

.symbol-g {
  opacity: 0;
  animation: fadeIn 0.7s 1s forwards;
}

.label {
  margin-left: 13px;
  text-align: right;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.04em;
  opacity: 0;
  animation: fadeIn 0.7s 1.3s forwards;

  @media (min-width: var.$mq-tablet) {
    margin-left: 20px;
    font-size: 20px;
  }

  @media (min-width: var.$mq-desktop) {
    margin: 10px 0 0;
    font-size: 16px;
  }
}
</style>
