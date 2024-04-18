<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
</script>

<template>
  <div class="main flex justify-around align-center">
    <div style="width: 750px;">
      <h1 class="text-my-dark-green font-black xl:text-9xl md:text-7xl">{{ $t('main-title')}}</h1>
      <p class="my-12 font-semibold">{{ $t('main-text')}}</p>
      <router-link :to="{}" class="p-4 rounded border-my-dark-green border-2 text-my-dark-green hover:border-my-green hover:text-my-green">{{ $t('read-more')}}</router-link>
      <router-link :to="{}" class="bg-my-dark-green hover:bg-my-green border-my-dark-green hover:border-my-green border-2 text-white ml-4 p-4 rounded px-7 text-center">{{ $t('read-news')}}</router-link>
    </div>
    <div class="flex slider">
      <swiper
          class="mr-12 pt-16"
          style="height: 100vh; width: 250px"
          :loop="true"
          :space-between="0"
          :direction="'vertical'"
          :slidesPerView="2.5"
          :mousewheel="true"
      >
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/1933386/pexels-photo-1933386.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/3737675/pexels-photo-3737675.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/2570304/pexels-photo-2570304.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/9324359/pexels-photo-9324359.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/6990304/pexels-photo-6990304.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
      </swiper>
      <swiper
          class="mr-12"
          style="height: 100vh; width: 250px"
          :loop="true"
          :space-between="0"
          :direction="'vertical'"
          :slidesPerView="2.5"
      >
        <swiper-slide class="my-2"><img src="https://images.pexels.com/photos/3010250/pexels-photo-3010250.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-2"><img src="https://images.pexels.com/photos/4167579/pexels-photo-4167579.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-2"><img src="https://images.pexels.com/photos/2927582/pexels-photo-2927582.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-2"><img src="https://images.pexels.com/photos/2927582/pexels-photo-2927582.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-2"><img src="https://images.pexels.com/photos/7772006/pexels-photo-7772006.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-2"><img src="https://images.pexels.com/photos/12033659/pexels-photo-12033659.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
      </swiper>
      <swiper
          style="height: 100vh; width: 250px"
          class="pt-16"
          :loop="true"
          :space-between="0"
          :direction="'vertical'"
          :slidesPerView="2.5"
      >
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/6591429/pexels-photo-6591429.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/5719894/pexels-photo-5719894.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/8543607/pexels-photo-8543607.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/7262474/pexels-photo-7262474.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/8287265/pexels-photo-8287265.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
        <swiper-slide class="my-6"><img src="https://images.pexels.com/photos/3616656/pexels-photo-3616656.jpeg?auto=compress&cs=tinysrgb&w=600" /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
@media (min-width: 1440px) {
  slider {
    img {
      width: 100px;
    }
  }
}
</style>