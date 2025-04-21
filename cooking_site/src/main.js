import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '@/pages/TheMain.vue'
import TheReviews from '@/pages/TheReviews.vue'
import Cooking from '@/pages/Cooking.vue'
import TheCategories from '@/pages/TheCategories.vue'
import Recipes from '@/pages/Recipes.vue'
import TheCabinet from '@/pages/TheCabinet.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Main',
      path: '/',
      component: TheMain,
    },
    {
      name: 'Reviews',
      path: '/reviews',
      component: TheReviews
    },
    {
      name: 'Cooking',
      path: '/cooking',
      component: Cooking
    },
    {
      name: 'Categories',
      path: '/categories',
      component: TheCategories
    },
    {
      name: 'Recipes',
      path: '/recipes',
      component: Recipes
    },
    {
      name: 'Cabinet',
      path: '/cabinet',
      component: TheCabinet
    },
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
