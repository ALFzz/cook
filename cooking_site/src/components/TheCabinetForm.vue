<script setup>
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";


const router = useRouter()
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("email").innerHTML = user.email;
  } else {
    console.log("Пользователь не авторизован");
  }
});

const favorites = ref([])
const isFavoriteEmpty = ref(true)

const db = getFirestore()

onMounted(async () => {
  const user = auth.currentUser
  try {
    const userDocRef = doc(db, 'users', user.uid)
    const userSnap = await getDoc(userDocRef)
    if (userSnap.exists() && userSnap.data().favRecipes.length !== 0) {
      isFavoriteEmpty.value = false
      favorites.value = userSnap.data().favRecipes || []
    }
    else {
      isFavoriteEmpty.value = true
    }
  } catch (error) {
    console.error('Ошибка при загрузке избранных рецептов:', error)
  }
})
</script>

<template>
  <div class="flex flex-col w-full max-w-4xl text-[18px] sm:text-[20px]">
    <!-- ФИО -->
    <div class="mb-6">
      <h3 class="text-xl sm:text-2xl mb-3">ФИО:</h3>
      <div id="email" class="flex items-center pl-5 bg-gray-300 w-full h-14 sm:h-16 rounded-2xl"></div>
    </div>




    <!-- Избранные рецепты -->
    <div class="mt-10">
      <h3 class="text-xl sm:text-2xl mb-4">Избранные рецепты:</h3>
      <div
          class="bg-gray-300 w-full min-h-[18rem] sm:min-h-[20rem] rounded-2xl text-center flex flex-col items-center justify-center p-4"
      >
        <div v-if="isFavoriteEmpty">
          <h3 class="text-lg sm:text-xl">Вы еще не добавили рецепты:(</h3>
          <button
              class="mt-6 px-8 sm:px-12 py-3 text-base sm:text-xl border border-black rounded-3xl shadow-xl bg-white text-black hover:bg-gray-200 transition"
              @click.prevent="$router.push({ name: 'Categories' })"
          >
            К рецептам
          </button>
        </div>

        <div v-else class="flex flex-col  gap-10 flex-grow">
          <div
              v-for="recipe in favorites"
              @click="router.push('/categories/' + recipe.category + '/' + recipe.id)"
              :key="recipe.id"
              class="border bg-white rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
                :src="`/src/assets/img/${recipe.img}`"
                alt="recipe"
                class="w-full h-48 object-cover rounded"
            />
            <h2 class="text-xl font-semibold mt-2">{{ recipe.label }}</h2>
            <p class="text-gray-600">Время приготовления: {{ recipe.time }}</p>
          </div>
        </div>


        </div>

    </div>
  </div>
</template>
