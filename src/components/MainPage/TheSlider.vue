<script setup>
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';


const modules = [Autoplay, Scrollbar ];
</script>

<template>
  <swiper
      :loop="true"
      :loopedSlides="3"
      :modules="modules"
      :space-between="0"
      autoplay
  >
    <swiper-slide class="w-full">
      <div class="absolute top-10 h-screen w-33 pr-6 main-slider" >
        <div class="absolute top-1/4 pl-14 ">
          <h1 class=" text-6xl" >{{ $t('main-page-slider1-t1')}}</h1>
          <p class="mt-7 mb-9" style="width: 80%">{{ $t('main-page-slider1-p')}}</p>
          <router-link class=" p-3 px-6 mt-6 rounded border-green-600 border-2 text-green" to="">{{ $t('button-more') }}</router-link>
        </div>
      </div>
      <img alt="slider-image" class="object-cover h-screen w-full z-0" src="../../assets/img/slider_05.jpg">
    </swiper-slide>
    <swiper-slide class="w-full relative">
      <div class="absolute top-10 h-screen w-33 pr-6 main-slider" >
        <div class="absolute top-52 pl-14 ">
          <h1 class=" text-6xl pr-2" >{{ $t('main-page-slider2-t1')}}</h1>
          <p class="mt-7 mb-9" style="width: 80%">{{ $t('main-page-slider2-p')}}</p>
          <router-link class=" p-3 px-6 mt-6 rounded border-green-600 border-2 text-green" to="">{{ $t('button-more') }}</router-link>
        </div>
      </div>
      <img alt="slider-image" class="object-cover h-screen w-full" src="../../assets/img/slider_03.jpg">
    </swiper-slide>
    <swiper-slide class="w-full relative">
      <div class="absolute top-10 h-screen w-33 pr-6 main-slider" >
        <div class="absolute top-1/3 pl-14 ">
          <h1 class=" text-6xl" >{{ $t('main-page-slider3-t1')}}</h1>
          <p class="mt-7 mb-9" style="width: 80%">{{ $t('main-page-slider3-p')}}</p>
          <router-link class=" p-3 px-6 mt-6 rounded border-green-600 border-2 text-green" to="">{{ $t('button-more') }}</router-link>
        </div>
      </div>
      <img alt="slider-image" class="object-cover h-screen w-full" src="../../assets/img/slider_04.jpg">
    </swiper-slide>
  </swiper>
</template>

<style>
.main-slider {
  .body--dark & {
    background-color: #151515;
    color: white;

    h1 {
      color: #87c159;
    }
  }
  .body--light & {
    background-color: #ffffff;

    h1 {
      color: #058240;
    }
  }
}
</style>