<script setup>
defineProps({
  img: String,
  label: String,
})
</script>

<template>
  <div
    class="relative transition duration-300 hover:brightness-125 cursor-pointer active:scale-95 active:duration-150"
  >
    <img :src="img" :alt="label" class="w-full max-sm:h-[90px]" />
    <div
      class="absolute flex flex-row items-center justify-center w-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <h1 class="font-semibold text-[100px] max-sm:text-[45px] max-[350px]:text-[30px]">
        {{ label }}
      </h1>
    </div>
  </div>
</template>

<style scoped></style>
