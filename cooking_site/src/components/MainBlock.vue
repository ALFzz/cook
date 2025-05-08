<script setup>
defineProps({
  img: String,
  reversed: Boolean,
  alt: String,
  header: String,
  description: String
})
</script>

<template>
  <!-- НЕ перевёрнутый блок -->
  <div v-if="!reversed" class="flex flex-row w-full">
    <img :src="img" :alt="alt" class="w-1/2 object-cover" />
    <div class="flex flex-col justify-center w-1/2 p-2 sm:p-4">
      <h1 class="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-[40px] ml-2 sm:ml-4 md:ml-10 leading-tight">
        {{ header }}
      </h1>
      <h3 class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[20px] pt-2 sm:pt-4 pr-2 sm:pr-4 md:pr-20 ml-2 sm:ml-4 md:ml-11 leading-snug">
        {{ description }}
      </h3>
      <button
          class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[32px] transition duration-150 hover:bg-gray-300 w-fit px-3 py-2 sm:px-4 sm:py-3 text-center border-black border rounded-3xl shadow-2xl bg-white text-black mt-4 sm:mt-8 ml-2 sm:ml-4 md:ml-11"
          @click.prevent="$router.push({ name: 'Categories' })"
      >
        рецепты
      </button>
    </div>
  </div>

  <!-- ПЕРЕВЁРНУТЫЙ блок -->
  <div v-else class="flex flex-row w-full">
    <div class="flex flex-col justify-center w-1/2 p-2 sm:p-4">
      <h1 class="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-[40px] ml-2 sm:ml-4 md:ml-10 leading-tight">
        {{ header }}
      </h1>
      <h3 class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[20px] pt-2 sm:pt-4 pr-2 sm:pr-4 md:pr-20 ml-2 sm:ml-4 md:ml-11 leading-snug">
        {{ description }}
      </h3>
      <button
          class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-[32px] transition duration-150 hover:bg-gray-300 w-fit px-3 py-2 sm:px-4 sm:py-3 text-center border-black border rounded-3xl shadow-2xl bg-white text-black mt-4 sm:mt-8 ml-2 sm:ml-4 md:ml-12"
          @click.prevent="$router.push({ name: 'Categories' })"
      >
        рецепты
      </button>
    </div>
    <img :src="img" :alt="alt" class="w-1/2 object-cover" />
  </div>




</template>
