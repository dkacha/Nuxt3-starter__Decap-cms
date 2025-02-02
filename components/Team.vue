<template>
  <ul class="team">
    <li class="team__item">
      <h2 class="team__name">
        Ing. arch. Vít Dušek
      </h2>
      <a href="mailto:genesis@ateliergenesis.cz">
        genesis@ateliergenesis.cz
      </a>
    </li>

    <li class="team__item">
      <h2 class="team__name">
        Ing. arch. David Veselý
      </h2>
      <a href="mailto:vesely@ateliergenesis.cz">
        vesely@ateliergenesis.cz
      </a>
    </li>

    <li class="team__item">
      <h2 class="team__name">
        Ing. Ludmila Knobová
      </h2>
      <a href="mailto:knobova@ateliergenesis.cz">
        knobova@ateliergenesis.cz
      </a>
    </li>

    <li class="team__item">
      <h2 class="team__name">
        Ing. Diana Šimurková
      </h2>
      <a href="mailto:simurkova@ateliergenesis.cz">
        simurkova@ateliergenesis.cz
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.team {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 -15px;

  &__item {
    flex: 1;
    min-width: 220px;
    margin: 30px 15px 10px;
    padding-left: 0;

    &::before {
      display: none;
    }
  }

  &__name {
    margin: 0;
    font-size: 18px;
  }
}
</style>
