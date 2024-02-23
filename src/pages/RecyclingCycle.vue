<script setup>
import ContainerHalf from "@/layout/ContainerHalf.vue";
import {ref} from 'vue';

const buttons_info = ref([
  {
    text: "plastic",
    img: "../././assets/img/plastic.svg"
  },
  {
    text: "metal",
    img: ""
  },
  {
    text: "glass",
    img: ""
  },
  {
    text: "paper",
    img: ""
  },
  {
    text: "beverage-cartons",
    img: ""
  },
])
</script>

<template>
  <container-half class="text-center">
    <div class="py-12">
      <h1 class="text-5xl font-bold">{{ $t('recycling-cycle-page.title-1') }}</h1>
      <iframe class="my-12 mx-auto" width="640" height="360" src="https://www.youtube.com/embed/VAHs95b7Rmw" title="Der Recyclingkreislauf von Verpackungen - Mülltrennung wirkt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p class="text-justify">{{ $t('recycling-cycle-page.text-1') }}</p>
    </div>
  </container-half>
  <div class="bg-my-yellow text-center" >
    <container-half>
      <h1 class="text-4xl font-bold">{{ $t('recycling-cycle-page.title-2') }}</h1>
      <p class="text-xl my-8">{{ $t('recycling-cycle-page.sub-title') }}</p>
      <div class="bg-my-green my-2" v-for="(button_info, index) in buttons_info" :key="index">
        <div>
          <h1>{{ $t(button_info.text)}}</h1>
        </div>
      </div>
    </container-half>
  </div>
</template>
