<template>
  <div class="flex shadow-2xl align-center card">
    <img alt="photo" src="https://www.badenova.de/blog/content/images/2021/08/Kreislaufwirtschaft.jpg" style="width: 60%; height: 50vh">
    <div class="px-12">
      <p class="text-4xl text-bold text-my-dark-green">{{$t('recycling-circle.title')}}</p>
      <p class="pt-7 mb-10">{{$t('recycling-circle.text')}}</p>
      <router-link :to="{name: 'RecyclingCycle'}" class="border-my-dark-green border-2 p-2 rounded text-center hover:border-my-green">{{ $t('tips.button') }}</router-link>
    </div>
  </div>
</template>

<style>
  .card {
    .body--dark & {
      box-shadow: -2px 2px 25px -2px rgba(216, 214, 214, 0.42);
    }
  }
</style>