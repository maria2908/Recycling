<script setup>
import ToggleMode from "@/components/ToggleMode.vue";
import ThePaper from "@/pages/RecyclingCycle/ThePaper.vue";

import { ref } from 'vue';

const dropdownActive = ref(false);


</script>
<template>
  <header class="d-flex justify-between align-center shadow z-10 fixed w-full">
    <router-link :to="{ name: 'TheHome'}" class="d-flex align-center cursor-pointer pl-2">
      <img alt="Vue logo" class="logo" src="@/assets/img/logo.png" width="45" height="45" />
      <p class="text-lg text-my-green ml-1 font-semibold">GREEN POINT</p>
    </router-link>
    <div id="nav" class="d-flex align-center justify-around">
      <router-link
          @click="dropdownActive = false"
          class="font-semibold hover:border-b-4 hover:border-b-my-dark-green border-b-4 border-transparent py-5 px-8 hover:text-pink-400"
          :to="{ name: 'TheHome'}"
      >
        {{ $t('home') }}
      </router-link>
      <router-link
          @click="dropdownActive = false"
          class="fast-link font-semibold hover:border-b-4 hover:border-b-my-yellow border-b-4 border-transparent py-5 px-8 hover:text-green-400"
          :to="{ name: 'TrashSeparation'}"
      >
        {{ $t('trash-separation') }}
      </router-link>
        <router-link
            :class="dropdownActive ? 'border-b-my-dark-green text-my-dark-green' : '' "
            class="dropdown-main font-semibold hover:border-b-4 hover:border-b-my-dark-green border-b-4 border-transparent py-5 px-8 hover:text-green-400"
            :to="{ name: 'RecyclingCycle'}"
        >
          {{ $t('recycling-cycle') }}

        </router-link>

      <router-link
          @click="dropdownActive = false"
          class="font-semibold hover:border-b-4 hover:border-b-my-yellow border-b-4 border-transparent py-5 px-8 hover:text-yellow-400"
          :to="{ name: 'TheNews'}"
      >
        {{ $t('health') }}
      </router-link>
      <router-link
          @click="dropdownActive = false"
          class="font-semibold hover:border-b-4 hover:border-b-my-dark-green border-b-4 border-transparent py-5 px-8 hover:text-blue-500"
          :to="{ name: 'EnvironmentalProtection'}"
      >
        {{ $t('environmental-protection') }}
      </router-link>
      <router-link
          @click="dropdownActive = false"
          class="font-semibold hover:border-b-4 hover:border-b-my-yellow border-b-4 border-transparent py-5 px-8 hover:text-red-500 "
          :to="{ name: 'TheContact'}"
      >
        {{ $t('contact') }}
      </router-link>
    </div>

    <div class="d-flex align-center mr-2">
      <ToggleMode class="pr-8 pt-2"/>
      <button class="px-3 hover:text-my-dark-green" @click="$i18n.locale = `EN`">EN</button>|
      <button class="px-3 hover:text-my-dark-green" @click="$i18n.locale = `DE`">DE</button>|
      <button class="px-3 hover:text-my-dark-green" @click="$i18n.locale = `UK`">UK</button>
    </div>

  </header>
</template>

<style scoped lang="scss">
.active {
  background-color: black;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  margin-top: 22px;
  min-width: 185px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a.router-link-exact-active {
  background-color: #f1f1f1;
  font-weight: 600;
}

.dropdown-content a:hover {
  background-color: #f1f1f1
}

.dropdown:hover .dropdown-content {
  display: block;
}

header {
  .body--dark & {
    background-color: #151515;
    color: white;
    border-bottom: 1px white solid;
  }
  .body--light & {
    background-color: white;
  }
}

#nav a.router-link-exact-active:nth-child(2n) {
  color: #d1cc21;
  border-bottom: #fff61a 4px solid;
}

#nav a.router-link-exact-active:nth-child(2n + 1) {
  color: #058240;
  border-bottom: #058240 4px solid;
}
</style>

