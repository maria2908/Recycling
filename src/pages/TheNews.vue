<script setup>
import { onMounted, ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase'
import TheNew from "@/components/TheNew.vue";
import TheContainer from "@/layout/TheContainer.vue";
import TheLoading from "@/components/TheLoading.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
const loaded = ref(false);
const posts = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  let fbPosts = [];
  setTimeout(async () => {
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      const post = {
        id: doc.id,
        img: doc.data().img,
        title_en: doc.data().title_en,
        title_de: doc.data().title_de,
        title_ua: doc.data().title_ua,
        text_en: doc.data().text_en,
        text_de: doc.data().text_de,
        text_ua: doc.data().text_ua,
      }
      fbPosts.push(post);
    });
    loaded.value = true;
  }, 1000);
  posts.value = fbPosts;
  // console.log(posts.value);
});
</script>

<template>
  <div class="the-news">
    <div v-if="loaded" >
      <the-container>
        <div class="all-news pt-12">
          <TheNew class="mx-4 text-center" :post="post" v-for="(post,index) in posts" :key="index"  />
        </div>
      </the-container>
    </div>
    <div v-else class="pt-48 mx-auto">
      <TheLoading />
    </div>
  </div>
</template>

<style scoped>
.all-news {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 5rem;
}
.the-news {
  .body--dark & {
    background-color: #151515;
    color: white;
  }
  .body--light & {
    background-color: white;
  }
}
</style>
