<script setup>
import CookingPreparations from '@/components/CookingPreparations.vue'
import CookingRequirements from '@/components/CookingRequirements.vue'
import ReviewItem from '@/components/ReviewItem.vue'
import ReviewModal from '@/components/ReviewModal.vue'
import { ref } from 'vue'
import {useRoute} from "vue-router";
import {getCurrentRecipeById} from "@/recipes.js";



const showReviewModal = ref(false)


const currentRecipe = getCurrentRecipeById(Number(useRoute().params.id))



</script>

<template>
  <CookingPreparations :recipe="currentRecipe" />
  <CookingRequirements :recipe="currentRecipe"/>
  <div
    class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mt-12 sm:mt-16 px-6 sm:px-12 lg:px-24"
  >
    <h2 class="text-[24px] sm:text-[26px] lg:text-[28px] font-medium">Понравился рецепт?</h2>
    <button
      @click="showReviewModal = true"
      class="text-[18px] sm:text-[20px] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-center border border-black rounded-2xl shadow-2xl transition duration-150 hover:bg-gray-300 text-black w-full sm:w-fit"
    >
      Оставь свой отзыв :)
    </button>
  </div>

  <ReviewItem
    v-for="(text, index) in currentRecipe.reviews"
    :key="index"
    :review="text"
    :is-in-cooking="true"
    :class="index === currentRecipe.reviews.length - 1 ? 'mb-12' : ''"
  />

  <ReviewModal :is-open="showReviewModal" :is-recipe-review="true" @closeModal="showReviewModal = false" />
</template>

<style scoped></style>
