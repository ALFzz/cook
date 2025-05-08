<script setup>

import CookingPreparations from '@/components/CookingPreparations.vue'
import CookingRequirements from '@/components/CookingRequirements.vue'
import ReviewItem from "@/components/ReviewItem.vue";
import ReviewModal from "@/components/ReviewModal.vue";
import {ref} from "vue";

const reviews = [
  'Рецепт просто супер! Получилось очень вкусно, вся семья в восторге. Спасибо!',
  'Готовила впервые, всё получилось идеально! Рецепт очень простой и понятный, даже для новичка. Вкус просто восхитительный!',
  'Этот рецепт вишневого пирога стал моим любимым! Готовлю его уже несколько раз и каждый раз получается превосходно. Спасибо за такой чудесный рецепт!',
  'Отличный рецепт! И вкусно, и полезно. Идеально для тех, кто следит за своим здоровьем. Обязательно буду готовить еще!',
  'Очень рекомендую рецепт куриного бульона! Простой в приготовлении, из доступных ингредиентов, а результат превосходит все ожидания!',
];

const showReviewModal  = ref(false)
</script>

<template>
  <CookingPreparations/>
  <CookingRequirements/>
  <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mt-12 sm:mt-16 px-6 sm:px-12 lg:px-24">
    <h2 class="text-[24px] sm:text-[26px] lg:text-[28px]  font-medium">
      Понравился рецепт?
    </h2>
    <button
        @click="showReviewModal = true"
        class="text-[18px] sm:text-[20px] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-center border border-black rounded-2xl shadow-2xl transition duration-150 hover:bg-gray-300 text-black w-full sm:w-fit">
      Оставь свой отзыв :)
    </button>
  </div>

  <ReviewItem
      v-for="(text, index) in reviews"
      :key="index"
      :review="text"
      :is-in-cooking="true"
      :class="index === reviews.length - 1 ? 'mb-12' : ''"
  />

  <ReviewModal :is-open="showReviewModal"  @closeModal="showReviewModal = false"  />
</template>

<style scoped>

</style>