<template>
  <the-container class="bg-white rounded-2xl p-12 mt-12">

    <div class="flex">
      <div>
        <h1 class="text-4xl font-bold py-4" style="color: #dfac06">Wertstoffhof</h1>
        <p>An den Wertstoffhöfen können Sie sperrige Abfälle, Problemstoffe und Grünschnitt in haushaltsüblicher Art und Menge gebührenfrei abgeben.</p>
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">Was gehört an die Wertstoffhof?</h2>
        <ul>
          <li>Bauschutt</li>
          <li>Elektro-und Elektronikschrott</li>
          <li>Problemabfälle</li>
          <li>Gartenabfälle</li>
          <li>Holz</li>
          <li>Altkleider und Schuhe</li>
          <li>Kunststoff/Styropor</li>
          <li>Papier/Kartonagen</li>
          <li>Sperrmüll</li>
        </ul>
      </div>
      <img alt="Residual Waste" src="../../assets/img/trash-separation/4.png" />
    </div>
  </the-container>
</template>
<script setup>
import TheContainer from "@/layout/TheContainer.vue";

</script>

<style scoped>
li {
  line-height: 35px;
}
li:before {
  content: "•  ";
  color: #dfac06;
}
</style>