<script setup>
import TheContainer from "@/layout/TheContainer.vue";
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <the-container class="bg-white rounded-2xl mt-12 ">
    <div class="flex align-center px-12">
      <div>
        <h1 class="text-5xl font-bold py-4" style="color: #dfac06">{{ $t("paper-block.h1") }}</h1>
        <p class=" mb-4">{{ $t("paper-block.p") }}</p>
        <button @click="open = true" class="underline cursor-pointer font-bold" style="color: #dfac06">{{ $t("paper-block.button") }}</button>
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">{{ $t("paper-block.h2") }}</h2>
        <ul>
          <li>{{ $t("paper-block.paper-li.1") }}</li>
          <li>{{ $t("paper-block.paper-li.2") }}</li>
          <li>{{ $t("paper-block.paper-li.3") }}</li>
          <li>{{ $t("paper-block.paper-li.4") }}</li>
          <li>{{ $t("paper-block.paper-li.5") }}</li>
          <li>{{ $t("paper-block.paper-li.6") }}</li>
          <li>{{ $t("paper-block.paper-li.7") }}</li>
          <li>{{ $t("paper-block.paper-li.8") }}</li>
        </ul>
      </div>
      <div class="images block p-12">
        <img alt="Paper" src="https://www.awm-muenchen.de/fileadmin/Bilder/Trennkampagne_2022_Zeitungen.jpg" />
        <img alt="Paper" src="https://www.awm-muenchen.de/fileadmin/Bilder/Trennkampagne_2022_Beilagen.jpg" />
      </div>
    </div>
<!--    //Modal//-->
    <div v-if="open" class="modal">
     <div class="modal-content paper">
       <button class="close" @click="open = false">&times;</button>
       <div>
         <h1 class="text-4xl font-bold py-4" style="color: #dfac06">{{ $t("paper-block.modal.h1_1") }}</h1>
         <img alt='paper' src="../../assets/img/trash-separation/5.png">
       </div>
       <div class="text px-12">
         <h1 class="text-4xl font-bold py-4" style="color: #dfac06">{{ $t("paper-block.modal.h1_2") }}</h1>
         <p>{{ $t("paper-block.modal.p") }}</p>
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
  width: 100%;

}
.modal-content {
  border-radius: 20px;
  background-color: #fefefe;
  margin: 10% auto;
  padding: 50px;
  border: 1px solid #888;
  width: 45% !important;
  height: 61vh !important;
}
.close {
  font-weight: 700;
  color: #dfac06;
  font-size: 40px;
  position: absolute;
  top: 20% !important;
  right: 30% !important;
}
  li {
    line-height: 35px;
  }
  li:before {
    content: "•  ";
    color: #dfac06;
  }
.modal {
  margin-top: 100px;
  height: 100% !important;

  .close {
    top: 12%;
    right: 13%;
  }
  h1 {
    font-size: 20px;
    line-height: 25px;
  }

  img {
    width: 80%;
  }

  .modal-content {
    width: 80%;
    height: 60%;
    display: block;

    .text {
      padding: 0 !important;
    }
  }
}

@media (max-width: 768px) {
  .images {
    display: none;
  }

}

@media (max-width: 425px) {
  button {
    display: none;
  }
}
</style>