<script setup>

</script>

<template>
  <div class="flex flex-col w-full  ml-20">
    <div>
      <h3 class="text-[24px]">ФИО:</h3>
      <div class="bg-gray-300 w-1/2 h-16 mt-5 rounded-2xl"></div>
    </div>

    <div class="mt-5">
      <h3 class="text-[24px]">Дата рождения:</h3>
      <div class="bg-gray-300 w-1/2 h-16 mt-5 rounded-2xl"></div>
    </div>

    <div class="mt-20">
      <h3 class="text-[24px]">Избранные рецепты:</h3>
      <div class="  bg-gray-300 w-7/12 h-80 mt-5 text-center  rounded-2xl">
        <h3 class="text-[24px] pt-8">Вы еще не добавили рецепты:(</h3>
        <button class=" px-16 py-3  text-center text-[32px]  border-black border  rounded-3xl shadow-2xl bg-white text-black mt-7"
                @click.prevent="$router.push({name: 'Recipes'})">
          к рецептам
        </button>
      </div>
    </div>

  </div>
</template>
