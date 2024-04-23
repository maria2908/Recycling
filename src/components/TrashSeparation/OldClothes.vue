<template>
  <the-container class="bg-white rounded-2xl p-12 mt-12">

    <div class="flex">
      <div>
        <h1 class="text-4xl font-bold py-4" style="color: #dfac06">Altkleider und Schuhe</h1>
        <p>Leider landen noch viele Altkleider in den Restmülltonnen. Altkleider sind einfach zu schade für die Restmülltonne. Nutzen Sie die zahlreichen Altkleidecontainer des AWM im Stadtgebiet oder auf den Wertstoffhöfen.
        </p>
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">Was gehört an die Altkleider und Schuhe?</h2>
        <ul>
          <li>Damen-, Herren- und Kinderbekleidung</li>
          <li>Saubere Schuhe</li>
          <li>Hüte, Handschuhe</li>
          <li>Haushaltswäsche (Tischtücher, Badetücher usw.)</li>
          <li>Vorhänge, Gardinen</li>
          <li>Bettwäsche</li>
        </ul>
        <br>
        <p><b>Nur Altkleider in gut verschlossenen Tüten können wiederverwendet werden!</b></p>
      </div>
      <img alt="Residual Waste" src="../../assets/img/trash-separation/3.png" />
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