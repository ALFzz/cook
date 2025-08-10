<script setup>
const emit = defineEmits(['toggleModal'])
</script>

<template>
  <div class="relative">
    <img src="/src/assets/img/bakery.png" class="w-full" alt="bakery" />

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full px-4 text-center"
    >
      <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <h1
          @click="$emit('toggleModal')"
          class="font-black cursor-pointer transition duration-300 hover:text-[#EEEA88] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[30px] xl:text-[36px] 2xl:text-[46px]"
        >
          Оставьте свой отзыв!
        </h1>
        <h1
          class="font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[30px] xl:text-[36px] 2xl:text-[46px]"
        >
          Вы помогаете нам стать лучше:)
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
