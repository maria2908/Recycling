<script setup>
import { onMounted, ref, computed } from "vue";
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
const currentPage = ref(1);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  let fbPosts = [];
  setTimeout(async () => {
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
    loaded.value = true;
  }, 1000);
});

const displayedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * 6;
  const endIndex = startIndex + 6;
  return posts.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
  return Math.ceil(posts.value.length / 6);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const gotoPage = (pageNumber) => {
  currentPage.value = pageNumber;
};
</script>

<template>
  <div class="the-news">
    <div v-if="loaded" >
      <the-container>
        <div class="all-news pt-12">
          <TheNew class="mx-4 text-center" :post="post" v-for="(post,index) in displayedPosts" :key="index"  />
        </div>
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1"><svg style="rotate: 180deg" fill="#ffffff" width="15px" height="15px" viewBox="0 0 42 42"><polygon fill-rule="evenodd" points="13.933,1 34,21.068 14.431,40.637 9.498,35.704 24.136,21.068 9,5.933 "/>
            </svg>
          </button>

          <span v-for="pageNumber in totalPages" :key="pageNumber">
            <button @click="gotoPage(pageNumber)" class="pag-num" :class="{ active: currentPage === pageNumber }">{{ pageNumber }}</button>
          </span>

          <button @click="nextPage" :disabled="currentPage * 6 >= posts.length">
            <svg fill="#ffffff" width="15px" height="15px" viewBox="0 0 42 42"><polygon fill-rule="evenodd" points="13.933,1 34,21.068 14.431,40.637 9.498,35.704 24.136,21.068 9,5.933 "/>
            </svg>
          </button>
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
    color: white !important;
    .pagination .pag-num {
      color: white !important;
    }
    .pagination .pag-num:hover {
      background-color: rgba(243, 243, 243, 0.15);
    }
  }
  .body--light & {
    background-color: white;
    .pagination .active:hover {
      color: #000000;
    }
  }
}
.pagination {
  margin-top: 3rem;
  display: flex;
  justify-content: end;
}
.pagination button {
  height: 30px;
  width: 30px;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(5, 130, 64);
  color: #000000;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.pagination .pag-num {
  background-color: rgba(5, 130, 64, 0.0);;
  padding: 0.2rem;
}
.pagination .pag-num:hover {
  background-color: rgba(0, 0, 0, 0.15);;
}
.pagination button:disabled {
  opacity: 0.25;
  cursor: not-allowed;
}
.pagination .active {
  box-shadow: none;
  background-color: rgba(5, 130, 64);;
  color: white;
  width: 30px !important;
  height: 30px;
}

@media (max-width: 1500px) {
  .all-news {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
