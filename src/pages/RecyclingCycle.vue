<script setup>
import SmallerContainer from "@/layout/SmallerContainer.vue";
import {ref} from 'vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
const buttons_info = ref([
  {
    text: "plastic",
    img: "https://svgur.com/i/13gX.svg.",
    router: '/recycling-cycle/the-plastic'
  },
  {
    text: "metal",
    img: "https://svgur.com/i/13i1.svg",
    router: '/recycling-cycle/the-metal'
  },
  {
    text: "glass",
    img: "https://svgur.com/i/13i2.svg",
    router: '/recycling-cycle/the-glass'
  },
  {
    text: "paper",
    img: "https://svgur.com/i/13h6.svg",
    router: '/recycling-cycle/the-paper'
  },
  {
    text: "beverage-cartons",
    img: "https://svgur.com/i/13hb.svg",
    router: '/recycling-cycle/beverage-cartons'
  },
])
</script>

<template>
  <div class="recycling-cycle">
    <smaller-container class="text-center">
      <div class="py-12">
        <h1 class="title text-5xl font-bold">{{ $t('recycling-cycle-page.title-1') }}</h1>
        <iframe class="video my-12 mx-auto" width="640" height="360" src="https://www.youtube.com/embed/VAHs95b7Rmw" title="Der Recyclingkreislauf von Verpackungen - Mülltrennung wirkt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p class="text-justify">{{ $t('recycling-cycle-page.text-1') }}</p>
      </div>
    </smaller-container>
  </div>
  <div class="bg-my-yellow text-center text-black" >
    <smaller-container>
      <h1 class="text-4xl font-bold">{{ $t('recycling-cycle-page.title-2') }}</h1>
      <p class="text-xl my-8">{{ $t('recycling-cycle-page.sub-title') }}</p>
      <div
          class="button bg-my-green cursor-pointer my-2 p-4 px-8 w-50 mx-auto rounded align-center hover:text-my-yellow"
          v-for="(button_info, index) in buttons_info"
          :key="index"
      >
        <router-link :to=button_info.router class="flex justify-space-between">
          <div class="flex align-center ">
            <div class="border-2 rounded p-1">
              <svg width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
            <h1 class=" ml-4 font-bold">{{ $t(button_info.text)}}</h1>
          </div>
          <img width="70" alt="recycling-types" :src=button_info.img />
        </router-link>
      </div>
    </smaller-container>
  </div>
  <div class="recycling-cycle">
    <smaller-container  class="text-center">
      <div class="py-12">
        <h1 class="title text-5xl font-bold mb-12">{{ $t('recycling-cycle-page.title-3') }}</h1>
        <img class="mx-auto" src="https://ouch-cdn2.icons8.com/obhIcDgla9LKuStKf3ZZK0zfC3QJ--grkxRu_8Y5b9U/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzIw/LzUxNWFlNzUyLTZi/MTQtNDY0MS1hNjQz/LTgwZjc4YjM1YTc2/My5wbmc.png">
        <p class="text-justify">{{ $t('recycling-cycle-page.text-3') }}</p>
      </div>
    </smaller-container>
  </div>
</template>

<style lang="scss" scoped>
.recycling-cycle {
  .body--dark & {
    background-color: #151515;
    color: white;

    .form input, textarea {
      border-bottom:1px solid white !important;
    }

    .info {
      background: white !important;
      color: black !important;
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
  .title {
    font-size: 35px;
  }
  iframe {
    width: 300px;
  }

  .button {
    width: 90% !important;
  }
}
</style>