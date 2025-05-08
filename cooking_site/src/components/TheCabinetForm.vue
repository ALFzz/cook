<script setup>

</script>

<template>
  <div class="flex flex-col w-full max-w-4xl text-[18px] sm:text-[20px]">
    <!-- ФИО -->
    <div class="mb-6">
      <h3 class="text-xl sm:text-2xl mb-3">ФИО:</h3>
      <div class="bg-gray-300 w-full h-14 sm:h-16 rounded-2xl"></div>
    </div>

    <!-- Дата рождения -->
    <div class="mb-6">
      <h3 class="text-xl sm:text-2xl mb-3">Дата рождения:</h3>
      <div class="bg-gray-300 w-full h-14 sm:h-16 rounded-2xl"></div>
    </div>

    <!-- Избранные рецепты -->
    <div class="mt-10">
      <h3 class="text-xl sm:text-2xl mb-4">Избранные рецепты:</h3>
      <div class="bg-gray-300 w-full h-72 sm:h-80 rounded-2xl text-center flex flex-col items-center justify-center p-4">
        <h3 class="text-lg sm:text-xl">Вы еще не добавили рецепты:(</h3>
        <button
            class="mt-6 px-8 sm:px-12 py-3 text-base sm:text-xl border border-black rounded-3xl shadow-xl bg-white text-black hover:bg-gray-200 transition"
            @click.prevent="$router.push({ name: 'Categories' })">
          К рецептам
        </button>
      </div>
    </div>
  </div>

</template>
