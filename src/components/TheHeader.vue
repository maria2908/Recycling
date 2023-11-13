<template>
  <header class="d-flex justify-between align-center top-0 shadow test z-10 fixed w-full">
    <div class="d-flex align-center cursor-pointer pl-2">
      <img alt="Vue logo" class="logo" src="@/assets/img/logo.png" width="45" height="45" />
      <p class="text-lg text-green-600 ml-1 font-semibold">GREEN POINT</p>
    </div>

    <div class="d-flex justify-around ">
      <router-link
          class="font-semibold hover:border-b-4 hover:border-b-pink-400 border-b-4 border-transparent py-5 px-8 hover:text-pink-400"
          :to="{ name: 'TheHome'}"
      >
        {{ $t('home') }}
      </router-link>
      <router-link
          class="font-semibold hover:border-b-4 hover:border-b-green-400 border-b-4 border-transparent py-5 px-8 hover:text-green-400"
          :to="{ name: 'TheEnvironment'}"
      >
        {{ $t('environment') }}
      </router-link>
      <router-link
          class="font-semibold hover:border-b-4 hover:border-b-yellow-400 border-b-4 border-transparent py-5 px-8 hover:text-yellow-400"
          :to="{ name: 'TheHealth'}"
      >
        {{ $t('health') }}
      </router-link>
      <router-link
          class="font-semibold hover:border-b-4 hover:border-b-blue-500 border-b-4 border-transparent py-5 px-8 hover:text-blue-500"
          :to="{ name: 'EnvironmentalProtection'}"
      >
        {{ $t('environmental-protection') }}
      </router-link>
      <router-link
          class="font-semibold hover:border-b-4 hover:border-b-red-500 border-b-4 border-transparent py-5 px-8 hover:text-red-500 "
          :to="{ name: 'TheContact'}"
      >
        {{ $t('contact') }}
      </router-link>
    </div>

    <div class="d-flex align-center mr-2">
      <ToggleMode class="pr-8 pt-2"/>
      <button class="px-3 hover:text-green-500" @click="$i18n.locale = `EN`">EN</button>|
      <button class="px-3 hover:text-green-500" @click="$i18n.locale = `DE`">DE</button>|
      <button class="px-3 hover:text-green-500" @click="$i18n.locale = `UK`">UK</button>
    </div>

  </header>
</template>

<script setup>
import ToggleMode from "@/components/ToggleMode.vue";
</script>

