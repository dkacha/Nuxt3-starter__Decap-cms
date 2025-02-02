<template>
  <footer class="root">
    <p class="col">
      Chcete-li stavět svůj dům, továrnu, školu, nemocnici, svěřte se nám.
      Pomůžeme Vám odborně stanovit východiska i cíle. Pomůžeme Vám najít úsporné
      řešení. Vypracujeme projekt a pomůžeme zajistit realizaci.
    </p>
    <div class="col">
      <b class="title">Kontakty</b>
      Mobil: +420 604 268 857
      <br>
      Tel: +420 222 521 830, +420 222 516 112
      <br>
      E-mail:
      <a href="mailto:genesis@ateliergenesis.cz">
        genesis@ateliergenesis.cz
      </a>
      <br>
      Adresa: Nad Kazankou 194/32, Praha 7 - Troja
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as var;

.root {
  display: flex;
  flex-wrap: wrap;
  margin: 40px -15px 0;
  font-size: 12px;
  border-top: 1px solid var.$gray;

  @media (min-width: var.$mq-tablet) {
    margin-top: 80px;
  }
}

.col {
  flex: 1;
  min-width: 210px;
  padding: 40px 15px 0;
  margin: 0;
  letter-spacing: normal;
  line-height: 2;
}

.title {
  display: block;
  font-size: 14px;
  color: var.$black;
  margin-bottom: 3px;
}
</style>
