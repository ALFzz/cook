<script setup>
import LogInModal from '@/components/AuthorizationModal.vue'
import { MagnifyingGlassCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'

const isMobileMenuOpen = ref(false)
const router = useRouter()
const emit = defineEmits(['toggleModal'])

function handleClick() {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      router.push('/cabinet')
    } else {
      emit('toggleModal')
    }
  })
}
</script>

<template>
  <header class="sticky top-0 w-full bg-white border-b-2 px-4 z-50">
    <div class="flex items-center justify-between py-4">

      <!-- Бургер-иконка (показывается на экранах <1024px) -->
      <Bars3Icon
        class="w-8 h-8 cursor-pointer lg:hidden"
        @click="isMobileMenuOpen = true"
      />

      <!-- Меню (на экранах >=1024px) -->
      <nav
        class="hidden lg:flex lg:flex-row  text-[25px] gap-8 max-lg:gap-5 max-xl:text-[20px] max-lg:text-[25px] lg:items-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:gap-8 text-[25px]"
      >
        <RouterLink to="/categories">рецепты</RouterLink>
        <RouterLink to="/">о нас</RouterLink>
        <div @click="handleClick" class="cursor-pointer">личный кабинет</div>
        <RouterLink to="/reviews">отзывы</RouterLink>
      </nav>

      <!-- Поиск -->
      <!-- Поиск -->
      <div class="relative w-[250px] max-lg:w-[320px] max-sm:w-[180px] lg:ml-auto">
        <input
          type="text"
          placeholder="Поиск"
          class="w-full pl-4 pr-10 py-2 border-2 border-gray-400 rounded-3xl placeholder-gray-500 focus:outline-none"
        />
        <MagnifyingGlassCircleIcon
          class="w-14 h-14 transition duration-200 hover:text-[#628B79] text-[#456356] absolute -right-1.5 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>

    </div>

    <!-- Мобильное меню (слайд с левой стороны) -->
    <transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-50 bg-black bg-opacity-50 flex"
        @click.self="isMobileMenuOpen = false"
      >
        <div class="bg-white w-72 h-full p-5 shadow-lg relative">
          <XMarkIcon
            class="w-8 h-8 absolute top-4 right-4 cursor-pointer"
            @click="isMobileMenuOpen = false"
          />
          <nav class="flex flex-col gap-5 text-[25px] mt-12 text-nowrap">
            <RouterLink @click="isMobileMenuOpen = false" to="/categories">рецепты</RouterLink>
            <RouterLink @click="isMobileMenuOpen = false" to="/">о нас</RouterLink>
            <div @click="() => { handleClick(); isMobileMenuOpen = false }" class="cursor-pointer">личный кабинет</div>
            <RouterLink @click="isMobileMenuOpen = false" to="/reviews">отзывы</RouterLink>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
