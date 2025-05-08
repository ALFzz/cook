<script setup>

import { HeartIcon } from '@heroicons/vue/24/solid/index.js'

defineProps({
  img: String,
  label: String,
  time: String
})
</script>

<template>
  <div @click.prevent="$router.push({ name: 'Cooking' })">
    <h2 class="text-center text-[24px] max-sm:text-[14px] overflow-hidden whitespace-nowrap text-ellipsis">{{label}}</h2>
    <img :src="`/src/assets/img/${img}`" alt="pumpkin_soup">
    <div class="flex flex-row  items-center justify-between">
      <h2 class="text-[24px] max-sm:text-[14px]">Время приготовления: {{time}}</h2>
      <HeartIcon class=" w-10 h-10"/>
    </div>
  </div>
</template>

<style scoped>

</style>