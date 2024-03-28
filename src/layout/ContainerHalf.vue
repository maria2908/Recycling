<template>
  <div class="mx-16 mx-auto py-16 container" style="width: 50%;">
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
</style>