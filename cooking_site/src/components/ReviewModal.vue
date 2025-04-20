<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="flex justify-center mt-10">
    <button
      @click="isOpen = true"
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Открыть модалку
    </button>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-50"
        @click.self="isOpen = false"
      >
        <div class="bg-[#577165] flex flex-col items-center   w-[640px] h-[430px]  text-white p-3 rounded-lg w-96 shadow-lg">
          <div class="bg-white w-full h-full flex flex-col items-center justify-center rounded-lg">
            <textarea class="bg-gray-300 text-black w-11/12 h-64 rounded-lg p-2  mt-5 resize-none"></textarea>
            <button
              @click="isOpen = false"
              class=" px-12 py-3   text-center text-[32px]  border-black border  rounded-3xl shadow-2xl bg-white text-black mt-7"
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>