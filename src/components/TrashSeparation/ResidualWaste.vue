<template>
  <the-container class="bg-white rounded-2xl p-12">

    <div class="residual-waste flex align-center">
      <div>
        <h1 class="text-5xl font-bold py-4" style="color: #dfac06">{{ $t("residual-waste-block.residual-waste") }}</h1>
        <p>{{ $t("residual-waste-block.residual-waste-text") }}</p>
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">{{ $t("residual-waste-block.residual-waste-h2") }}</h2>
        <ul>
          <li>{{ $t("residual-waste-block.residual-waste-li.1") }}</li>
          <li>{{ $t("residual-waste-block.residual-waste-li.2") }}</li>
          <li>{{ $t("residual-waste-block.residual-waste-li.3") }}</li>
          <li>{{ $t("residual-waste-block.residual-waste-li.4") }}</li>
          <li>{{ $t("residual-waste-block.residual-waste-li.5") }}</li>
          <li>{{ $t("residual-waste-block.residual-waste-li.6") }}</li>
          <li>{{ $t("residual-waste-block.residual-waste-li.7") }}</li>
          <li>{{ $t("residual-waste-block.residual-waste-li.8") }}</li>
        </ul>
      </div>
      <img alt="Residual Waste" src="../../assets/img/trash-separation/1.png" />
    </div>
  </the-container>
</template>
<script setup>
import ContainerHalf from "@/layout/ContainerHalf.vue";
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

  @media (max-width: 1500px) {
    img {
      display: none;
    }
  }

</style>