<script setup>
import {getAuth, signOut} from "firebase/auth";
import {useUserStore} from "@/stores/user.js";
import {useRouter} from "vue-router";

const userStore = useUserStore();
const router = useRouter()

const signOutMethod = async () => {
  await signOut(getAuth())
  router.push('/')

}
</script>

<template>
  <div class="text-center">
    <div class="bg-gray-300 w-[320px] h-80 rounded-full "></div>
    <h2 class="mt-5 text-[24px] text-red-600 font-medium" @click="signOutMethod">Выйти</h2>
  </div>
</template>
