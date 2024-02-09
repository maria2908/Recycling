<script setup>
import TheContainer from "@/layout/TheContainer.vue";
</script>

<template >
  <the-container>
    <div class="">
      <h1 class="text-center py-12 text-5xl text-my-dark-green font-bold upper">8 Tipps für Umweltschutz im Alltag</h1>
      <p class="text-xl">Die Mülltüte am Waldrand einsammeln, mehr Strecken mit dem Fahrrad zurücklegen oder einen bienenfreundlichen Garten anlegen – Umweltschutz kann so einfach sein. Diese acht Maßnahmen lassen sich problemlos in den Alltag integrieren.</p>
      <img class="m-auto" width="500" src="https://ouch-cdn2.icons8.com/nU0XxYH-qci-gpttcZXseAkkmS1I6GJAi13HyEtReN4/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODUx/LzIzNzM4MjFlLWU5/YjAtNGMyNy1iZDFh/LTI3NTI2ZjA3NGVh/Zi5wbmc.png" alt="sdfsdfsdf" />
      <div class="lists">
        <h2>Inhalte im Überblick</h2>
        <ul class="text-lg leading-loose text-left mb-12">
          <li><span>Wieso ist Umweltschutz wichtig?</span></li>
          <li><span>Umweltschutz-Tipp Nr. 1: Energie sparen</span></li>
          <li><span>Umweltschutz-Tipp Nr. 2: Plastikmüll vermeiden</span></li>
          <li><span>Umweltschutz-Tipp Nr. 3: Sachen wiederverwerten</span></li>
          <li><span>Umweltschutz-Tipp Nr. 4: Wasser sparen</span></li>
          <li><span>Umweltschutz-Tipp Nr. 5: Artenvielfalt fördern</span></li>
          <li><span>Umweltschutz-Tipp Nr. 6: Bewusst ernähren</span></li>
          <li><span>Umweltschutz-Tipp Nr. 7: Nachhaltig fortbewegen</span></li>
          <li><span>Umweltschutz-Tipp Nr. 8: Umweltschonende Putzmittel verwenden</span></li>
        </ul>
      </div>
      <di>
        <div>
          <h2></h2>
          <span></span>
        </div>
        <div>
          <h2></h2>
          <span></span>
        </div>
        <div>
          <h2></h2>
          <span></span>
        </div>
        <div>
          <h2></h2>
          <span></span>
        </div>
        <div>
          <h2></h2>
          <span></span>
        </div>
        <div>
          <h2></h2>
          <span></span>
        </div>
        <div>
          <h2></h2>
          <span></span>
        </div>
        <div>
          <h2></h2>
          <span></span>
        </div>
        <div>
          <h2></h2>
          <span></span>
        </div>
      </di>
    </div>
  </the-container>
</template>

<style lang="scss" scoped>
.lists {
  position: relative;
}
.lists h2 {
  color: #000000;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.lists ul {
  position: relative;
}
.lists ul li {
  position: relative;
  left: 0;
  color: #000000;
  list-style: none;
  margin: 4px 0;
  border-left: 2px solid #058240;
  transition: 0.5s;
  cursor: pointer;
}
.lists ul li:hover {
  left: 10px;
}
.lists ul li span {
  position: relative;
  padding: 8px;
  padding-left: 12px;
  display: inline-block;
  z-index: 1;
  transition: 0.5s;
}
.lists ul li:hover span {
  color: #111;
}
.lists ul li:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #058240;
  transform: scaleX(0);
  transform-origin: left;
  transition: 0.5s;
}
.lists ul li:hover:before {
  transform: scaleX(1);
}

.item {
  display: block;
  clear: both;
  counter-increment: list;
  padding-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.375;
  position: relative;
}
.item:before {
  font: bold 2.25rem/1 Montserrat, Roboto, Helvetica, Arial, sans-serif;
  content: counter(list);
  font-size: 10px;
  width: 30px;
  height: 30px;
  margin: 0 1.5rem 0.75rem 0;
  color: #fdfdfd;
  background: linear-gradient(to bottom right, #058240 25%, #FFEDBC);
  text-shadow: 0 0 2px #058240;
  border-radius: 0 50% 50% 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  shape-outside: ellipse();
  z-index: 1;
}
</style>