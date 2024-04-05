<template>
  <div class="flex shadow-2xl align-center card">
    <img alt="photo" src="https://www.badenova.de/blog/content/images/2021/08/Kreislaufwirtschaft.jpg" style="width: 60%; height: 50vh">
    <div class="px-12">
      <p class="text-4xl text-bold text-my-dark-green">{{$t('recycling-circle.title')}}</p>
      <p class="pt-7 mb-10">{{$t('recycling-circle.text')}}</p>
      <router-link :to="{name: 'RecyclingCycle'}" class="p-3 px-6 mt-6 rounded border-my-dark-green border-2 text-my-dark-green hover:border-my-green hover:text-my-green">{{ $t('tips.button') }}</router-link>
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