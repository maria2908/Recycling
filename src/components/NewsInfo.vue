<script setup>
import { onMounted, ref } from "vue";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '@/firebase';
import { useRoute } from 'vue-router'
import NotFound from "@/pages/NotFound.vue";
import TheLoading from "@/components/TheLoading.vue";
import ContainerHalf from "@/layout/ContainerHalf.vue";

const post = ref({});
const loaded = ref(false);
const route = useRoute()
const routeId = ref(null);

onMounted(async () => {
  routeId.value = route.params.id;
  setTimeout(async () => {
    if (routeId.value) {
      const q = query(collection(db, "posts"), where("id", "==", routeId.value));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        post.value = {
          id: doc.id,
          img: doc.data().img,
          title_en: doc.data().title_en,
          title_de: doc.data().title_de,
          title_ua: doc.data().title_ua,
          text_en: doc.data().text_en,
          text_de: doc.data().text_de,
          text_ua: doc.data().text_ua,
        };
      });

      loaded.value = true;
    }
  }, 1000);
});
</script>

<template>
  <div class="news-info">
    <container-half>
      <div class="pt-12" v-if="loaded">
        <div v-if="post && post.id">
          <img :src="post.img" />
          <h1 class="font-bold text-4xl my-12" v-html="post['title_' + $i18n.locale]"></h1>
          <p class="text-justify mb-12" v-html="post['text_' + $i18n.locale]"></p>
          <router-link :to="{path: '/the-news'}" class="p-3 px-6 mt-6 rounded border-green-600 border-2 text-green">{{ $t('button-back') }}</router-link>
        </div>
        <div v-else>
          <NotFound />
        </div>
      </div>
      <div v-else class="pt-48">
        <TheLoading />
      </div>
    </container-half>
  </div>
</template>

<style lang="scss">

.news-info {
  .body--dark & {
    background-color: #151515;
    color: white;
  }
  .body--light & {
    background-color: white;
  }
}
</style>

