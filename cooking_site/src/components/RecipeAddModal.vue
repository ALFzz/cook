<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from "vue-router";


defineProps({ isOpen: Boolean })

const emit = defineEmits(['closeModal'])




</script>

<template>
  <div class="flex justify-center">

    <transition name="fade">
      <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-50"
          @click.self="$emit('closeModal')"
      >
        <div class="bg-[#577165] flex flex-col  w-[640px] h-[240px]  text-white p-6 rounded-lg w-96 shadow-lg">
          <h3  class="text-xl text-center text-[30px] mb-5">Уточните, какой рецепт вы хотите добавить:</h3>

          <div class="grid grid-cols-2 place-items-center text-center text-2xl grid-rows-2 gap-5 px-16">
            <h2>первое</h2>
            <h2>закуски</h2>
            <h2>второе</h2>
            <h2>десерты</h2>
          </div>



          <div class="text-center text-black  mt-7">
            <button
                @click="signIn"
                class="px-10 py-1 border-black border  text-[20px] bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              добавить рецепт
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