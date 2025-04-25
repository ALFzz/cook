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
import {createPinia} from "pinia";
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1galntS5EzRz3XFbt_tNvEblecX9EJr8",
  authDomain: "cooking-authorization.firebaseapp.com",
  projectId: "cooking-authorization",
  storageBucket: "cooking-authorization.firebasestorage.app",
  messagingSenderId: "542950961511",
  appId: "1:542950961511:web:c48887235013dae5a8bfc2"
};

const checkAuth = (to, from, next) => {
  let isAuth = false

  onAuthStateChanged(getAuth(), (user) => {
    if (user && !isAuth) {
      isAuth = true
      next()
    } else if (!user && !isAuth) {
      isAuth = true
      next(router.push('/'))
      alert("Вы не авторизовались, чтобы переходить в лк")
    }
  })
}


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
      name: 'Cabinet',
      path: '/cabinet',
      component: TheCabinet,
      beforeEnter: checkAuth
    },
    {
      name: 'Recipes',
      path: '/categories/:label',
      component: Recipes
    },

  ]
})

initializeApp(firebaseConfig);

createApp(App)
    .use(createPinia())
  .use(router)
  .mount('#app')





