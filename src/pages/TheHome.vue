<template>
<div class="body">
  <the-slider></the-slider>
  <the-container>
    <recycling-cycle-info></recycling-cycle-info>
  </the-container>
  <trash-separation-not-home></trash-separation-not-home>
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
import TheContainer from "@/layout/TheContainer.vue";
import TheQuiz from "@/components/MainPage/Quiz/TheQuiz.vue";
import TheTips from "@/components/MainPage/TheTips.vue";
import TrashSeparationNotHome from "@/components/MainPage/TrashSeparationNotHome.vue";
import RecyclingCycleInfo from "@/components/MainPage/RecyclingCycleInfo.vue";
import {onMounted} from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style>
.body {
  .body--dark & {
    background-color: #151515;
    color: white;
  }
  .body--light & {
    background-color: white;
  }
}
</style>