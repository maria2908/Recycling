<script setup>
import SmallerContainer from "@/layout/SmallerContainer.vue";
import {onMounted} from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="plastic">
    <smaller-container class="text-center">
      <div class="py-12">
        <h1 class="text-3xl font-bold">{{ $t('recycling-cycle-plastic.title-1') }}</h1>
        <img class='mx-auto my-12' alt="Kreislauf_Icons" src="https://svgur.com/i/13nU.svg" width="200">
        <p class="text-justify">{{ $t('recycling-cycle-plastic.text-1_1') }}</p>
        <br>
        <p class="text-justify">{{ $t('recycling-cycle-plastic.text-1_2') }}</p>
      </div>
    </smaller-container>
  </div>
  <div class="bg-my-yellow text-black">
    <smaller-container>
      <img alt="frage" width="150" class='mx-auto my-4' src="https://svgur.com/i/13mK.svg">
      <h1 class="text-2xl font-bold my-12 text-center">{{ $t('recycling-cycle-plastic.title-2') }}</h1>
      <p class="text-justify">{{ $t('recycling-cycle-plastic.text-2_1') }}</p>
      <br>
      <p class="text-justify">{{ $t('recycling-cycle-plastic.text-2_2') }}</p>
    </smaller-container>
  </div>
  <div class="plastic">
    <smaller-container  class="text-center">
      <div class="py-12">
        <h1 class="text-3xl font-bold mb-12">{{ $t('recycling-cycle-plastic.title-3') }}</h1>
        <iframe class="mx-auto my-12" width="640" height="360" src="https://www.youtube.com/embed/tBkBF3F0rAs" title="Der Recyclingkreislauf von Kunststoff-Verpackungen - Mülltrennung wirkt (ohne Untertitel)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p class="text-justify">{{ $t('recycling-cycle-plastic.text-3') }}</p>
      </div>
    </smaller-container>
  </div>
</template>

<style scoped>
.plastic {
  .body--dark & {
    background-color: #151515;
    color: white;

    .form input, textarea {
      border-bottom:1px solid white !important;
    }

    .info {
      background: white !important;
      color: black !important;
    }
  }
  .body--light & {
    background-color: white;
    color: black;

  }
}

@media (max-width: 1500px) {
  iframe {
      width: 550px;
    }
}

@media (max-width: 425px) {
  iframe {
    width: 300px;
  }
}
</style>