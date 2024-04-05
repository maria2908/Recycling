<template>
  <div class="block text-center pb-12">

      <div class="bg-my-dark-green  h-0.5 line"></div>
      <div class="d-flex justify-center py-3">
        <div >
          <h1 class="text-4xl text-uppercase text-my-dark-green">{{$t('tips.title')}}</h1>
        </div>
      </div>
      <div class="bg-my-dark-green  h-0.5 line"></div>


    <p class="py-6 text-lg">{{ $t('tips.subtitle') }}</p>
    <ul class="text-lg leading-loose text-left mb-12">
      <li class="item">{{ $t('tips.first-tip') }}</li>
      <li class="item">{{ $t('tips.second-tip') }}</li>
      <li class="item">{{ $t('tips.third-tip') }}</li>
      <li class="item">{{ $t('tips.fourth-tip') }}</li>
      <li class="item">{{ $t('tips.fifth-tip') }}</li>
      <li class="item">{{ $t('tips.sixth-tip') }}</li>
      <li class="item">{{ $t('tips.seventh-tip') }}</li>
      <li class="item">{{ $t('tips.eighth-tip') }}</li>
    </ul>
    <router-link to="/environmental-protection" class="bg-my-dark-green hover:bg-my-green text-white ml-4 p-4 rounded px-7 text-center">{{ $t('tips.button') }}</router-link>
  </div>
</template>
<script setup>
</script>

<style scoped>
ul {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.item {
  display: block;
  clear: both;
  counter-increment: list;
  padding-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.375;
  position: relative;
}
.item:before {
  font: bold 2.25rem/1 Montserrat, Roboto, Helvetica, Arial, sans-serif;
  content: counter(list);
  font-size: 20px;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 1.5rem 0.75rem 0;
  color: #fdfdfd;
  background: linear-gradient(to bottom right, #058240 25%, #FFEDBC);
  text-shadow: 0 0 2px #058240;
  border-radius: 0 50% 50% 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  shape-outside: ellipse();
  z-index: 1;
}
</style>


