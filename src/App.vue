<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script setup>
import {onMounted} from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

onMounted(() => {
  document.cookie = 'locale=DE'
})
</script>


<style scoped>
</style>
