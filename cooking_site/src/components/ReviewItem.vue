<script setup>

import { HeartIcon } from '@heroicons/vue/24/solid/index.js'

defineProps({
  review: String,
  isInCooking: Boolean
})
</script>

<template>
  <div class="block px-6 sm:px-12 md:px-24 lg:px-40 pt-10 sm:pt-16 pb-6 sm:pb-10">
    <div class="flex flex-col">
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-10 lg:gap-20 items-start sm:items-center justify-between">
        <h3
            v-if="!isInCooking"
            class="w-full sm:w-11/12 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
        >
          {{ review }}
        </h3>
        <h3
            v-else
            class="w-full sm:w-11/12 text-[16px] sm:text-[18px] md:text-[20px]"
        >
          {{ review }}
        </h3>

        <HeartIcon class="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <div class="h-0.5 bg-black mt-6 sm:mt-8 w-full"></div>
    </div>
  </div>

</template>

<style scoped>

</style>