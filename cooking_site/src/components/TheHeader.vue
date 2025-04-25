<script setup>

import LogInModal from '@/components/AuthorizationModal.vue'

import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/solid/index.js'

import {computed, ref} from 'vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useRouter} from "vue-router";

const isOpen = ref(false)
const router = useRouter()

function toggleOpen() {
  isOpen.value = !isOpen.value
  console.log(isOpen.value)
}





const emit = defineEmits(['toggleModal'])

function handleClick() {
  onAuthStateChanged(getAuth(), (user) => {
    console.log(user)
    if (user) {
      router.push('/cabinet')
      return true
    } else {
      console.log('false')
      emit('toggleModal')

    }
  })
}

</script>

<template>
  <header>
    <div class="flex items-center justify-end  w-full h-20 bg-white border-b">
      <div class="flex">
        <input type="text" placeholder="Поиск" class="pr-10 border-gray-400 placeholder: pl-[14px] border-2 py-1 rounded-3xl">
        <MagnifyingGlassCircleIcon class="h-12 w-12 text-cyan-40"/>
      </div>

      <div class="flex absolute left-1/2 transform text-[25px] -translate-x-1/2">
        <RouterLink to="/categories">
          <h1 class="pr-8">рецепты</h1>
        </RouterLink>



        <RouterLink to="/">
          <h1 class="pr-8">о нас</h1>
        </RouterLink>

        <div @click="handleClick">
          <h1 class="pr-8" >личный кабинет</h1>
        </div>


        <RouterLink to="/reviews">
          <h1 class="">отзывы</h1>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>