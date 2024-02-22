<script setup>
import {ref} from 'vue'
import { Carousel, Pagination, Slide,  } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const slides_info = ref([
  {
    img: "https://www.muelltrennung-wirkt.de/fileadmin/user_upload/Muelltrennung/Richtige_Muelltrennung/glascontainer.svg",
    title: "trash-separation-not-home.first.title",
    text: "trash-separation-not-home.first.text",
  },
  {
    img: "https://www.muelltrennung-wirkt.de/fileadmin/user_upload/Muelltrennung/Richtige_Muelltrennung/dS_wertstoffhof.svg",
    title: "trash-separation-not-home.second.title",
    text: "trash-separation-not-home.second.text",
  },
  {
    img: "https://www.muelltrennung-wirkt.de/fileadmin/user_upload/Muelltrennung/Richtige_Muelltrennung/dS_Papiercontainer.svg",
    title: "trash-separation-not-home.third.title",
    text: "trash-separation-not-home.third.text",
  },
  {
    img: "https://www.muelltrennung-wirkt.de/fileadmin/user_upload/Muelltrennung/Richtige_Muelltrennung/dS_Wertstofftonne.svg",
    title: "trash-separation-not-home.fourth.title",
    text: "trash-separation-not-home.fourth.text",
  },
  {
    img: "https://www.muelltrennung-wirkt.de/fileadmin/user_upload/Muelltrennung/Richtige_Muelltrennung/dS_Altkleider.svg",
    title: "trash-separation-not-home.fifth.title",
    text: "trash-separation-not-home.fifth.text",
  },
  {
    img: "https://www.muelltrennung-wirkt.de/fileadmin/user_upload/Muelltrennung/Richtige_Muelltrennung/dS_Sammelbehaelter.svg",
    title: "trash-separation-not-home.sixth.title",
    text: "trash-separation-not-home.sixth.text",
  },
  {
    img: "https://www.muelltrennung-wirkt.de/fileadmin/user_upload/Muelltrennung/Richtige_Muelltrennung/dS_Einzelhaendler.svg",
    title: "trash-separation-not-home.seventh.title",
    text: "trash-separation-not-home.seventh.text",
  }
]);
</script>

<template>
  <p class="mx-auto w-33 text-center text-xl mt-12 mb-8">{{$t('trash-separation-not-home.title')}}</p>
  <Carousel
      :itemsToShow="5"
      :wrapAround="true"
      :transition="500"
      class="mt-12"
  >
    <Slide
        v-for="(slide, index) in slides_info"
        :key="index"
    >
      <div class="block">
        <img class="mx-auto" width="200" style="height: 150px" alt="recycling" :src="slide.img" />
        <div class="text-info ">
          <h2 class="text-xl my-4">{{$t(slide.title)}}</h2>
          <p class="text-xs my-4 text-justify">{{$t(slide.text)}}</p>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination class="pagination" />
    </template>
  </Carousel>
</template>



<style scoped lang="scss">
.carousel__slide {
  height: 40vh;
  padding: 5px;
  .text-info {
    .body--dark & {
      color: white !important;
    }
    .body--light & {
      color: #000000 !important;
    }
  }

}
.pagination {
  width: fit-content;

  margin: 35px auto;
  .body--dark & {
    background: rgba(250, 248, 248, 0.78) !important;
  }
}
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.4;
  transform: rotateY(-20deg) scale(0.7);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.7);
}

.carousel__slide--prev {
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
  transform: rotateY(10deg) scale(0.9);
}
.text-info {
  opacity: 0;
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.3);

  .text-info {
    opacity: 1;
  }
}
</style>