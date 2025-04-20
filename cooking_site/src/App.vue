<script setup>

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMain from '@/pages/TheMain.vue'
import TheReviews from '@/pages/TheReviews.vue'
import TheRecipes from '@/pages/TheCategories.vue'
import { HeartIcon } from '@heroicons/vue/24/solid/index.js'
import Recipes from '@/pages/Recipes.vue'
import TheCategories from '@/pages/TheCategories.vue'
import TheCabinetForm from '@/components/TheCabinetForm.vue'
import TheCabinetAvatar from '@/components/TheCabinetAvatar.vue'
import TheCabinet from '@/pages/TheCabinet.vue'
</script>

<!--flex-1 элемент увеличиваться и уменьшаться по мере необходимости, игнорируя его начальный размер-->

<template>
  <TheHeader/>
<!--  <TheReviews/>-->
<!--  <TheMain/>-->
<!--  <Recipes/>-->
<!--  <TheCategories/>-->
  <TheCabinet/>






  <TheFooter/>

</template>

