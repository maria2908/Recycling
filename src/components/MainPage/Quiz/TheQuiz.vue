<script setup>
import {ref, computed, reactive, onUnmounted} from 'vue';
import TheScore from "@/components/MainPage/TheScore.vue";

const quizData = {
  subTitle: 'quiz.sub-title',
  title: 'quiz.title',
  questionT: 'quiz.question',
  button: 'quiz.button',
  right: 'quiz.right',
  false: 'quiz.false',
  next: 'quiz.nextQuestion',
  back: 'quiz.backQuestion',
  score: 'quiz.score',
  congratulation: 'quiz.congratulation',
  startOneMoreTime: 'quiz.startOneMoreTime',

  questions: [
    {
      text: 'quiz.questions.firstQuestion.title',
      options: ['quiz.questions.firstQuestion.answers.firstAnswer.text', 'quiz.questions.firstQuestion.answers.secondAns' +
      'wer.text'],
      correctAnswer: 1,
      imgs: [
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/coffee-f1-a1.svg',
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/coffee-f1-a2.svg'
      ],
      explanation: 'quiz.questions.firstQuestion.explanation',
    },
    {
      text: 'quiz.questions.secondQuestion.title',
      options: ['quiz.questions.secondQuestion.answers.firstAnswer.text', 'quiz.questions.secondQuestion.answers.secondAns' +
      'wer.text'],
      correctAnswer: 0,
      imgs: [
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/blaueflasche-f2-a1.svg',
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/blaueflasche-f2-a2.svg'
      ],
      explanation: 'quiz.questions.secondQuestion.explanation',
    },
    {
      text: 'quiz.questions.thirdQuestion.title',
      options: ['quiz.questions.thirdQuestion.answers.firstAnswer.text', 'quiz.questions.thirdQuestion.answers.secondAns' +
      'wer.text'],
      correctAnswer: 1,
      imgs: [
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/fleischreste-f3-a1.svg',
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/fleischreste-f3-a2.svg'
      ],
      explanation: 'quiz.questions.thirdQuestion.explanation',
    },
    {
      text: 'quiz.questions.fourthQuestion.title',
      options: ['quiz.questions.fourthQuestion.answers.firstAnswer.text', 'quiz.questions.fourthQuestion.answers.secondAns' +
      'wer.text'],
      correctAnswer: 1,
      imgs: [
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/joghurtbecher-f4-a1.svg',
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/joghurtbecher-f4-a2.svg'
      ],
      explanation: 'quiz.questions.fourthQuestion.explanation',
    },
    {
      text: 'quiz.questions.fifthQuestion.title',
      options: ['quiz.questions.fifthQuestion.answers.firstAnswer.text', 'quiz.questions.fifthQuestion.answers.secondAns' +
      'wer.text'],
      correctAnswer: 0,
      imgs: [
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/mundschutz-f5-a1.svg',
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/mundschutz-f5-a2.svg'
      ],
      explanation: 'quiz.questions.fifthQuestion.explanation',
    },
    {
      text: 'quiz.questions.sixthQuestion.title',
      options: ['quiz.questions.sixthQuestion.answers.firstAnswer.text', 'quiz.questions.sixthQuestion.answers.secondAns' +
      'wer.text'],
      correctAnswer: 1,
      imgs: [
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/medikamente-f6-a1.svg',
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/medikamente-f6-a2.svg'
      ],
      explanation: 'quiz.questions.fifthQuestion.explanation',
    },
    {
      text: 'quiz.questions.seventhQuestion.title',
      options: ['quiz.questions.seventhQuestion.answers.firstAnswer.text', 'quiz.questions.seventhQuestion.answers.secondAns' +
      'wer.text'],
      correctAnswer: 0,
      imgs: [
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/wecker-f7-a1.svg',
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/wecker-f7-a2.svg'
      ],
      explanation: 'quiz.questions.seventhQuestion.explanation',
    },
    {
      text: 'quiz.questions.eighthQuestion.title',
      options: ['quiz.questions.eighthQuestion.answers.firstAnswer.text', 'quiz.questions.eighthQuestion.answers.secondAns' +
      'wer.text'],
      correctAnswer: 0,
      imgs: [
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/pizzakarton-f8-a1.svg',
        'https://studionand.github.io/quarks-landwirtschaft/static/quiz/recycling/pizzakarton-f8-a2.svg'
      ],
      explanation: 'quiz.questions.eighthQuestion.explanation',
    },
  ],
};
const quiz = ref(quizData);
const userAnswers = reactive(Array(quizData.questions.length).fill(null));
const quizCompleted = ref(false);
const currentQuestion = ref(0);
const currentAnswer = computed(() => { return userAnswers[currentQuestion.value] });
const startQuiz = ref(false);

