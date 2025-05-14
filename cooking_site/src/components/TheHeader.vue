<script setup>
import LogInModal from '@/components/AuthorizationModal.vue'

import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/solid/index.js'

import { computed, ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const router = useRouter()

const emit = defineEmits(['toggleModal'])

function handleClick() {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      router.push('/cabinet')
      return true
    } else {
      emit('toggleModal')
    }
  })
}
</script>

<template>
  <header class="sticky top-0 w-full bg-white border-b-2 px-4 z-50">
    <div class="relative flex flex-col lg:flex-row items-center justify-between gap-8 py-4">
      <!-- Меню: вертикально на мобилках, центрировано абсолютно на больших -->
      <nav
        class="flex flex-col items-center gap-8 text-[25px] max-xl:text-[20px] max-lg:text-[25px] lg:flex-row lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
        <RouterLink to="/categories"><h1>рецепты</h1></RouterLink>
        <RouterLink to="/"><h1>о нас</h1></RouterLink>
        <div @click="handleClick" class="cursor-pointer"><h1>личный кабинет</h1></div>
        <RouterLink to="/reviews"><h1>отзывы</h1></RouterLink>
      </nav>

      <!-- Поиск -->
      <div class="relative w-[250px] max-lg:w-[320px] lg:ml-auto">
        <input
          type="text"
          placeholder="Поиск"
          class="w-full max-md: pl-4 pr-10 py-2 border-2 border-gray-400 rounded-3xl placeholder-gray-500 focus:outline-none"
        />
        <MagnifyingGlassCircleIcon
          class="w-14 h-14 transition duration-200 hover:text-[#628B79] text-[#456356] absolute -right-1.5 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
