<template>
<div class="body">
  <the-slider></the-slider>
  <the-container>
    <extreme-weather></extreme-weather>
  </the-container>
  <trash-separation></trash-separation>
  <the-container>
    <the-quiz></the-quiz>
  </the-container>
  <the-container>
    <the-tips />
  </the-container>
</div>
</template>
<script setup>
import TheSlider from "@/components/MainPage/TheSlider.vue";
import TrashSeparation from "@/components/MainPage/TrashSeparation.vue";
import TheContainer from "@/layout/TheContainer.vue";
import ExtremeWeather from "@/components/MainPage/ExtremeWeather.vue";
import TheQuiz from "@/components/MainPage/Quiz/TheQuiz.vue";
import TheTips from "@/components/MainPage/TheTips.vue";
</script>

<style>
.body {
  .body--dark & {
    background-color: #2c2929;
    color: white;
  }
  .body--light & {
    background-color: white;
  }
}
</style>