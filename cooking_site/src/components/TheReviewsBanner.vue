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
          class="font-black cursor-pointer transition duration-300 hover:text-[#EEEA88] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[28px] xl:text-[38px]"
        >
          Оставьте свой отзыв!
        </h1>
        <h1
          class="font-semibold text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[32px]"
        >
          Вы помогаете нам стать лучше:)
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
