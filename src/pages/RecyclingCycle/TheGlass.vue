<template>
  <div class="glass">
    <smaller-container class="text-center">
      <div class="py-12">
        <h1 class="text-3xl font-bold">{{ $t('recycling-cycle-glass.title-1') }}</h1>
        <img class='mx-auto my-12' alt="Kreislauf_Icons" src="https://svgur.com/i/13mx.svg" width="200">
        <p class="text-justify">{{ $t('recycling-cycle-glass.text-1_1') }}</p>
        <br>
        <p class="text-justify">{{ $t('recycling-cycle-glass.text-1_2') }}</p>
      </div>
    </smaller-container>
  </div>
  <div class="bg-my-yellow">
    <smaller-container>
      <img alt="frage" width="150" class='mx-auto my-4' src="https://svgur.com/i/13mK.svg">
      <h1 class="text-2xl font-bold my-12 text-center">{{ $t('recycling-cycle-glass.title-2') }}</h1>
      <p class="text-justify">{{ $t('recycling-cycle-glass.text-2') }}</p>
    </smaller-container>
  </div>
  <div class="plastic">
    <smaller-container  class="text-center">
      <div class="py-12">
        <h1 class="text-3xl font-bold mb-12">{{ $t('recycling-cycle-glass.title-3') }}</h1>
        <iframe class="mx-auto my-12" width="640" height="360" src="https://www.youtube.com/embed/V5opkbF1I3Y" title="Der Recyclingkreislauf von Glas-Verpackungen - Mülltrennung wirkt (ohne Untertitel)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p class="text-justify">{{ $t('recycling-cycle-glass.text-3') }}</p>
      </div>
    </smaller-container>
  </div>
</template>

<script setup>
import SmallerContainer from "@/layout/SmallerContainer.vue";
import {onMounted} from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.glass {
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
  }
}
</style>