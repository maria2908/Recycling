<template>
  <div class="flex shadow-2xl align-center card">
    <img alt="photo" src="https://www.badenova.de/blog/content/images/2021/08/Kreislaufwirtschaft.jpg" style="width: 60%; height: 50vh">
    <div class="px-12">
      <h1 class="text-4xl font-bold text-my-dark-green">{{$t('recycling-circle.title')}}</h1>
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

  @media (max-width: 1500px) {
    .card {
      width: 100%;
      height: 45vh;
      img {
        width: 50% !important;
        height: 45vh !important;
      }
      h1 {
        font-size: 25px;
        line-height: 35px;
      }
      p {
        font-size: 13px;
      }
      a {
        padding: 8px;
        font-size: 13px;
      }
    }
  }

  @media (max-width: 768px) {
    .card {
      margin: 15px auto;
      width: 80%;
      height: 35vh;
      img {
        display: none;
      }
    }
  }

  @media (max-width: 425px) {
    .card {
      margin-top: 30px;
      padding: 20px;
      width: 100%;
      height: 50vh;
      img {
        display: none;
      }
    }
  }
</style>