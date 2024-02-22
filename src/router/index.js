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
      component: RecyclingCycle,
      children: [
        {
          path: 'plastic',
          name: 'ThePlastic',
          component: ThePlastic
        },
        {
          path: 'paper',
          name: 'ThePaper',
          component: ThePaper
        },
        {
          path: 'beverage-cartons',
          name: 'BeverageCartons',
          component: BeverageCartons
        },
        {
          path: 'metal',
          name: 'TheMetal',
          component: TheMetal
        },
        {
          path: 'glass',
          name: 'TheGlass',
          component: TheGlass
        },
      ]
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
  ]
})

export default router
