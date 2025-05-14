<script setup>

defineProps({
  dish: Object
})


</script>

<template>
  <div class="flex flex-col lg:flex-row w-full mt-14 max-lg:mt-0">
    <!-- Картинка, занимающая 50% ширины на больших экранах и всю ширину на мобильных устройствах -->
    <div class="w-full lg:w-1/2 ml-24 max-lg:ml-0">
      <img
        class="w-full h-[500px] object-cover"
        :src="`/src/assets/img/${dish.img}`"
        :alt="dish.label"
      />
    </div>

    <!-- Блок с текстом, занимающий оставшуюся половину экрана на больших экранах и всю ширину на мобильных -->
    <div
      class="flex flex-col w-full lg:w-1/2 text-base sm:text-sm md:text-lg lg:text-xl pl-6 sm:pl-8 lg:pl-12 pr-6 sm:pr-8 lg:pr-12 mt-6 lg:mt-0"
    >
      <h3 class="mb-5 text-justify leading-relaxed">
        {{dish.description}}
      </h3>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-20">
        <div>
          <h2 class="text-lg sm:text-xl lg:text-2xl">Ингредиенты:</h2>
          <ul class="list-disc ml-6 sm:ml-8 mb-5 mt-7">
            <li
                v-for="(ingredient, index) in dish.ingredients"
                :key="index">
              {{ingredient}}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-lg sm:text-xl lg:text-2xl">Инвентарь:</h2>
          <ul class="list-disc ml-6 sm:ml-8 mt-7">
            <li
                v-for="(product, index) in dish.equipment"
                :key="index">
              {{product}}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
