<script setup>
import { HeartIcon } from '@heroicons/vue/24/solid/index.js'
import { ref } from 'vue'
import {useRoute, useRouter} from "vue-router";

defineProps({
  img: String,
  recipe: String,
  time: String,
  id: Number
})

const isLiked = ref(false)

function toggleLike() {
  isLiked.value = !isLiked.value
}

const router = useRoute()
</script>

<template>
  <div>
    <h2
      class="text-center text-[24px] max-sm:text-[14px] overflow-hidden whitespace-nowrap text-ellipsis"
    >
      {{ recipe }}
    </h2>
    <img
      :src="`/src/assets/img/${img}`"
      alt="pumpkin_soup"
      class="cursor-pointer"
      @click.prevent="$router.push(router.fullPath + '/' + id)"
    />
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-[24px] max-sm:text-[14px]">Время приготовления: {{ time }}</h2>
      <HeartIcon
        @click="toggleLike"
        :class="[
          'cursor-pointer w-10 h-10 transition duration-200',
          isLiked ? 'text-red-500' : 'text-red-300',
        ]"
      />
    </div>
  </div>
</template>

<style scoped></style>
