<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup>
import {onMounted} from "vue";
import TheHeader from "@/components/TheHeader.vue";

onMounted(() => {
  document.cookie = 'locale=DE'
})
</script>


<style scoped>
</style>
