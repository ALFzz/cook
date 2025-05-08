<script setup>

import TheCategoriesBanner from '@/components/TheCategoriesBanner.vue'
import { useRoute } from 'vue-router'
import RecipeAddModal from "@/components/RecipeAddModal.vue";
import {ref} from "vue";

const banners = [
  { img: '/src/assets/img/first.png', label: 'первое' },
  { img: '/src/assets/img/second.png', label: 'второе' },
  { img: '/src/assets/img/snacks.png', label: 'закуски' },
  { img: '/src/assets/img/deserts.png', label: 'десерты' },
];

const showRecipeAddModal  = ref(false)

</script>

<template>
  <h2 class="p-16 text-[20px] max-sm:p-8 max-sm:text-[15px]">Кулинария — это искусство и наука приготовления пищи, которая охватывает широкий спектр техник, методов и рецептов для создания вкусных и питательных блюд. Включая в себя все этапы от выбора ингредиентов до сервировки, кулинария сочетает в себе творческий подход, технику и знание химических процессов, происходящих в пище во время приготовления. Это многогранное искусство, которое сочетает в себе творчество, науку и традиции. Она развивается в ответ на изменения в образе жизни, культуре и технологиях, и находит новые способы адаптации к потребностям современного общества. Независимо от того, идет ли речь о традиционных блюдах, инновационных кулинарных техниках или здоровом питании, кулинария остается важной частью жизни людей по всему миру.</h2>
  <h1 class="text-center text-[28px] mb-10 max-sm:text-[20px]">Пожалуйста, уточните какой рецепт вам нужен</h1>
  <TheCategoriesBanner
    v-for="(item, index) in banners"
    :key="index"
    :img="item.img"
    :label="item.label"
    @click.prevent="$router.push('categories/' + item.label)"
  />

  <div class="mt-8 mb-10 flex justify-center">
    <button
        @click="showRecipeAddModal = true"
        class="text-[28px] transition duration-150 hover:bg-gray-300  px-20 max-sm:px-3 py-3 text-center border-black border rounded-2xl shadow-2xl bg-white  text-black"
    >
      добавить рецепт
    </button>
  </div>

  <RecipeAddModal :is-open="showRecipeAddModal" @closeModal="showRecipeAddModal = false"/>
</template>

<style scoped>

</style>