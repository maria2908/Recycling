<template>
  <the-container class="bg-white rounded-2xl p-12 mt-12">

    <div class="flex">
      <div>
        <h1 class="text-4xl font-bold py-4" style="color: #dfac06">{{ $t("old-clothes-block.h1") }}</h1>
        <p>{{ $t("old-clothes-block.p") }}</p>
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">{{ $t("old-clothes-block.h2") }}</h2>
        <ul>
          <li>{{ $t("old-clothes-block.old-clothes-li.1") }}</li>
          <li>{{ $t("old-clothes-block.old-clothes-li.2") }}</li>
          <li>{{ $t("old-clothes-block.old-clothes-li.3") }}</li>
          <li>{{ $t("old-clothes-block.old-clothes-li.4") }}</li>
          <li>{{ $t("old-clothes-block.old-clothes-li.5") }}</li>
          <li>{{ $t("old-clothes-block.old-clothes-li.6") }}</li>
        </ul>
        <br>
        <p><b>{{ $t("old-clothes-block.p2") }}</b></p>
      </div>
      <img alt="Residual Waste" src="../../assets/img/trash-separation/3.png" />
    </div>
  </the-container>
</template>
<script setup>
import TheContainer from "@/layout/TheContainer.vue";
</script>

<style scoped>
li {
  line-height: 35px;
}
li:before {
  content: "•  ";
  color: #dfac06;
}
@media (max-width: 768px) {
  img {
    display: none;
  }
}
</style>