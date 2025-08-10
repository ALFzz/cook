<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

defineProps({ isOpen: Boolean })
const emit = defineEmits(['closeModal'])
const router = useRouter()

const isRegistration = ref(false)

const email = ref()
const password = ref()

const signUp = async () => {
  try {
    await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    emit('closeModal')
    router.push('/cabinet')
  } catch (e) {
    alert(e.message)
  }
}

const signIn = async () => {
  try {
    await signInWithEmailAndPassword(getAuth(), email.value, password.value)
    emit('closeModal')
    router.push('/cabinet')
  } catch (e) {
    alert(e.message)
  }
}
</script>

<template>
  <div class="flex justify-center">
    <transition name="fade">
      <div
        v-if="isOpen && !isRegistration"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="$emit('closeModal')"
      >
        <div
          class="bg-[#577165] flex flex-col w-[640px] h-[440px] text-white p-6 rounded-lg w-96 shadow-lg"
        >
          <h2 class="text-xl text-center text-[30px] mb-10">Вход в личный кабинет</h2>

          <div class="flex flex-col px-5">
            <p class="text-start">электронная почта</p>
            <input type="email" v-model="email" class="bg-[#456356] pl-2 h-12 rounded-2xl" />
          </div>

          <div class="flex flex-col px-5 pt-5">
            <p class="text-start">пароль</p>
            <input type="password" v-model="password" class="bg-[#456356] pl-2 h-12 rounded-2xl" />
          </div>

          <div class="text-center">
            <button
              @click="signIn"
              class="px-16 py-4 mt-10 text-[28px] bg-[#374d43] rounded hover:bg-gray-400 transition"
            >
              войти
            </button>
            <div class="flex flex-row text-center pt-2 items-center justify-center">
              <h4 class="text-[16px]">у вас нет аккаунта?</h4>
              <h4
                class="text-[16px] text-[#CDFFE9] pl-1 cursor-pointer transition duration-200 hover:text-[#64E5AD]"
                @click.prevent="isRegistration = true"
              >
                Зарегистрироваться
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="isOpen && isRegistration"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="$emit('closeModal')"
      >
        <div
          class="bg-[#577165] flex flex-col w-[640px] h-[440px] text-white p-6 rounded-lg w-96 shadow-lg"
        >
          <h2 class="text-xl text-center text-[30px] mb-10">Регистрация</h2>

          <div class="flex flex-col px-5">
            <p class="text-start">электронная почта</p>
            <input type="email" v-model="email" class="bg-[#456356] h-12 pl-2 rounded-2xl" />
          </div>

          <div class="flex flex-col px-5 pt-5">
            <p class="text-start">пароль</p>
            <input type="password" v-model="password" class="bg-[#456356] h-12 pl-2 rounded-2xl" />
          </div>

          <!--          <div class="flex flex-col px-5 pt-5">-->
          <!--            <p class="text-start">повторите пароль</p>-->
          <!--            <input type="text" class="bg-[#456356] h-12  rounded-2xl">-->
          <!--          </div>-->

          <div class="text-center">
            <button
              @click="signUp"
              class="px-16 py-4 mt-10 text-[28px] bg-[#374d43] rounded hover:bg-gray-400 transition"
            >
              Зарегистрироваться
            </button>
            <div class="flex flex-row text-center pt-2 items-center justify-center">
              <h4 class="text-[16px]">у вас уже есть аккаут?</h4>
              <h4
                class="text-[16px] text-[#CDFFE9] cursor-pointer pl-1 transition duration-200 hover:text-[#64E5AD]"
                @click.prevent="isRegistration = false"
              >
                Войти
              </h4>
            </div>
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
