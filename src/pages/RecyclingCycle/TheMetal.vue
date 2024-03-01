<script setup>
import SmallerContainer from "@/layout/SmallerContainer.vue";
import {onMounted, ref} from "vue";
onMounted(() => {
  window.scrollTo(0, 0);
});

const show_text = ref('aluminiumverpackungen');

const changeCategories = (value) => {
  show_text.value = value;
}

</script>

<template>
  <div class="metal">
    <smaller-container class="text-center">
      <div class="py-12">
        <h1 class="text-3xl font-bold">{{ $t('recycling-cycle-metal.title-1') }}</h1>
        <img class='mx-auto my-12' alt="Kreislauf_Icons" src="https://svgur.com/i/13kc.svg" width="200">
        <p class="text-justify">{{ $t('recycling-cycle-metal.text-1_1') }}</p>
        <br>
        <p class="text-justify">{{ $t('recycling-cycle-metal.text-1_2') }}</p>
      </div>
    </smaller-container>
  </div>
  <div class="bg-my-yellow">
    <smaller-container>
      <img alt="frage" width="150" class='mx-auto my-4' src="https://svgur.com/i/13mK.svg">
      <h1 class="text-2xl font-bold my-12 text-center">{{ $t('recycling-cycle-metal.title-2') }}</h1>
      <p class="text-justify">{{ $t('recycling-cycle-metal.text-2') }}</p>
    </smaller-container>
  </div>
  <div class="metal">
    <smaller-container  class="text-center">
      <div class="py-12">
        <h3 class="text-xl font-bold mb-12">{{ $t('recycling-cycle-metal.title-3') }}</h3>

        <div class="radio-inputs mx-auto">
          <label class="radio" id="aluminiumverpackungen" @click="changeCategories('aluminiumverpackungen')">
            <input type="radio" name="radio" checked="">
            <span class="name">{{ $t('recycling-cycle-metal.aluminiumverpackungen.title') }}</span>
          </label>
          <label class="radio" id="weißblechverpackungen" @click="changeCategories('weißblechverpackungen')">
            <input type="radio" name="radio">
            <span class="name">{{ $t('recycling-cycle-metal.weißblechverpackungen.title') }}</span>
          </label>
        </div>

        <div v-if="show_text === 'aluminiumverpackungen'">
          <h1 class="mt-16 text-3xl font-bold">{{ $t('recycling-cycle-metal.aluminiumverpackungen.title-1') }}</h1>
          <iframe class="my-12 mx-auto" width="640" height="360" src="https://www.youtube.com/embed/bLT4fF7E3M0" title="Der Recyclingkreislauf von Aluminium-Verpackungen - Mülltrennung wirkt (ohne Untertitel)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p class="pt-12 text-justify">{{ $t('recycling-cycle-metal.aluminiumverpackungen.text-1') }}</p>
        </div>
        <div v-else >
          <h1 class="mt-16 text-3xl font-bold">{{ $t('recycling-cycle-metal.weißblechverpackungen.title-2') }}</h1>
          <iframe class="my-12 mx-auto" width="640" height="360" src="https://www.youtube.com/embed/-w7-A2yVlIg" title="Der Recyclingkreislauf von Weißblech-Verpackungen - Mülltrennung wirkt (ohne Untertitel)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p class="pt-12 text-justify">{{ $t('recycling-cycle-metal.weißblechverpackungen.text-2') }}</p>
        </div>
      </div>
    </smaller-container>
  </div>
</template>

<style scoped lang="scss">
.metal {
  .body--dark & {
    background-color: #151515;
    color: white;

    .form input, textarea {
      border-bottom:1px solid white !important;
    }

    .radio-inputs .radio .name {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      padding: .7rem 0;
      color: rgba(51, 65, 85, 1);
      transition: all .15s ease-in-out;
    }

    .radio-inputs .radio input:checked + .name {
      background-color: #000000;
      color: rgb(245, 245, 245);
      font-weight: 600;
    }
  }
  .body--light & {
    background-color: white;
  }
}

.radio-inputs {
  position: relative;
  display: flex;
  border-radius: 0.5rem;
  background-color: #EEE;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.4rem;
  width: 450px;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: .7rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #fff;
  font-weight: 600;
}
</style>