<template>
  <container-half class="bg-white rounded-2xl p-12 mt-12">

    <div class="flex">
      <div>
        <h1 class="text-4xl font-bold py-4" style="color: #dfac06">Verpackungen</h1>
        <p>Sammeln Sie Verpackungen getrennt, denn sie können verwertet werden. Vor der Abgabe müssen die Verpackungen geleert sein, ausspülen ist nicht notwendig. Trennen Sie bitte unterschiedliche Materialien voneinander, z. B. den Aludeckel vom Joghurtbecher.
        </p>
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">Was gehört an die Wertstoffinsel?</h2>
        <ul>
          <li>Glas (weiß, braun, grün). Deckel müssen nicht abgeschraubt werden</li>
          <li>Andersfarbiges Glas (z. B. blau, rot, schwarz) gehört zum Grünglas</li>
          <li>Kunststoffe (z. B. Getränkekartons, Kunststoffverpackungen, Kunststoff-Flaschen, Kunststoff-Becher, Styropor, Verpackungsfolien)</li>
          <li>Dosen/Alu (z. B. Alufolien, Aluminium, Spraydosen, Kronkorken, Schraubverschlüsse von Flaschen und Gläsern, Weißblech, Konservendosen)</li>
        </ul>
      </div>
      <img alt="Residual Waste" src="../../assets/img/trash-separation/2.png" />
    </div>
  </container-half>
</template>
<script setup>
import ContainerHalf from "@/layout/ContainerHalf.vue";
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