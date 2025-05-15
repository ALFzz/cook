<script setup>
import { HeartIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth'
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
  setDoc
} from 'firebase/firestore'
import { getCurrentRecipeById } from '@/recipes.js'

const props = defineProps({
  img: String,
  recipe: String,
  time: String,
  id: Number
})

const isLiked = ref(false)
const auth = getAuth()
const db = getFirestore()
const router = useRoute()


onMounted(async () => {
  const user = auth.currentUser
  if (!user) return

  const userDocRef = doc(db, 'users', user.uid)
  const userSnap = await getDoc(userDocRef)

  if (userSnap.exists()) {
    const favs = userSnap.data().favRecipes || []
    isLiked.value = favs.some(recipe => recipe.id === props.id)
  }
})

async function toggleLike() {
  const user = auth.currentUser
  if (!user) {
    alert('Вы должны быть авторизованы, чтобы лайкать рецепты')
    return
  }

  const userDocRef = doc(db, 'users', user.uid)
  const currentRecipe = getCurrentRecipeById(props.id)


  const wasLiked = isLiked.value
  isLiked.value = !wasLiked

  try {
    const userSnap = await getDoc(userDocRef)

    if (!userSnap.exists()) {
      await setDoc(userDocRef, {
        favRecipes: [currentRecipe]
      })
      return
    }

    if (wasLiked) {
      await updateDoc(userDocRef, {
        favRecipes: arrayRemove(currentRecipe)
      })
    } else {
      await updateDoc(userDocRef, {
        favRecipes: arrayUnion(currentRecipe)
      })
    }
  } catch (error) {

    isLiked.value = wasLiked
    console.error('Ошибка при обновлении лайков:', error)
  }
}
</script>

<template>
  <div>
    <h2
        class="text-center text-[24px] max-sm:text-[14px] overflow-hidden whitespace-nowrap text-ellipsis"
    >
      {{ recipe }}
    </h2>
    <img
        :src="`/src/assets/img/${img}`"
        alt="recipe"
        class="cursor-pointer"
        @click.prevent="$router.push(router.fullPath + '/' + id)"
    />
    <div class="flex flex-row items-center justify-between mt-2">
      <h2 class="text-[24px] max-sm:text-[14px]">Время приготовления: {{ time }}</h2>
      <HeartIcon
          @click="toggleLike"
          :class="[
          'cursor-pointer w-10 h-10 transition duration-200',
          isLiked ? 'text-red-500' : 'text-red-300'
        ]"
      />
    </div>
  </div>
</template>
