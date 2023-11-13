import { createRouter, createWebHistory } from 'vue-router'
import TheHome from "@/pages/TheHome.vue";
import TheEnvironment from "@/pages/TheEnvironment.vue";
import TheHealth from "@/pages/TheHealth.vue";
import TheContact from "@/pages/TheContact.vue";
import EnvironmentalProtection from "@/pages/EnvironmentalProtection.vue";
import TrashSeparation from "@/components/MainPage/TrashSeparation.vue";
import ExtremeWeather from "@/components/MainPage/ExtremeWeather.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome,
      children: [
        {
          path: 'trash-separation',
          name: 'TrashSeparation',
          component: TrashSeparation,
        },{
          path: 'extreme-weather',
          name: 'ExtremeWeather',
          component: ExtremeWeather,
        },
      ]
    },
    {
      path: '/contact',
      name: 'TheContact',
      component: TheContact
    },
    {
      path: '/environment',
      name: 'TheEnvironment',
      component: TheEnvironment
    },
    {
      path: '/health',
      name: 'TheHealth',
      component: TheHealth
    },
    {
      path: '/environmental-protection',
      name: 'EnvironmentalProtection',
      component: EnvironmentalProtection
    }
  ]
})

export default router
