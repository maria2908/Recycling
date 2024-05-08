<template>
  <div class="mx-16 mx-auto py-16 container" style="width: 60%;">
    <slot></slot>
  </div>
</template>
<style scoped>
.container {
  .body--dark & {
    background-color: #151515 !important;
    color: white !important;
  }
  .body--light & {
    background-color: white;
  }
}

@media (max-width: 768px) {
  .container {
    width: 70% !important;
  }

}

@media (max-width: 425px) {
  .container {
    width: 90% !important;
  }

}
</style>