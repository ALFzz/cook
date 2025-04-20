<script setup>

import RecipesItem from '@/components/RecipesItem.vue'
</script>

<template>
  <div class="pt-16">
    <h1 class="text-[96px] text-center">Первые блюда</h1>
    <h3 class="text-[24px] px-36 pt-8">Первые блюда занимают особое место в традиционной кухне многих стран. Эти блюда играют важную роль в питании, они обычно подаются в начале трапезы и служат как разогревающая и насыщенная основа для основного приема пищи. Включают в себя супы, бульоны, окрошку, пюре и многие другие блюда, которые часто готовятся на основе жидкой основы (бульон, вода, молоко, овощной отвар). Они могут быть как легкими, так и сытными, в зависимости от состава и метода приготовления.</h3>
  </div>

  <div class="grid grid-cols-2 gap-10 p-24 pb-4">
    <RecipesItem/>
    <RecipesItem/>
    <RecipesItem/>
    <RecipesItem/>
    <RecipesItem/>
  </div>
</template>

<style scoped>

</style>