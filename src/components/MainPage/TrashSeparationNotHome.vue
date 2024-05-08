<script setup>
import {onUnmounted, ref} from 'vue'
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
  <p class="mx-auto w-50 text-center text-xl mt-12 mb-8">{{$t('trash-separation-not-home.title')}}</p>
  <div v-if="innerWidth > 1400">
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
          <img class="mx-auto" width="100" style="height: 100px" alt="recycling" :src="slide.img" />
          <div class="text-info">
            <h2 class="text-md my-4">{{$t(slide.title)}}</h2>
            <p class="text-xs my-4 text-justify">{{$t(slide.text)}}</p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination class="pagination" />
      </template>
    </Carousel>
  </div>
  <div v-else>
    <Carousel
        :itemsToShow="3"
        :wrapAround="true"
        :transition="500"
        class="mt-12"
    >
      <Slide
          v-for="(slide, index) in slides_info"
          :key="index"
      >
        <div class="carusel block">
          <img class="mx-auto" width="100" style="height: 100px" alt="recycling" :src="slide.img" />
          <div class="text-info ">
            <h2 class="font-bold my-4">{{$t(slide.title)}}</h2>
            <p class="my-4 text-justify" style="font-size: 10px">{{$t(slide.text)}}</p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination class="pagination" />
      </template>
    </Carousel>
  </div>
</template>



<style scoped lang="scss">
.carousel__slide {
  height: 45vh;
  padding: 5px;
  .text-info {
    h2 {
      font-size: 15px;
      font-weight: 600;
    }
    p {
      font-size: 10px;
    }
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


@media (max-width: 425px) {
  p {
    font-size: 17px;
    font-weight: 600;
  }

  .carusel {
    img {
      width: 100px;
    }
    h2 {
      font-weight: 500;
      font-size: 15px;
    }
    p {
      display: none !important;
    }
  }
}

</style>