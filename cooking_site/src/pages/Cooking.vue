<script setup>

import CookingPreparations from '@/components/CookingPreparations.vue'
import CookingRequirements from '@/components/CookingRequirements.vue'
import ReviewItem from "@/components/ReviewItem.vue";

const reviews = [
  'Рецепт просто супер! Получилось очень вкусно, вся семья в восторге. Спасибо!',
  'Готовила впервые, всё получилось идеально! Рецепт очень простой и понятный, даже для новичка. Вкус просто восхитительный!',
  'Этот рецепт вишневого пирога стал моим любимым! Готовлю его уже несколько раз и каждый раз получается превосходно. Спасибо за такой чудесный рецепт!',
  'Отличный рецепт! И вкусно, и полезно. Идеально для тех, кто следит за своим здоровьем. Обязательно буду готовить еще!',
  'Очень рекомендую рецепт куриного бульона! Простой в приготовлении, из доступных ингредиентов, а результат превосходит все ожидания!',
];
</script>

<template>
  <CookingPreparations/>
  <CookingRequirements/>
  <div class="ml-24 mt-16 flex flex-row gap-5 items-center">
    <h2 class="text-[24px] font-medium">Понравился рецепт?</h2>
    <button class="text-[20px] w-fit px-10 py-4 text-center border-black border rounded-2xl shadow-2xl bg-gray-300 text-black">
      Оставь свой отзыв:)
    </button>
  </div>
  <ReviewItem
      v-for="(text, index) in reviews"
      :key="index"
      :review="text"
      :is-in-cooking="true"
      :class="index === reviews.length - 1 ? 'mb-12' : ''"
  />
</template>

<style scoped>

</style>