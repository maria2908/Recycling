<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
localStorage.setItem('locale','ua');

</script>


<style scoped>
</style>
