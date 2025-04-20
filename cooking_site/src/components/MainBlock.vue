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
  <div v-if="!reversed" class="flex flex-row  ">
    <img :src="img" :alt="alt" class="w-[945px] h-[486px]" >
    <div class="flex flex-col justify-center">
      <h1 class="ml-10 text-[48px]">{{header}}</h1>
      <h3 class="ml-11 text-[20px] pt-5 pr-20">{{description}}</h3>
      <button class="text=[32px] w-fit px-3 py-3 text-center text-[32px]  border-black border  rounded-3xl shadow-2xl bg-white text-black ml-11 mt-10">
        рецепты
      </button>
    </div>
  </div>

  <div v-else class="flex flex-row ">
    <div class="flex flex-col justify-center">
      <h1 class="ml-10 text-[48px]">{{header}}</h1>
      <h3 class="ml-11 text-[20px] pt-5 pr-20">{{description}}</h3>
      <button class=" w-fit px-3 py-3 text-center text-[32px]  border-black border  rounded-3xl shadow-2xl bg-white text-black ml-12 mt-10">
        рецепты
      </button>
    </div>
    <img :src="img" :alt="alt" class="w-[960px] h-[486px]">
  </div>


</template>
