<script setup>

import { HeartIcon } from '@heroicons/vue/24/solid/index.js'
</script>

<template>
  <div @click.prevent="$router.push({ name: 'Cooking' })">
    <h2 class="text-center text-[24px]">Тыквенный крем-суп</h2>
    <img src="/src/assets/img/pumpkin_soup.png" class="" alt="pumpkin_soup">
    <div class="flex flex-row  items-center justify-between">
      <h2 class="text-[24px]">Время приготовления: 40-50 минут</h2>
      <HeartIcon class=" w-10 h-10 mr-4"/>
    </div>
  </div>
</template>

<style scoped>

</style>