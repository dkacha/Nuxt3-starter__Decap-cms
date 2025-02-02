<template>
  <div>
    <img
      class="d-block"
      src="../assets/images/vit-dusek.jpg"
      alt="Ing. arch. Vít Dušek"
    >
    <div class="wrap-gray">
      <h1 class="title-page">
        {{ title }}
      </h1>

      <p>
        Atelier Genesis je pražské architektonické studio. Zabýváme se kompletní
        paletou projekčních prací od přípravy samotné zakázky až po realizaci
        prováděcí dokumentace stavby a následný autorský dozor.
      </p>
    </div>

    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Personální struktura
      </h2>
      <p>
        Kromě kmenových zaměstnanců firmy, inženýrů a architektů zaštiťujících jednotlivé
        zakázky spolupracujeme ustáleným týmem externistů, kteří zajišťují dílčí části
        projektů. Zejména se jedná o statiky, projektanty požárně bezpečnostního řešení,
        projektanty TZB a rozpočtáře. Díky tomu jsme schopní vyprojektovat i velké
        a komplexní stavby.
      </p>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Historie
      </h2>
      <p>
        Atelier Genesis vykonává projekční činnosti v oboru pozemních staveb od roku 1990.
        V roce 1995 byla založena společnost s ručením omezeným Atelier Genesis.
        Tato společnost fakticky nahrazuje předcházející firmu a s touto právní
        subjektivitou pracuje doposud. Současným majitelem a jednatelem firmy je
        Ing. arch. Vít Dušek (ČKA 02492).
      </p>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="title-section">
        Co možná nevíte
      </h2>
      <p>
        Genese je hebrejské slovo a znamená vznik, zrod i počátek.
        Genesis se jmenuje první biblická kniha, ve které je popsáno
        jak Bůh stvořil svět. Každá stavba také potřebuje „stvoření“,
        svůj počátek „dobrý plán“.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Kdo jsme'

useHead({
  title,
})
</script>

<style lang="scss" scoped>
.title-3 {
  margin: 50px 0 30px;
  text-align: center;
}
</style>
