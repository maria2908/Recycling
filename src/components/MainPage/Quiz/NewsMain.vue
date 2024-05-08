<script setup>
import { onUnmounted, onMounted, ref, computed } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase'
import TheNew from "@/components/TheNew.vue";

const posts = ref([]);
const currentPage = ref(1);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  let fbPosts = [];

    querySnapshot.forEach((doc) => {
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
    posts.value = fbPosts;

});

const displayedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * 3;
  const endIndex = startIndex + 3;
  return posts.value.slice(startIndex, endIndex);
});

const displayedPosts2 = computed(() => {
  const startIndex = (currentPage.value - 1) * 2;
  const endIndex = startIndex + 2;
  return posts.value.slice(startIndex, endIndex);
});

function useInnerWidth(query){
  const width = ref(window.innerWidth);
  const syncWidth = () => width.value = window.innerWidth;
  window.addEventListener('resize', syncWidth);
  onUnmounted(() => window.removeEventListener('resize', syncWidth));
  return width;
}

const innerWidth = useInnerWidth();
</script>

<template>
    <div class="text-center mb-16">
      <div class="mb-12">
        <div class="bg-my-dark-green  h-0.5 line"></div>
        <div class="d-flex justify-center py-3">
          <div >
            <h1 class="text-4xl text-uppercase text-my-dark-green">{{$t('news')}}</h1>
          </div>
        </div>
        <div class="bg-my-dark-green  h-0.5 line"></div>
      </div>
      <div v-if="innerWidth > 1500" class="all-news mb-16" style="margin-left: -20px">
        <TheNew class="mr-6 text-center" :post="post" v-for="(post,index) in displayedPosts" :key="index"  />
      </div>
      <div v-else class="all-news mb-16" >
        <TheNew class="new text-center" :post="post" v-for="(post,index) in displayedPosts2" :key="index"  />
      </div>
      <router-link to="/environmental-protection" class="bg-my-dark-green hover:bg-my-green text-white ml-4 p-4 rounded px-7 text-center">{{ $t('tips.button') }}</router-link>
    </div>
</template>

<style scoped>
.all-news {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 1500px) {
  .all-news {
    display: flex;
    justify-content: space-around;
  }
}

@media (max-width: 768px) {
  .all-news {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 20px;
  }
}

@media (max-width: 425px) {
  .all-news {
    display: block !important;

    .new {
      margin-top: 30px;
    }
  }
}
</style>
