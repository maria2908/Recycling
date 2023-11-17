<template>

    <div class="bg-green-800" style="height: 65vh">
      <div class="w-full h-screen relative top-40 left-52 w-66">


  <!--      <div v-for="question in questions" :key="question" class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">-->
  <!--        <p class="text-2xl font-bold">{{$t(question.text)}}</p>-->
  <!--           <div class="flex">-->

  <!--             <label-->
  <!--                 v-for="(answer, key) in question.answers"-->
  <!--                 :key="key"-->
  <!--                 class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg">-->
  <!--               <input-->
  <!--                   type="radio"-->
  <!--                   :id="key"-->
  <!--                   class="hidden"-->
  <!--                   :value="key"-->
  <!--                   @onclick="answered($event)"-->
  <!--                   :disabled="selectedAnswer !== ''"-->
  <!--               />-->
  <!--               {{$t(answer)}}-->
  <!--             </label>-->
  <!--           </div>-->
  <!--      </div>-->



  <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
    <h1 class="text-2xl font-bold">{{ $t(currentQuestion.question) }}</h1>
    <ul class="flex">
      <li v-for="(option, index) in currentQuestion.options" :key="index">
        <input
            type="radio"
            :id="'option' + index"
            :value="index"
            class="hidden"
            v-model="selectedOption"
            @click="nextQuestion"
        />
        <label class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" :for="'option' + index">{{ $t(option) }}</label>
      </li>
    </ul>
    <div v-if="quizCompleted">
      <h2>Quiz Completed!</h2>
      <p>Your score: {{ score }}/{{ questions.length }}</p>
    </div>
  </div>
            </div>
          </div>
</template>
<script setup>
import { ref, onMounted  } from 'vue';

const questions = ref([
  {

    question: 'quiz.questions.firstQuestion.titel',
    // img: {
    //   1: 'quiz.questions.firstQuestion.answers.firstAnswer.img',
    //   2: 'quiz.questions.firstQuestion.answers.secondAnswer.img',
    // },
    options: ['quiz.questions.firstQuestion.answers.firstAnswer.text', 'quiz.questions.firstQuestion.answers.secondAnswer.text'],
    correctAnswer: '0',
  },
  {

    question: 'quiz.questions.firstQuestion.titel',
    // img: {
    //   1: 'quiz.questions.firstQuestion.answers.firstAnswer.img',
    //   2: 'quiz.questions.firstQuestion.answers.secondAnswer.img',
    // },
    options: ['quiz.questions.firstQuestion.answers.firstAnswer.text', 'quiz.questions.firstQuestion.answers.secondAnswer.text'],
    correctAnswer: '0',
  },
])

const currentQuestionIndex = ref(0);
const selectedOption = ref(null);
const score = ref(0);

const currentQuestion = ref(questions.value[currentQuestionIndex.value]);

const quizCompleted = ref(false);

const nextQuestion = () => {
  if (selectedOption.value !== null) {
    if (selectedOption.value === currentQuestion.value.correctAnswer) {
      score.value++;
    }

    selectedOption.value = null;

    if (currentQuestionIndex.value < questions.value.length - 1) {
      currentQuestionIndex.value++;
      currentQuestion.value = questions.value[currentQuestionIndex.value];
    } else {
      quizCompleted.value = true;
    }
  } else {
    alert('Please select an option before moving to the next question.');
  }
};

onMounted(() => {
  currentQuestion.value = questions.value[currentQuestionIndex.value];
});
</script>