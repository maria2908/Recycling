<template>
  <div class="flex">
    <div v-for="(userAnswer, userAnswerIndex) in props.userAnswers" :key="userAnswerIndex" class="px-2" >
      <img v-if="userAnswer === null" src="../../assets/img/defaultHeart.svg">
      <img v-else-if="userAnswer === questions[userAnswerIndex].correctAnswer" src="../../assets/img/correctHeart.svg">
      <img v-else src="../../assets/img/falseHeart.svg">
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    userAnswers: Array,
    correctAnswer: Number,
    questions: Array
  });

</script>