const nextQuestion = () => {
  if (currentQuestion.value === quiz.value.questions.length - 1) {
    quizCompleted.value = true;
  } else {
    currentQuestion.value += 1;
  }
};

const tryOneTimeMore = () => {
  quizCompleted.value = false;
  startQuiz.value = false;
  userAnswers.value = Array(quizData.questions.length).fill(null);
  currentQuestion.value = 0;
}

const previousQuestion = () => {
  currentQuestion.value -= 1;
}
const calculateScore = () => {
  let correctAnswers = 0;

  for (let i = 0; i < quiz.value.questions.length; i++) {
    if (userAnswers[i] === quiz.value.questions[i].correctAnswer) {
      correctAnswers++;
    }
  }

  return correctAnswers;
};

function useInnerWidth(query){
  const width = ref(window.innerWidth);
  const syncWidth = () => width.value = window.innerWidth;
  window.addEventListener('resize', syncWidth);
  onUnmounted(() => window.removeEventListener('resize', syncWidth));
  return width;
}

const innerWidth = useInnerWidth();
</script>

<template>
  <div v-if="innerWidth > 1550">
    <div class="bg-my-dark-blue relative quiz" style="height: 80vh;">
      <div class="absolute top-0 w-100 h-100" v-if="!startQuiz">
        <img class="absolute top-8 right-16" height="180" width="180" src="https://ouch-cdn2.icons8.com/nYcU_Ks_YvQgPjuVFJ4Af_cj0z1duoG-EcTF8Bi0R4Y/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjgv/YTAyNTQyZGItZjZl/OS00ZDUxLTlhOGUt/NjIxZThjNGYzYzlh/LnBuZw.png" />
        <img class="absolute top-8 left-12" height="180" width="180" src="https://ouch-cdn2.icons8.com/4TJ7VxPziBcCBu7cWzkVnorXV3lFOyhWUu6WB_uT6YA/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTAw/L2VjZDQ4MzcwLWVh/NjAtNGQzNC05OWM1/LThmNjk1YzJhMzYz/MC5wbmc.png" />
        <img class="absolute bottom-8 left-8" height="210" width="210" src="https://ouch-cdn2.icons8.com/7BKRMlP5LqqjkXX_ejuI-hnohZqIXjL8LCNzMRyh11U/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTA5/L2U1OGQyNThmLTZi/NGMtNDAyNC04YjM1/LTFmYjE2YWU0MTU3/Ni5wbmc.png" />
        <img class="absolute bottom-8 right-20" height="180" width="180" src="https://ouch-cdn2.icons8.com/TjLgyKzoyN05NzAqfAu2mYLsoB2wu6jWC_pmiWJCVes/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEy/LzgxNTQ5Njg0LTU3/NzYtNDBmZi05ZDFl/LTg1MDBkY2ViOTZm/ZC5wbmc.png" />

        <div class="mx-auto mt-56" style="width: 70%;">
          <p class="text-3xl text-white font-bold pb-3">{{$t(quiz.subTitle)}}</p>
          <p class="text-6xl text-white font-bold bg-black p-5">{{$t(quiz.title)}}</p>
          <button class="bg-my-yellow text-black p-4 rounded-3xl font-bold px-7 mt-9 ml-72" @click="startQuiz = !startQuiz">{{$t(quiz.button)}}</button>
        </div>
      </div>
      <div v-else>
        <div class="quiz" v-if="!quizCompleted" style="height: 80vh;">
          <div class="relative pt-4 h-full p-12" v-for="(question, index) in quiz.questions" :key="index" v-show="currentQuestion === index">
            <div class="flex justify-around align-center">
              <div class="pt-8 w-1/2">
                <p class="text-white font-bold text-xl">{{$t(quiz.questionT)}} № {{index + 1}} / {{quiz.questions.length}}</p>
                <h2 class="text-4xl bg-black p-2 my-3 font-bold">{{ $t(question.text) }}</h2>
              </div>
              <the-score
                  :userAnswers="userAnswers"
                  :correctAnswer="question.correctAnswer"
                  :questions="quiz.questions"
              ><slot></slot></the-score>
            </div>
            <div class="flex justify-around pt-6 ml-14">
              <div v-for="(option, optionIndex) in question.options"  :key="optionIndex">
                <div
                    style="height: 25vh"
                    :class="{
                      inactive: optionIndex !== currentAnswer,
                      active: optionIndex === currentAnswer,
                      disabled: currentAnswer !== null,
                    }"
                    @click="userAnswers[currentQuestion] = optionIndex"
                >

                  <img class="bg-my-dark-blue" :src="question.imgs[optionIndex]"  />
                  <p class="text-md font-bold py-6">{{$t(option)}}</p>

                  <div v-if="currentAnswer !== null && optionIndex === currentAnswer" class="p-6">
                    <div
                        v-if="currentAnswer === quiz.questions[currentQuestion].correctAnswer"
                        class="relative bottom-80 bg-white w-16 h-16 p-4 font-bold mt-4"
                        style="border-radius: 50%; left: 100%;"
                    >
                      <img src="../../../assets/img/right.svg">
                    </div>
                    <div
                        v-else
                        class="relative bottom-80 bg-white w-16 h-16 p-4 font-bold mt-4"
                        style="border-radius: 50%; left: 100%;"
                    >
                      <img src="../../../assets/img/false.svg">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="currentAnswer !== null" class="mt-5">
              <div
                  v-if="currentAnswer === quiz.questions[currentQuestion].correctAnswer"
                  class="absolute bg-black w-fit px-6 py-3 ml-3 font-bold text-xl text-yellow"
              >
                {{$t(quiz.right)}}
              </div>
              <div
                  v-else
                  class="absolute bg-black w-fit px-6 py-3 ml-3 font-bold text-xl text-yellow"
              >
                {{$t(quiz.false)}}
              </div>
            </div>
            <div
                v-if="currentAnswer !== null"
                class="bg-white p-4 pt-8 mt-12 text-xl"
                style="width: 100%"
            >
              {{$t(question.explanation)}}
            </div>
            <div>
              <button
                  class="absolute right-8 bottom-8 bg-my-yellow p-4 rounded-3xl font-bold px-7 mt-9"
                  @click="nextQuestion"
                  v-if="currentQuestion < quiz.questions.length && !quizCompleted"
                  :disabled="userAnswers[currentQuestion] === null"
                  :class="{disabled:
                      userAnswers[currentQuestion] === null }"
              >
                {{ $t(quiz.next) }}
              </button>
              <button
                  class="absolute bottom-8 bg-my-yellow p-4 rounded-3xl font-bold px-7 mt-9"
                  @click="previousQuestion" v-if="currentQuestion > 0"
              >
                {{ $t(quiz.back) }}
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="relative flex justify-evenly top-72">
            <div class="bg-white p-2">
              <img class="bg-my-dark-blue" src="https://studionand.github.io/quarks-landwirtschaft/static/quiz/Trophy.svg">
            </div>
            <div>
              <div class="flex align-center">
                <h2 class="text-lg fond-bold text-white font-bold mr-3">{{ $t(quiz.score) }} :</h2>
                <h1 class="text-2xl text-yellow bg-black w-fit p-2">Your Score: {{ calculateScore() }} / {{ quiz.questions.length }}</h1>
              </div>
              <the-score
                  class="py-4 relative right-0"
                  :userAnswers="userAnswers"
                  :correctAnswer="quiz.questions.correctAnswer"
                  :questions="quiz.questions"
              ><slot></slot></the-score>

              <p class="text-4xl bg-black font-bold p-2 w-96 mt-6">{{ $t(quiz.congratulation) }}</p>
              <!--              <button-->
              <!--                  class="bg-my-yellow p-4 rounded-3xl font-bold px-7 mt-9"-->
              <!--                  @click="tryOneTimeMore"-->
              <!--              >-->
              <!--                {{ $t(quiz.startOneMoreTime) }}-->
              <!--              </button>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="innerWidth < 1500">
    <div class="bg-my-dark-blue relative quiz" style="height: 90vh;">
      <div class="absolute top-0 w-100 h-100" v-if="!startQuiz">
        <img class="absolute top-8 right-16" height="180" width="180" src="https://ouch-cdn2.icons8.com/nYcU_Ks_YvQgPjuVFJ4Af_cj0z1duoG-EcTF8Bi0R4Y/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjgv/YTAyNTQyZGItZjZl/OS00ZDUxLTlhOGUt/NjIxZThjNGYzYzlh/LnBuZw.png" />
        <img class="absolute top-8 left-12" height="180" width="180" src="https://ouch-cdn2.icons8.com/4TJ7VxPziBcCBu7cWzkVnorXV3lFOyhWUu6WB_uT6YA/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTAw/L2VjZDQ4MzcwLWVh/NjAtNGQzNC05OWM1/LThmNjk1YzJhMzYz/MC5wbmc.png" />
        <img class="absolute bottom-8 left-8" height="210" width="210" src="https://ouch-cdn2.icons8.com/7BKRMlP5LqqjkXX_ejuI-hnohZqIXjL8LCNzMRyh11U/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTA5/L2U1OGQyNThmLTZi/NGMtNDAyNC04YjM1/LTFmYjE2YWU0MTU3/Ni5wbmc.png" />
        <img class="absolute bottom-8 right-20" height="180" width="180" src="https://ouch-cdn2.icons8.com/TjLgyKzoyN05NzAqfAu2mYLsoB2wu6jWC_pmiWJCVes/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEy/LzgxNTQ5Njg0LTU3/NzYtNDBmZi05ZDFl/LTg1MDBkY2ViOTZm/ZC5wbmc.png" />

        <div class="mx-auto mt-56" style="width: 70%;">
          <p class="text-2xl text-white font-bold pb-3">{{$t(quiz.subTitle)}}</p>
          <p class="text-5xl text-white font-bold bg-black p-5">{{$t(quiz.title)}}</p>
          <button class="bg-my-yellow text-black p-4 rounded-3xl font-bold px-7 mt-9 ml-48" @click="startQuiz = !startQuiz">{{$t(quiz.button)}}</button>
        </div>
      </div>
      <div v-else>
        <div class="quiz" v-if="!quizCompleted" style="height: 90vh;">
          <div class="relative pt-4 h-full p-12" v-for="(question, index) in quiz.questions" :key="index" v-show="currentQuestion === index">
            <div class="flex justify-around align-center">
              <div class="pt-4 w-1/2">
                <p class="text-white font-bold">{{$t(quiz.questionT)}} № {{index + 1}} / {{quiz.questions.length}}</p>
                <h2 class="text-xl bg-black p-2 my-3 font-bold">{{ $t(question.text) }}</h2>
              </div>
              <the-score
                  :userAnswers="userAnswers"
                  :correctAnswer="question.correctAnswer"
                  :questions="quiz.questions"
              ><slot></slot></the-score>
            </div>
            <div class="cards flex justify-around pt-6 ml-14">
              <div v-for="(option, optionIndex) in question.options"  :key="optionIndex">
                <div
                    :class="{
                      inactive: optionIndex !== currentAnswer,
                      active: optionIndex === currentAnswer,
                      disabled: currentAnswer !== null,
                    }"
                    @click="userAnswers[currentQuestion] = optionIndex"
                >

                  <img class="images bg-my-dark-blue" :src="question.imgs[optionIndex]" />
                  <p class="text-md font-bold py-6">{{$t(option)}}</p>

                  <div v-if="currentAnswer !== null && optionIndex === currentAnswer" class="p-6">
                    <div
                        v-if="currentAnswer === quiz.questions[currentQuestion].correctAnswer"
                        class="answer relative bottom-80 bg-white w-16 h-16 p-4 font-bold"
                        style="border-radius: 50%; left: 100%;"
                    >
                      <img src="../../../assets/img/right.svg">
                    </div>
                    <div
                        v-else
                        class="answer relative bottom-80 bg-white w-16 h-16 p-4 font-bold"
                        style="border-radius: 50%; left: 100%;"
                    >
                      <img src="../../../assets/img/false.svg">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="currentAnswer !== null" class="mt-5">
              <div
                  v-if="currentAnswer === quiz.questions[currentQuestion].correctAnswer"
                  class="improve absolute bg-black w-fit px-6 py-3 ml-3 font-bold text-xl text-yellow"
              >
                {{$t(quiz.right)}}
              </div>
              <div
                  v-else
                  class="improve absolute bg-black w-fit px-6 py-3 ml-3 font-bold text-xl text-yellow"
              >
                {{$t(quiz.false)}}
              </div>
            </div>
            <div
                v-if="currentAnswer !== null"
                class="bg-white p-4 pt-8 mt-12"
                style="width: 100%"
            >
              {{$t(question.explanation)}}
            </div>
            <div>
              <button
                  class="absolute right-8 bottom-8 bg-my-yellow p-4 rounded-3xl font-bold px-7 mt-9"
                  @click="nextQuestion"
                  v-if="currentQuestion < quiz.questions.length && !quizCompleted"
                  :disabled="userAnswers[currentQuestion] === null"
                  :class="{disabled:
                      userAnswers[currentQuestion] === null }"
              >
                {{ $t(quiz.next) }}
              </button>
              <button
                  class="absolute bottom-8 bg-my-yellow p-4 rounded-3xl font-bold px-7 mt-9"
                  @click="previousQuestion" v-if="currentQuestion > 0"
              >
                {{ $t(quiz.back) }}
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="relative flex justify-evenly top-72">
            <div class="bg-white p-2">
              <img class="bg-my-dark-blue" src="https://studionand.github.io/quarks-landwirtschaft/static/quiz/Trophy.svg">
            </div>
            <div>
              <div class="flex align-center">
                <h2 class="text-lg fond-bold text-white font-bold mr-3">{{ $t(quiz.score) }} :</h2>
                <h1 class="text-2xl text-yellow bg-black w-fit p-2">Your Score: {{ calculateScore() }} / {{ quiz.questions.length }}</h1>
              </div>
              <the-score
                  class="py-4 relative right-0"
                  :userAnswers="userAnswers"
                  :correctAnswer="quiz.questions.correctAnswer"
                  :questions="quiz.questions"
              ><slot></slot></the-score>

              <p class="text-4xl bg-black font-bold p-2 w-96 mt-6">{{ $t(quiz.congratulation) }}</p>
              <!--              <button-->
              <!--                  class="bg-my-yellow p-4 rounded-3xl font-bold px-7 mt-9"-->
              <!--                  @click="tryOneTimeMore"-->
              <!--              >-->
              <!--                {{ $t(quiz.startOneMoreTime) }}-->
              <!--              </button>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
.inactive {
  box-shadow: 0px 7px 27px -2px rgba(0, 0, 0, 0.56);
  padding: 10px;
  background-color: white;
  width: 220px !important;
  height: 32vh;
  text-align: center;
  margin-right: 80px;
}

.active {
  box-shadow: 0px 7px 27px -2px rgba(0,0,0,0.56);
  padding: 10px;
  background-color: white;
  width: 220px !important;
  height: 32vh;
  text-align: center;
  margin-right: 80px;
  opacity: 1 !important;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}

@media (max-width: 768px) {
 .quiz {
  height: 80vh !important;
 }

  .images {
    width: 180px !important;
  }

 .inactive {
   width: 180px !important;
  height: 24vh;
}

.active {
  width: 180px !important;
  height: 24vh;
}

.improve {
  font-size: 18px;
}

.answer {
  margin-top: 40px !important;
}
.cards {
  margin-top: 20px;
}
}

@media (max-width: 425px) {
  .quiz {
    display: none;
  }
}
</style>