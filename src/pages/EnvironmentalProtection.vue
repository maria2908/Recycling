<script setup>
import TheContainer from "@/layout/TheContainer.vue";

</script>

<template >
  <div class="environment">
    <the-container>
      <h1 class="text-center py-12 text-5xl text-my-dark-green font-bold upper">{{ $t("environment-site.title")}}</h1>
      <p class="text-xl">{{ $t("environment-site.sub-title") }}</p>
      <img class="m-auto" width="500" src="https://ouch-cdn2.icons8.com/nU0XxYH-qci-gpttcZXseAkkmS1I6GJAi13HyEtReN4/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODUx/LzIzNzM4MjFlLWU5/YjAtNGMyNy1iZDFh/LTI3NTI2ZjA3NGVh/Zi5wbmc.png" alt="sdfsdfsdf" />
      <div class="lists pb-12">
        <h2 class="font-bold text-3xl text-my-dark-green">{{ $t("environment-site.contents") }}</h2>
        <ul class="leading-loose text-left mb-12">
          <li><span><a href='#section1'>{{ $t("environment-site.contents-list-title.first") }}</a></span></li>
          <li><span><a href='#section2'>{{ $t("environment-site.contents-list-title.second") }}</a></span></li>
          <li><span><a href='#section3'>{{ $t("environment-site.contents-list-title.third") }}</a></span></li>
          <li><span><a href='#section4'>{{ $t("environment-site.contents-list-title.fourth") }}</a></span></li>
          <li><span><a href='#section5'>{{ $t("environment-site.contents-list-title.fifth") }}</a></span></li>
          <li><span><a href='#section6'>{{ $t("environment-site.contents-list-title.sixth") }}</a></span></li>
          <li><span><a href='#section7'>{{ $t("environment-site.contents-list-title.seventh") }}</a></span></li>
          <li><span><a href='#section8'>{{ $t("environment-site.contents-list-title.eighth") }}</a></span></li>
          <li><span><a href='#section9'>{{ $t("environment-site.contents-list-title.ninth") }}</a></span></li>
        </ul>
      </div>
      <ol class="gradient-list">
        <li id="section1">
          <h1>{{ $t("environment-site.contents-list-title.first") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.first") }}</p>
        </li>
        <li id="section2">
          <h1>{{ $t("environment-site.contents-list-title.second") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.second.text") }}</p>
          <ul>
            <li>{{ $t("environment-site.contents-list-text.second.list.first") }}</li>
            <li>{{ $t("environment-site.contents-list-text.second.list.second") }}</li>
            <li>{{ $t("environment-site.contents-list-text.second.list.third") }}</li>
            <li>{{ $t("environment-site.contents-list-text.second.list.fourth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.second.list.fifth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.second.list.sixth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.second.list.seventh") }}</li>
            <li>{{ $t("environment-site.contents-list-text.second.list.eighth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.second.list.ninth") }}</li>
          </ul>
        </li>
        <li id="section3">
          <h1>{{ $t("environment-site.contents-list-title.third") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.third.text") }}</p>
          <ul>
            <li>{{ $t("environment-site.contents-list-text.third.list.first") }}</li>
            <li>{{ $t("environment-site.contents-list-text.third.list.second") }}</li>
            <li>{{ $t("environment-site.contents-list-text.third.list.third") }}</li>
            <li>{{ $t("environment-site.contents-list-text.third.list.fourth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.third.list.fifth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.third.list.sixth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.third.list.seventh") }}</li>
          </ul>
        </li>
        <li id="section4">
          <h1>{{ $t("environment-site.contents-list-title.fourth") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.fourth") }}</p>
        </li>
        <li id="section5">
          <h1>{{ $t("environment-site.contents-list-title.fifth") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.fifth.text") }}</p>
          <span>{{ $t("environment-site.contents-list-text.fifth.list.title") }}</span>
          <ul>
            <li>{{ $t("environment-site.contents-list-text.fifth.list.first") }}</li>
            <li>{{ $t("environment-site.contents-list-text.fifth.list.second") }}</li>
            <li>{{ $t("environment-site.contents-list-text.fifth.list.third") }}</li>
            <li>{{ $t("environment-site.contents-list-text.fifth.list.fourth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.fifth.list.fifth") }}</li>
          </ul>
        </li>
        <li id="section6">
          <h1>{{ $t("environment-site.contents-list-title.sixth") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.sixth.text") }}</p>
          <ul>
            <li>{{ $t("environment-site.contents-list-text.sixth.list.first") }}</li>
            <li>{{ $t("environment-site.contents-list-text.sixth.list.second") }}</li>
            <li>{{ $t("environment-site.contents-list-text.sixth.list.third") }}</li>
            <li>{{ $t("environment-site.contents-list-text.sixth.list.fourth") }}</li>
            <li>{{ $t("environment-site.contents-list-text.sixth.list.fifth") }}</li>
          </ul>
        </li>
        <li id="section7">
          <h1>{{ $t("environment-site.contents-list-title.seventh") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.seventh") }}</p>
        </li>
        <li id="section8">
          <h1>{{ $t("environment-site.contents-list-title.eighth") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.eighth") }}</p>
        </li>
        <li id="section9">
          <h1>{{ $t("environment-site.contents-list-title.ninth") }}</h1>
          <p>{{ $t("environment-site.contents-list-text.ninth.text") }}</p>
          <ul>
            <li>{{ $t("environment-site.contents-list-text.ninth.list.first") }}</li>
            <li>{{ $t("environment-site.contents-list-text.ninth.list.second") }}</li>
            <li>{{ $t("environment-site.contents-list-text.ninth.list.third") }}</li>
            <li>{{ $t("environment-site.contents-list-text.ninth.list.fourth") }}</li>
          </ul>
          <span>{{ $t("environment-site.contents-list-text.ninth.tip") }}</span>
        </li>
      </ol>
    </the-container>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);

.environment {
  .body--dark & {
    background-color: #151515;
    color: white;
    .lists li {
      color: white;
    }

    .gradient-list li {
      background-color: #151515;
      box-shadow: 0.25rem 0.25rem 0.6rem rgba(213, 210, 210, 0.11), 0 0.5rem 1.125rem rgba(160, 158, 158, 0.2);
      ul li {
        box-shadow: none;
      }
    }
  }
  .body--light & {
    background-color: white;

  }
}

$black: #1d1f20;
$blue: #9bc1ef;
$green: #08bc5b;
$yellow: #fff61a;
$white: #fafafa;

%boxshadow {
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
}

ol.gradient-list {
  counter-reset: gradient-counter;
  list-style: none;
  margin: 1.75rem 0;
  padding-left: 1rem;
  h1 {
    font-weight: 700;
    font-size: 30px;
    padding: 10px 0;
  }
  > li {
    background: white;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    @extend %boxshadow;
    counter-increment: gradient-counter;
    margin-top: 1rem;
    min-height: 3rem;
    padding: 2rem 2rem 2rem 3rem;
    position: relative;
    &::before,
    &::after {
      background: linear-gradient(135deg, $blue 0%,$green 100%);
      border-radius: 1rem 1rem 0 1rem;
      content: '';
      height: 3rem;
      left: -1rem;
      overflow: hidden;
      position: absolute;
      top: -1rem;
      width: 3rem;
    }
    &::before {
      align-items: flex-end;
      @extend %boxshadow;
      content: counter(gradient-counter);
      color: $black;
      display: flex;
      font: 900 1.5em/1 'Montserrat';
      justify-content: flex-end;
      padding: 0.125em 0.25em;
      z-index: 1;
    }
    @for $i from 1 through 5 {
      &:nth-child(10n+#{$i}):before {
        background: linear-gradient(135deg, rgba($green, $i * 0.2) 0%,rgba($yellow, $i * 0.2) 100%);
      }
    }
    @for $i from 6 through 10 {
      &:nth-child(10n+#{$i}):before {
        background: linear-gradient(135deg, rgba($green, 1 - (($i - 5) * 0.2)) 0%,rgba($yellow, 1 - (($i - 5) * 0.2)) 100%);
      }
    }
    + li {
      margin-top: 2rem;
    }
    ul {
      margin: 20px;
      li {
        list-style: disc;
        padding: 5px 0;
      }
    }
  }
}

.lists {
  position: relative;
}
.lists ul {
  position: relative;
}
.lists ul li {
  position: relative;
  left: 0;
  color: #000000;
  list-style: none;
  margin-top: 15px;
  border-left: 2px solid #058240;
  transition: 0.5s;
  cursor: pointer;
}
.lists ul li:hover {
  left: 10px;
}
.lists ul li span {
  position: relative;
  padding: 5px;
  padding-left: 12px;
  display: inline-block;
  z-index: 1;
  transition: 0.5s;
}
.lists ul li:hover span {
  color: #ffffff;
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
</style>