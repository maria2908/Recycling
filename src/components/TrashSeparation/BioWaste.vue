<script setup>
import TheContainer from "@/layout/TheContainer.vue";

import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <the-container class="bg-white rounded-2xl p-12 mt-12">

    <div class="flex">
      <div class="w-96">
        <h1 class="text-5xl font-bold py-4" style="color: #dfac06">Bioabfall</h1>
        <p>Entsorgen Sie Ihre Küchen- und Gartenabfälle in der braunen Biotonne. Plastiktüten (auch sogenannte "kompostierbare Plastik-Biobeutel") dürfen nicht in die Biotonne! Zugleich entsteht beim Vergärungsprozess Ökostrom</p>
        <br>
        <button @click="open = true" class="underline cursor-pointer font-bold" style="color: #dfac06">Der Weg des Bioabfalls</button>
        <br>
        <br>
        <p>Größere Mengen Baum- und Strauchschnitt können Sie an den Münchner <b>Wertstoffhöfen</b>  entsorgen. </p>
      </div>
      <div class="px-12">
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">Was gehört in die braune Biotonne?</h2>
        <ul>
          <li>Gemüse-, Salat- und Obstreste (roh und gekocht)</li>
          <li>Fleisch- und Fischreste (roh und gekocht)</li>
          <li>Kartoffel-, Eier-, Nuß- und Obstschalen</li>
          <li>(alte) Brot und Backwaren</li>
          <li>Kaffeesatz, Kaffeefilter, Kaffeepads</li>
          <li>Blumen und Pflanzen (ohne Topf), Blumenerde</li>
          <li>Laub, Gras, Baum- und Strauchschnitt</li>
          <li>Zeitungs- und Küchenpapier in kleinen Mengen, um Feuchtigkeit aufzusaugen</li>
        </ul>
      </div>
    </div>
    <div class="flex mt-4" style="width: 50%;">
      <img alt="Paper" src="https://www.awm-muenchen.de/fileadmin/Bilder/AWM-0435_Kampagne_Zero_Waste_2022_AWM-webseite_750x398_9.jpg" />
      <img class="pl-4" alt="Paper" src="https://www.awm-muenchen.de/fileadmin/Bilder/AWM-0435_Kampagne_Zero_Waste_2022_AWM-webseite_750x398_8.jpg" />
    </div>
    <!--    //Modal//-->
    <div v-if="open" class="modal">
      <div class="modal-content bio">
        <button class="close" @click="open = false">&times;</button>
        <div class="">
          <h1 class="text-4xl font-bold py-4" style="color: #dfac06">Was passiert mit dem Inhalt der braunen Tonne?</h1>
          <img class="" alt='paper' src="../../assets/img/trash-separation/6.png">
        </div>
        <div class="px-12">
          <h1 class="text-4xl font-bold py-4" style="color: #dfac06">Der Weg des Bioabfalls</h1>
          <p>In der Verwertungsanlage für Bioabfälle verwandeln Bakterien die Bioabfälle in Biogas und Kompost. Aus dem Kompost werden die Münchner Erden hergestellt, aus dem Biogas entsteht Strom. Die Blumenerde können deine Eltern an den Wertstoffhöfen und am Erdenwerk Freimann kaufen und du kannst darin Blumen oder Gemüse pflanzen.</p>
        </div>
      </div>
    </div>
  </the-container>
</template>

<style scoped>
.bio {
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
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-radius: 20px;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 50px;
  border: 1px solid #888;
  width: 60%;
  height: 60vh;
}
.close {
  font-weight: 700;
  color: #dfac06;
  font-size: 40px;
  position: absolute;
  top: 25%;
  right: 22%;
}
li {
  line-height: 35px;
}
li:before {
  content: "•  ";
  color: #dfac06;
}
</style>