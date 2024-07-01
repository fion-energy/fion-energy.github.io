import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tr from "@/i18n/translation"
import ContactView from "@/views/ContactView.vue";
import ImprintView from "@/views/ImprintView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import AGBView from "@/views/AGBView.vue";
import AVVView from "@/views/AVVView.vue";
import DataPolicyView from "@/views/DataPolicyView.vue";
import AboutUs from "@/views/AboutUs.vue";
import PPAView from "@/views/PPAView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 }
  },
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      // beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: PPAView
        },{
          path: 'companies',
          name: 'ppa',
          component: PPAView
        },
        {
          path: 'contact/:source?',
          name: 'contact',
          component: ContactView
        },
        {
          path: 'imprint',
          name: 'imprint',
          component: ImprintView
        },
        {
          path: 'privacy-policy',
          name: 'privacy-policy',
          component: PrivacyPolicyView
        },
        {
          path: 'about',
          name: 'about',
          component: AboutUs
        },
        {
          path: 'grid-operators',
          name: 'grid-operators',
          component: HomeView
        },
        {
          path: 'legal/app/agb',
          name: 'agb',
          component: AGBView
        },{
          path: 'legal/app/avv',
          name: 'avv',
          component: AVVView
        },{
          path: 'legal/app/datenschutz',
          name: 'data-policy',
          component: DataPolicyView
        },
      ]
    },
  ]
})

export default router
