<script setup>

import { HeartIcon } from '@heroicons/vue/24/solid/index.js'

defineProps({
  review: String,
  isInCooking: Boolean
})
</script>

<template>
  <div class="block px-40 pt-20 pb-10">
    <div class="flex flex-col">
      <div class="flex flex-row gap-20 items-center justify-between">
        <h3 v-if="!isInCooking" class="w-11/12 text-[24px]">{{review}}</h3>
        <h3 v-else class="w-11/12 text-[20px]">{{review}}</h3>
        <HeartIcon class=" w-10 h-10"/>
      </div>
      <div class="h-0.5 bg-black mt-8 w-full"></div>
    </div>
  </div>
</template>

<style scoped>

</style>