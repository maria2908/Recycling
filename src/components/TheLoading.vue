<template>
  <div class="loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.loader {
  margin: auto;
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.loader div {
  height: 30px;
  width: 30px;
  position: absolute;
  animation: move 4s infinite;
}

.loader div:nth-child(1) {
  background-color: #058240;
  box-shadow: #045d2e 0px 7px 29px 0px;
  transform: translate(-30px,-30px);
  animation-delay: -1s;
}

.loader div:nth-child(2) {
  background-color: rgb(97, 183, 253);
  box-shadow: rgb(97, 183, 253) 0px 7px 29px 0px;
  transform: translate(30px,-30px);
  animation-delay: -2s;
}

.loader div:nth-child(3) {
  background-color: #fff61a;
  box-shadow: #b9b214 0px 7px 29px 0px;
  transform: translate(30px,30px);
  animation-delay: -3s;
}

.loader div:nth-child(4) {
  background-color: #ee5601;
  box-shadow: #b54404 0px 7px 29px 0px;
  transform: translate(-30px,30px);
  animation-delay: -4s;
}

@keyframes move {
  0% {
    transform: translate(-30px, -30px);
  }

  25% {
    transform: translate(30px, -30px);
  }

  50% {
    transform: translate(30px, 30px);
  }

  75% {
    transform: translate(-30px, 30px);
  }

  100% {
    transform: translate(-30px, -30px);
  }
}

</style>