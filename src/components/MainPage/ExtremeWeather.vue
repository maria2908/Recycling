<template>
  <div class="flex shadow-2xl align-center justify-center card">
    <img src="https://www.quarks.de/wp-content/uploads/Hitze-1zu1.jpg" style="width: 50%">
    <div class="px-12">
      <p class="pb-5">{{$t('extreme-weather.sub-titel')}}</p>
      <router-link class="text-5xl text-bold text-my-dark-orange hover:text-my-light-orange" to="ExtremeWeather">{{$t('extreme-weather.titel')}}</router-link>
      <p class="pt-7">{{$t('extreme-weather.p')}}</p>
    </div>
  </div>
</template>

<style>
  .card {
    .body--dark & {
      box-shadow: 1px 3px 35px 4px rgba(216, 214, 214, 0.42);
    }
  }
</style>