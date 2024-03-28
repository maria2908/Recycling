<template>
  <container-half class="bg-white rounded-2xl p-12">

    <div class="flex align-center">
      <div>
        <h1 class="text-5xl font-bold py-4" style="color: #dfac06">Restmüll</h1>
        <p>Restmüll ist der Müll, der nicht mehr recycelt werden kann. Er wird in der <b>Müllverbrennungsanlage</b> im Heizkraftwerk München Nord verbrannt und in Strom und Fernwärme umgewandelt. Leider landen immer noch zu viele Wertstoffe, die eigentlich recycelt werden könnten, im Restmüll. Mit konsequenter Mülltrennung kann die Restmüllmenge ganz erheblich reduziert werden.
          <br>
          <br>
          <b>Ihr Vorteil</b>: Wenn Sie Ihren Abfall besser trennen und weniger Abfall in die Restmülltonne werfen, können Sie Ihre Müllgebühren durch den Umstieg auf kleinere oder weniger Restmülltonnen senken.
        </p>
        <h2 class="text-2xl font-bold py-4" style="color: #dfac06">Was gehört in die graue Restmülltonne?</h2>
        <ul>
          <li>Staubsaugerbeutel</li>
          <li>Straßenkehricht, Asche</li>
          <li>Zigarettenkippen</li>
          <li>Katzen- und Kleintierstreu</li>
          <li>Malerfolien, Teppichbodenreste, Tapeten</li>
          <li>Windeln, Hygienepapiere</li>
          <li>Eingetrocknete Farben in Tüten gepackt</li>
          <li>Schmutzige oder beschichtete Papiere, Wachspapiere und Durchschreibepapiere</li>
        </ul>
      </div>
      <img alt="Residual Waste" src="../../assets/img/trash-separation/1.png" />
    </div>
  </container-half>
</template>
<script setup>
import ContainerHalf from "@/layout/ContainerHalf.vue";
</script>

<style scoped>
  li {
    line-height: 35px;
  }
  li:before {
    content: "•  ";
    color: #dfac06;
  }
</style>