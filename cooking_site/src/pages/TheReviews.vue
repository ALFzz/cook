<script setup>

import TheReviewsBanner from '@/components/TheReviewsBanner.vue'
import ReviewItem from '@/components/ReviewItem.vue'
</script>

<template>
  <TheReviewsBanner/>
  <ReviewItem review="Рецепт просто супер! Получилось очень вкусно, вся семья в восторге. Спасибо!"/>
  <ReviewItem review="Готовила впервые, всё получилось идеально! Рецепт очень простой и понятный, даже для новичка. Вкус просто восхитительный!"/>
  <ReviewItem review="Этот рецепт вишневого пирога стал моим любимым! Готовлю его уже несколько раз и каждый раз получается превосходно. Спасибо за такой чудесный рецепт!"/>
  <ReviewItem review="Отличный рецепт! И вкусно, и полезно. Идеально для тех, кто следит за своим здоровьем. Обязательно буду готовить еще!"/>
  <ReviewItem class="mb-12" review="Очень рекомендую рецепт куриного бульона! Простой в приготовлении, из доступных ингредиентов, а результат превосходит все ожидания!"/>
</template>

<style scoped>

</style>