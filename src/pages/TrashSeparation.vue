<script setup>
import {ref} from 'vue'
import { Carousel, Navigation, Slide,  } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ResidualWaste from "@/components/TrashSeparation/ResidualWaste.vue";
import SmallerContainer from "@/layout/SmallerContainer.vue";
import ThePaper from "@/components/TrashSeparation/ThePaper.vue";
import BioWaste from "@/components/TrashSeparation/BioWaste.vue";
import ThePacking from "@/components/TrashSeparation/ThePacking.vue";
import OldClothes from "@/components/TrashSeparation/OldClothes.vue";
import RecyclingCenter from "@/components/TrashSeparation/RecyclingCenter.vue";
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
const trash_separations = ref([
  "https://www.awm-muenchen.de/fileadmin/Bilder/AWM-0435_Kampagne_Zero_Waste_2022_FacebookPost_twitter_1200x627_6.jpg",
  "https://www.awm-muenchen.de/fileadmin/Bilder/Trennkampagne_2022_Beilagen.jpg",
  "https://www.awm-muenchen.de/fileadmin/_processed_/0/a/csm_AWM-0430_Kampagne_Mehrweg_2021_FacebookPost_twitter_1200x627_2_989e10cff0.jpg",
  "https://www.awm-muenchen.de/fileadmin/_processed_/c/b/csm_Trennkampagne_2022_Knoblauch_78f88f49f2.jpg",
  "https://www.awm-muenchen.de/fileadmin/Bilder/AWM-0435_Kampagne_Zero_Waste_2022_AWM-webseite_750x398_8.jpg", "https://www.awm-muenchen.de/fileadmin/user_upload/Bio2022_Ei.jpg",
  "https://www.awm-muenchen.de/fileadmin/_processed_/b/d/csm_Trennkampagne_2022_Topfpflanze_86390ea96c.jpg", "https://www.awm-muenchen.de/fileadmin/Bilder/AWM-0435_Kampagne_Zero_Waste_2022_AWM-webseite_750x398_9.jpg", "https://www.awm-muenchen.de/fileadmin/_processed_/e/e/csm_AWM-0430_Kampagne_Mehrweg_2021_FacebookPost_twitter_1200x627_1_64dae474dc.jpg",
  "https://www.nachrichten-muenchen.com/wp-content/uploads/2022/06/AWM_Trennkampagne.jpg", "https://www.awm-muenchen.de/fileadmin/Bilder/Trennkampagne_2022_Zeitungen.jpg", "https://www.awm-muenchen.de/fileadmin/_processed_/6/3/csm_AWM-0430_Kampagne_Mehrweg_2021_FacebookPost_twitter_1200x627_3_08d79c2df2.jpg"
]);
</script>
<template>
     <div class="block text-white" style="background-color: #7a8780">
       <smaller-container>
         <h1 class="text-4xl pt-12 font-bold pb-4">{{ $t('trash-separation-page.title')}}</h1>
         <p class="py-6">{{ $t('trash-separation-page.sub-title') }}</p>
         <div class="lists flex justify-between align-end">
           <ul class="leading-loose text-left mb-12">
             <li><span><a href=''>{{ $t('trash-separation-page.menu.residual-waste') }}</a></span></li>
             <li><span><a href=''>{{ $t('trash-separation-page.menu.paper') }}</a></span></li>
             <li><span><a href=''>{{ $t('trash-separation-page.menu.bio-waste') }}</a></span></li>
             <li><span><a href=''>{{ $t('trash-separation-page.menu.packaging') }}</a></span></li>
             <li><span><a href=''>{{ $t('trash-separation-page.menu.old-clothes') }}</a></span></li>
             <li><span><a href=''>{{ $t('trash-separation-page.menu.recycling-center') }}</a></span></li>
           </ul>
           <img width="450" class="img" style="height: 25vh" alt="kein Restmüll" src="https://www.awm-muenchen.de/fileadmin/Bilder/AWM-0435_Kampagne_Zero_Waste_2022_FacebookPost_twitter_1200x627_6.jpg" />
         </div>
       </smaller-container>
     </div>

     <div class="back py-12">
       <residual-waste></residual-waste>
       <the-paper></the-paper>
       <bio-waste></bio-waste>
       <Carousel class="my-8" :items-to-show="2.5" :wrap-around="true">
         <Slide v-for="(trash_separation, index) in trash_separations" :key="index">
           <img class="carousel__item" :src="trash_separation" alt="Abfall Trennung"/>
         </Slide>
       </Carousel>
       <the-packing></the-packing>
       <old-clothes></old-clothes>
       <recycling-center></recycling-center>
     </div>

</template>

<style scoped>
  li {
    list-style: inside;
  }
  .back {
    background: linear-gradient(90deg, #dfac06 2.68%,#fff61a 78.27%);
  }

  @media (max-width: 1500px) {
    .img {
      width: 400px;
    }
  }

  @media (max-width: 768px) {
    .img {
      width: 300px;
    }
  }

@media (max-width: 425px) {
  .img {
      width: 200px;
    }
}

</style>
