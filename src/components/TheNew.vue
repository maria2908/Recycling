<script setup>
import { defineProps } from "vue";
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
defineProps({
  post: Object,
});

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
</script>

<template>
  <div class=" the-new" >
    <div class="news w-96 pt-4 rounded-xl bg-white text-gray-700 shadow-md" style="min-height: 450px; max-height: 430px ">
      <div class="mx-4 h-40 overflow-hidden rounded-xl bg-blue-gray-500 text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
        <img width="400" :src="post.img" />
      </div>
      <div class="p-6">
        <h5 class="mb-2 font-sans text-l font-bold text-blue-gray-900">
          {{ post['title_' + $i18n.locale] }}
        </h5>
        <p class="text-justify mt-4 font-light" v-html="truncateText(post['text_' + $i18n.locale], 150)">
        </p>
      </div>
      <div class="btn p-6" style="margin-top: -15px">
        <router-link :to="{path: `/news-info/${post.id}`}" data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          {{ $t('button-more') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.the-new {
  .body--dark & {
    background-color: #151515;
    color: white;

    .news {
      background: rgba(84, 84, 84, 0.65) !important;
      color: white !important;
      a {
        background: rgba(51, 50, 50, 0.76) !important;
        color: white !important;
      }
    }
  }
  .body--light & {
    background-color: white;
    color: black;
  }
}

@media (max-width: 1500px) {
  .news {
    width: 340px;
    margin: 0 auto;
    padding-bottom: 30px;

    h5 {
      font-size: 15px;
    }

    p {
      font-size: 14px;
    }

    .btn {
      margin-top: -30px !important;
    }
  }
}

@media (max-width: 768px) {
  .news {
    width: 340px;
    padding-bottom: 30px;

    .btn {
      margin-top: -30px !important;
    }
  }
}
</style>