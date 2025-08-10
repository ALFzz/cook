<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const signOutMethod = async () => {
  await signOut(getAuth())
  router.push('/')
}
</script>

<template>
  <!-- Аватар и кнопка выхода -->
  <div class="flex flex-col items-center">
    <div class="bg-gray-300 w-64 h-64 sm:w-80 sm:h-80 rounded-full"></div>
    <h2
      class="mt-5 text-lg sm:text-xl text-red-600 font-medium cursor-pointer transition duration-200 hover:text-[#812828]"
      @click="signOutMethod"
    >
      Выйти
    </h2>
  </div>
</template>
