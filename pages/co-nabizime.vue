<template>
  <div>
    <img class="d-block" src="../assets/images/co-nabizime.jpg">
    <div class="wrap-gray">
      <h1 class="title-page">
        {{ title }}
      </h1>

      <p>
        Nabízíme následující činnosti podle povahy konkrétní zakázky
      </p>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Příprava zakázky
      </h2>
      <ul>
        <li>
          seznámení s místem stavby nebo objektu k rekonstrukci
        </li>
        <li>
          ověření podmínek územně plánovací dokumentace
        </li>
        <li>
          konzultace záměru se zadavatelem a pomoc při přípravě zadání
        </li>
        <li>
          vypracování přehledu potřebných podkladů
        </li>
        <li>
          předběžný finanční odhad
        </li>
      </ul>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Studie
      </h2>
      <ul>
        <li>
          variantní návrh dispozičního a výtvarného řešení
        </li>
        <li>
          konzultace se zadavatelem a výběr varianty
        </li>
        <li>
          čistopis studie včetně vizualizace návrhu
        </li>
      </ul>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Dokumentace pro územní řízení (DUR)
      </h2>
      <ul>
        <li>
          vypracování dokumentace v rozsahu podle vyhlášky o dokumentaci staveb
        </li>
        <li>
          zajištění průzkumů, zaměření a dalších podkladů
        </li>
        <li>
          zajištění odborných posudků potřebných pro povolení díla
        </li>
        <li>
          zapracování připomínek dotčených orgánů státní správy
        </li>
      </ul>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Dokumentace pro stavební povolení (DSP)
      </h2>
      <ul>
        <li>
          vypracování dokumentace v rozsahu podle vyhlášky o dokumentaci staveb
        </li>
        <li>
          zajištění průzkumů, zaměření a dalších podkladů
        </li>
        <li>
          zajištění odborných posudků potřebných pro povolení díla
        </li>
        <li>
          zapracování připomínek dotčených orgánů státní správy
        </li>
      </ul>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Dokumentace pro provedení stavby a výběr zhotovitele (DPS)
      </h2>
      <ul>
        <li>
          vypracování dokumentace v rozsahu podle vyhlášky o dokumentaci
          staveb včetně zpracování detailů, tabulek výrobků a skladeb
          konstrukcí.
        </li>
        <li>
          vypracování položkového rozpočtu stavby pro nacenění prací dodavatelem
        </li>
      </ul>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Projekty interieru
      </h2>
      <ul>
        <li>
          výtvarný návrh interieru
        </li>
        <li>
          zadávací dokumentace, která je podkladem pro výrobní dokumentaci vypracovanou dodavatelem jednotlivých výrobků a konstrukcí
        </li>
      </ul>
    </div>
    <div class="wrap-gray space-top-medium">
      <h2 class="space-top-medium title-section">
        Autorský dozor
      </h2>
      <ul>
        <li>
          Jedná se o výkon dozoru který objasňuje projekt v průběhu stavby a
          řeší případné problémy realizace. Nejedná se o technický dozor
          investora.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'Co nabízíme'

useHead({
  title,
})
</script>
