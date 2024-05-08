<template>
  <div class="beverage-cartons">
    <smaller-container class="text-center">
      <div class="py-12">
        <h1 class="text-4xl font-bold">{{ $t('recycling-cycle-beverage-cartons.title-1') }}</h1>
        <img class='mx-auto my-12' alt="Kreislauf_Icons" src="https://svgur.com/i/13nV.svg" width="200">
        <p class="text-justify">{{ $t('recycling-cycle-beverage-cartons.text-1') }}</p>
      </div>
    </smaller-container>
  </div>
  <div class="bg-my-yellow text-black">
    <smaller-container>
      <h1 class="text-4xl font-bold my-12 text-center">{{ $t('recycling-cycle-beverage-cartons.title-2') }}</h1>
      <iframe class="mx-auto my-12" width="640" height="360" src="https://www.youtube.com/embed/jHzrJft7xxc" title="Der Recyclingkreislauf von Getränkekartons - Mülltrennung wirkt (ohne Untertitel)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
.beverage-cartons {
  .body--dark & {
    background-color: #151515;
    color: white;

    .form input, textarea {
      border-bottom:1px solid white !important;
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