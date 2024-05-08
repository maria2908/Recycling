<script setup>
import TheContainer from "@/layout/TheContainer.vue";

import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <the-container class="bg-white rounded-2xl p-12 mt-12">

    <div class="bio ">
      <div>
        <h1 class="text-5xl font-bold py-4" style="color: #dfac06">{{ $t("bio-block.h1") }}</h1>
        <p>{{ $t("bio-block.p") }}</p>
        <br>
        <button @click="open = true" class="underline cursor-pointer font-bold" style="color: #dfac06">{{ $t("bio-block.button") }}</button>
        <br>
        <br>
        <p>{{ $t("bio-block.p2") }}</p>
      </div>
      <div class="list px-12">
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">{{ $t("bio-block.h2") }}</h2>
        <ul>
          <li>{{ $t("bio-block.bio-li.1") }}</li>
          <li>{{ $t("bio-block.bio-li.2") }}</li>
          <li>{{ $t("bio-block.bio-li.3") }}</li>
          <li>{{ $t("bio-block.bio-li.4") }}</li>
          <li>{{ $t("bio-block.bio-li.5") }}</li>
          <li>{{ $t("bio-block.bio-li.6") }}</li>
          <li>{{ $t("bio-block.bio-li.7") }}</li>
          <li>{{ $t("bio-block.bio-li.8") }}</li>
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
          <h1 class="text-4xl font-bold py-4" style="color: #dfac06">{{ $t("bio-block.modal.h1_1") }}</h1>
          <img class="" alt='paper' src="../../assets/img/trash-separation/6.png">
        </div>
        <div class="text px-12">
          <h1 class="text-4xl font-bold py-4" style="color: #dfac06">{{ $t("bio-block.modal.h1_2") }}</h1>
          <p>{{ $t("paper-block.modal.p") }}</p>
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

@media (max-width: 1500px) {
  .bio {
    display: block;

    .list {
      padding: 0 !important;
    }
  }
  .modal {
    h1 {
      font-size: 30px;
    }

    img {
      width: 80%;
    }
    .modal-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
    }
  }
}
@media (max-width: 768px) {

  .bio {
    display: block !important;

    .list {
      padding: 0 !important;
    }
  }
  .modal {
    margin-top: 100px;
    height: 100% !important;

    .close {
      top: 12%;
      right: 15%;
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
}
@media (max-width: 425px) {
  button {
    display: none;
  }
}
</style>