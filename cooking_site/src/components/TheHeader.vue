<script setup>

import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/solid/index.js'
</script>

<template>
  <header>
    <div class="flex items-center justify-end  w-full h-20 bg-white border-b">
      <div class="flex">
        <input type="text" placeholder="Поиск" class="pr-10 border-gray-400 placeholder: pl-[14px] border-2 py-1 rounded-3xl">
        <MagnifyingGlassCircleIcon class="h-12 w-12 text-cyan-40"/>
      </div>

      <div class="flex absolute left-1/2 transform text-[25px] -translate-x-1/2">
        <RouterLink to="/recipes">
          <h1 class="pr-8">рецепты</h1>
        </RouterLink>

        <RouterLink to="/">
          <h1 class="pr-8">о нас</h1>
        </RouterLink>

        <RouterLink to="/cabinet">
          <h1 class="pr-8">личный кабинет</h1>
        </RouterLink>

        <RouterLink to="/reviews">
          <h1 class="">отзывы</h1>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>