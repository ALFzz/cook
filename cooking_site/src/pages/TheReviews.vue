<script setup>
import TheReviewsBanner from '@/components/TheReviewsBanner.vue'
import ReviewItem from '@/components/ReviewItem.vue'
import ReviewModal from '@/components/ReviewModal.vue'
import { ref } from 'vue'

const reviews = [
  'Рецепт просто супер! Получилось очень вкусно, вся семья в восторге. Спасибо!',
  'Готовила впервые, всё получилось идеально! Рецепт очень простой и понятный, даже для новичка. Вкус просто восхитительный!',
  'Этот рецепт вишневого пирога стал моим любимым! Готовлю его уже несколько раз и каждый раз получается превосходно. Спасибо за такой чудесный рецепт!',
  'Отличный рецепт! И вкусно, и полезно. Идеально для тех, кто следит за своим здоровьем. Обязательно буду готовить еще!',
  'Очень рекомендую рецепт куриного бульона! Простой в приготовлении, из доступных ингредиентов, а результат превосходит все ожидания!',
]

const showReviewModal = ref(false)
</script>

<template>
  <TheReviewsBanner @toggleModal="showReviewModal = true" />
  <ReviewItem
    v-for="(text, index) in reviews"
    :key="index"
    :review="text"
    :class="index === reviews.length - 1 ? 'mb-12' : ''"
  />

  <ReviewModal :is-open="showReviewModal" @closeModal="showReviewModal = false" />
</template>

<style scoped></style>
