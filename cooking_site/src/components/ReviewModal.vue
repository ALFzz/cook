<script setup>
import {nextTick, ref} from 'vue'
import {getCurrentDishById} from "@/dishes.js";
import {useRoute} from "vue-router";

const props = defineProps({
  isOpen: Boolean,
  isRecipeReview: Boolean,
  generalReviews: Array
})

const emit = defineEmits(['closeModal', 'addGeneralReview'],)

const review = ref('')

// async function submitReview() {
//   if (props.currentDish.id !== undefined && review.value !== '') {
//     props.currentDish.reviews.push(review.value)
//     emit('closeModal')
//     await nextTick()
//   }
//   else {
//     props.generalReviews.push(review.value)
//     emit('closeModal')
//     await nextTick()
//   }
// }

const dishId = (Number(useRoute().params.id))




async function submitReview() {
  if (props.isRecipeReview && review.value !== '') {
    const currentDish = getCurrentDishById(dishId)
    currentDish.reviews.push(review.value)
  }
  else {
    emit('addGeneralReview', review.value)
  }

  review.value = ''
  emit('closeModal')
  await nextTick()
}

</script>

<template>
  <div class="flex justify-center">
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="$emit('closeModal')"
      >
        <div
          class="bg-[#577165] flex flex-col items-center w-10/12 h-[430px] text-white p-3 rounded-lg shadow-lg"
        >
          <div class="w-full h-full flex flex-col items-center justify-center rounded-lg">
            <textarea
                v-model="review"
              class="bg-white text-black w-11/12 h-64 rounded-lg pl-5 pt-5 mt-5 resize-none"
            ></textarea>
            <button
              @click="submitReview"
              class="px-12 py-3 transition duration-200 hover:bg-gray-300 text-center text-[32px] border-black border rounded-3xl shadow-2xl bg-white text-black mt-7"
            >
              оставить отзыв
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
