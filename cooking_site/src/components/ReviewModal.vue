<script setup>
import { ref } from 'vue'

defineProps({ isOpen: Boolean })

const emit = defineEmits(['closeModal'])
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
              class="bg-white text-black w-11/12 h-64 rounded-lg pl-5 pt-5 mt-5 resize-none"
            ></textarea>
            <button
              @click="isOpen = false"
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
