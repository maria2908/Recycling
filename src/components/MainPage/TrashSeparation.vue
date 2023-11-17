<template>
  <div class="text-center pt-12 ">

    <div class="bg-my-dark-blue h-0.5 line"></div>
    <div class="d-flex justify-center py-3">
      <div class="w-1/2">
        <t1 class="text-5xl text-uppercase text-my-dark-blue title">{{$t('accordion-trash-separation.titel')}}</t1>
      </div>
    </div>
    <div class="bg-my-dark-blue h-0.5 line"></div>

    <div class="d-flex mt-8 px-20">
      <img class="p-8" style="width: 50%;" src="https://img.welt.de/img/wissenschaft/umwelt/mobile141072255/7311354457-ci16x9-w1200/Muelltrennung.jpg" />
      <v-expansion-panels v-model="panel" class="text-left h-52 mx-24 mt-10">
        <v-expansion-panel v-model="panel" v-for="(item, index) in items" :key="index">
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
const panel = ref([1]);
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

.title {
  .body--dark & {
    color: #edebeb;
  }
}

.line {
  .body--dark & {
    background-color: #edebeb;
  }
}
</style>