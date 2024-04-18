<template>
<div class="body">
  <div v-if="innerWidth > 780">
    <the-slider></the-slider>
    <the-container>
      <recycling-cycle-info></recycling-cycle-info>
    </the-container>
    <trash-separation-not-home></trash-separation-not-home>
    <the-container>
      <news-main></news-main>
      <the-quiz></the-quiz>
      <the-tips class="mt-12" />
    </the-container>
  </div>
  <div v-else>
    <the-slider></the-slider>
    <recycling-cycle-info></recycling-cycle-info>
    <trash-separation-not-home></trash-separation-not-home>
    <news-main></news-main>
    <the-quiz></the-quiz>
    <the-tips class="mt-12" />
  </div>
</div>
</template>
<script setup>
import TheSlider from "@/components/MainPage/TheSlider.vue";
import TheContainer from "@/layout/TheContainer.vue";
import TheQuiz from "@/components/MainPage/Quiz/TheQuiz.vue";
import TheTips from "@/components/MainPage/TheTips.vue";
import TrashSeparationNotHome from "@/components/MainPage/TrashSeparationNotHome.vue";
import RecyclingCycleInfo from "@/components/MainPage/RecyclingCycleInfo.vue";
import {onMounted, onUnmounted, ref} from "vue";
import TheNews from "@/pages/TheNews.vue";
import NewsMain from "@/components/MainPage/Quiz/NewsMain.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

function useInnerWidth(query){
  const width = ref(window.innerWidth);
  const syncWidth = () => width.value = window.innerWidth;
  window.addEventListener('resize', syncWidth);
  onUnmounted(() => window.removeEventListener('resize', syncWidth));
  return width;
}

const innerWidth = useInnerWidth();
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