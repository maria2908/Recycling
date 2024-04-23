<script setup>
import TheContainer from "@/layout/TheContainer.vue";
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <the-container class="bg-white rounded-2xl mt-12 ">
    <div class="flex align-center px-12">
      <div>
        <h1 class="text-5xl font-bold py-4" style="color: #dfac06">Papier</h1>
        <p class="w-96 mb-4">Entsorgen Sie Papier und Pappe in der blauen Papiertonne. Das Trennen ist wichtig, denn der Einsatz von Altpapier bei der Papierherstellung spart Energie und Wasser und schont die Wälder. Wenn man bei der Papierproduktion das Altpapier aus den Münchner Papiertonnen durch Frischholz ersetzen würde, müsste man jedes Jahr eine zusätzliche Waldfläche in der Größe des Stadtteils Trudering abholzen.
        </p>
        <button @click="open = true" class="underline cursor-pointer font-bold" style="color: #dfac06">Der Weg des Altpapiers</button>
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">Was gehört in die blaue Papiertonne?</h2>
        <ul>
          <li>Zeitungen, Illustrierte, Kataloge, Prospekte</li>
          <li>Briefe, Briefumschläge</li>
          <li>Formulare, Computerpapier</li>
          <li>Schulhefte, Bücher ohne Einband</li>
          <li>Gefaltete Pappkartons, Packpapier ohne Klebeband</li>
          <li>Saubere Papiertüten auch mit Sichtfenster</li>
          <li>Verpackungen aus Papier</li>
          <li>Pizzakarton ohne Essensreste</li>
        </ul>
      </div>
      <div class="block p-12">
        <img alt="Paper" src="https://www.awm-muenchen.de/fileadmin/Bilder/Trennkampagne_2022_Zeitungen.jpg" />
        <img alt="Paper" src="https://www.awm-muenchen.de/fileadmin/Bilder/Trennkampagne_2022_Beilagen.jpg" />
      </div>
    </div>
<!--    //Modal//-->
    <div v-if="open" class="modal">
     <div class="modal-content paper">
       <button class="close" @click="open = false">&times;</button>
       <div>
         <h1 class="text-4xl font-bold py-4" style="color: #dfac06">Was passiert mit dem Inhalt der blauen Tonne?</h1>
         <img alt='paper' src="../../assets/img/trash-separation/5.png">
       </div>
       <div class="px-12">
         <h1 class="text-4xl font-bold py-4" style="color: #dfac06">Der Weg des Altpapiers</h1>
         <p>Als Papierrecycling bezeichnet man das Sammeln, die Aufbereitung und Wiederverwertung von Altpapier oder Karton. Ich verwende in der Schule nur Hefte aus Recyclingpapier. Das schont die Umwelt.</p>
       </div>
     </div>
    </div>
  </the-container>

</template>

<style scoped >
.paper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  .body--dark & {
    background-color: #151515 !important;
    color: white !important;
  }
  .body--light & {
    background-color: white;
  }
}
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: -10%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.7);
}
.modal-content {
  border-radius: 20px;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 50px;
  border: 1px solid #888;
  width: 55%;
  height: 60vh;
}
.close {
  font-weight: 700;
  color: #dfac06;
  font-size: 40px;
  position: absolute;
  top: 24%;
  right: 24%;
}
  li {
    line-height: 35px;
  }
  li:before {
    content: "•  ";
    color: #dfac06;
  }
</style>