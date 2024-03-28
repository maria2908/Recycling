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
           <img width="450" style="height: 25vh" alt="kein Restmüll" src="https://www.awm-muenchen.de/fileadmin/Bilder/AWM-0435_Kampagne_Zero_Waste_2022_FacebookPost_twitter_1200x627_6.jpg" />
         </div>
       </smaller-container>
     </div>
     <div class="back py-12">
       <residual-waste></residual-waste>
       <the-paper></the-paper>
       <bio-waste></bio-waste>
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
</style>
<script setup>
import ContainerHalf from "@/layout/ContainerHalf.vue";
import ResidualWaste from "@/components/TrashSeparation/ResidualWaste.vue";
import SmallerContainer from "@/layout/SmallerContainer.vue";
import ThePaper from "@/components/TrashSeparation/ThePaper.vue";
import BioWaste from "@/components/TrashSeparation/BioWaste.vue";
import ThePacking from "@/components/TrashSeparation/ThePacking.vue";
import OldClothes from "@/components/TrashSeparation/OldClothes.vue";
import RecyclingCenter from "@/components/TrashSeparation/RecyclingCenter.vue";
</script>