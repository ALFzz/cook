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
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import RecipeForm from '@/pages/RecipeForm.vue'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
}

const checkAuth = (to, from, next) => {
    let isAuth = false

    onAuthStateChanged(getAuth(), (user) => {
        if (user && !isAuth) {
            isAuth = true
            next()
        } else if (!user && !isAuth) {
            isAuth = true
            next(router.push('/'))
            alert('Вы не авторизовались, чтобы переходить в лк')
        }
    })
}

const router = createRouter({
    scrollBehavior() {
        return { top: 0 }
    },
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
            component: TheReviews,
        },
        {
            name: 'Cooking',
            path: '/cooking',
            component: Cooking,
        },
        {
            name: 'Categories',
            path: '/categories',
            component: TheCategories,
        },
        {
            name: 'Cabinet',
            path: '/cabinet',
            component: TheCabinet,
            beforeEnter: checkAuth,
        },
        {
            name: 'Recipes',
            path: '/categories/:label',
            component: Recipes,
        },
        {
            name: 'RecipeForm',
            path: '/recipe_form',
            component: RecipeForm,
        },
        {
            name: 'Cooking',
            path: '/categories/:label/:id',
            component: Cooking,
        },
    ],
})

initializeApp(firebaseConfig)

createApp(App).use(createPinia()).use(router).mount('#app')