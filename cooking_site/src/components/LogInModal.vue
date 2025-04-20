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
        <div class="bg-[#577165] flex flex-col  w-[640px] h-[540px]  text-white p-6 rounded-lg w-96 shadow-lg">
          <h2 class="text-xl text-center text-[30px] mb-10">Вход в личный кабинет</h2>

          <div class="flex flex-col px-5 ">
            <p class="text-start">имя пользователя</p>
            <input type="text" class="bg-[#456356] h-12  rounded-2xl">
          </div>

          <div class="flex flex-col px-5 pt-5">
            <p class="text-start">электронная почта</p>
            <input type="text" class="bg-[#456356] h-12  rounded-2xl">
          </div>

          <div class="flex flex-col px-5 pt-5">
            <p class="text-start">пароль</p>
            <input type="text" class="bg-[#456356] h-12  rounded-2xl">
          </div>

          <div class="text-center">
            <button
              @click="isOpen = false"
              class="px-16 py-4 mt-12 text-[28px] bg-[#374d43] rounded hover:bg-gray-400 transition"
            >
              войти
            </button>
            <div class="flex flex-row text-center pt-2 items-center justify-center">
              <h4 class="text-[16px]">у вас нет аккаунта?</h4>
              <h4 class="text-[16px] text-[#CDFFE9] pl-1">Зарегистрироваться</h4>

            </div>
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