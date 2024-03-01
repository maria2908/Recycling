import { createRouter, createWebHistory } from 'vue-router'
import TheHome from "@/pages/TheHome.vue";
import TheNews from "@/pages/TheNews.vue";
import TheContact from "@/pages/TheContact.vue";
import EnvironmentalProtection from "@/pages/EnvironmentalProtection.vue";
import TrashSeparation from "@/pages/TrashSeparation.vue";
import RecyclingCycle from "@/pages/RecyclingCycle.vue";
import TheMetal from "@/pages/RecyclingCycle/TheMetal.vue";
import ThePaper from "@/pages/RecyclingCycle/ThePaper.vue";
import ThePlastic from "@/pages/RecyclingCycle/ThePlastic.vue";
import BeverageCartons from "@/pages/RecyclingCycle/BeverageCartons.vue";
import TheGlass from "@/pages/RecyclingCycle/TheGlass.vue";
import NewsInfo from "@/components/NewsInfo.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/recycling-cycle',
      name: 'RecyclingCycle',
      component: RecyclingCycle
    },
    {
      path: '/recycling-cycle/the-metal',
      name: 'TheMetal',
      component: TheMetal
    },
    {
      path: '/recycling-cycle/the-paper',
      name: 'ThePaper',
      component: ThePaper
    },
    {
      path: '/recycling-cycle/the-plastic',
      name: 'ThePlastic',
      component: ThePlastic
    },
    {
      path: '/recycling-cycle/beverage-cartons',
      name: 'BeverageCartons',
      component: BeverageCartons
    },
    {
      path: '/recycling-cycle/the-glass',
      name: 'TheGlass',
      component: TheGlass
    },
    {
      path: '/trash-separation',
      name: 'TrashSeparation',
      component: TrashSeparation
    },
    {
      path: '/the-news',
      name: 'TheNews',
      component: TheNews
    },
    {
      path: '/environmental-protection',
      name: 'EnvironmentalProtection',
      component: EnvironmentalProtection
    },
    {
      path: '/contact',
      name: 'TheContact',
      component: TheContact
    },
    {
      path: '/news-info/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})


export default router
