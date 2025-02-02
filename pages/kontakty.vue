<template>
  <div>
    <app-map />
    <div class="wrap-gray">
      <h1 class="title-page">
        {{ title }}
      </h1>
      <p>
        E-mail:
        <a href="mailto:genesis@ateliergenesis.cz">genesis@ateliergenesis.cz</a>
        <br>
        Mobil: +420 604 268 857
        <br>
        Tel: +420 222 521 830, +420 222 516 112
      </p>

      <p>
        Atelier Genesis, spol. s r. o. <br>
        Nad Kazankou 194/32, Praha 7 <br>
        Praha 7 - Troja <br>
        171 00
      </p>

      <p>
        IČ: 64574652 <br>
        DIČ: CZ64574652 <br>
        Datová schránka: nent9d2 <br>
        <small>
          vedeno Městským soudem v Praze odd.C , vložka 41787
        </small>
      </p>
      <team />
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Kontakty'

useHead({
  title,
})
</script>
