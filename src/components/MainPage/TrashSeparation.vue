<template>
  <div class="text-center pt-12">
    <t1 class="text-5xl text-uppercase ">{{$t('accordion-trash-separation.titel')}}</t1>
    <div class="d-flex mt-8">
      <img class="p-8" style="width: 50%;" src="https://mags.de/Medien/_processed_/e/1/csm_Abfall-trennen-Titelbild-Webseite_01_d0a16769b3.jpg" />
      <v-expansion-panels class="text-left h-52 m-24">
        <v-expansion-panel v-for="item in items" :key="item">
          <v-expansion-panel-title :style="item.color">{{$t(item.title)}}</v-expansion-panel-title>
          <v-expansion-panel-text>{{$t(item.text)}}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script setup>
import TheContainer from "@/layout/TheContainer.vue";
import { ref } from 'vue';

const items = ref([
  {
    title: 'accordion-trash-separation.second.titel',
    text: 'accordion-trash-separation.second.p',
    color: 'background-color:#acacac'
  },  {
    title: 'accordion-trash-separation.third.titel',
    text: 'accordion-trash-separation.third.p',
    color: 'background-color:#00a3ff'
  },  {
    title: 'accordion-trash-separation.fourth.titel',
    text: 'accordion-trash-separation.fourth.p',
    color: 'background-color:#a4785f'
  },  {
    title: 'accordion-trash-separation.first.titel',
    text: 'accordion-trash-separation.first.p',
    color: 'background-color:#fbd700'
  },  {
    title: 'accordion-trash-separation.fifth.titel',
    text: 'accordion-trash-separation.fifth.p',
    color: 'background-color:#fff'
  },
])
</script>

<style>


</style>