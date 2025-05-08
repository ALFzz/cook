<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import AuthorizationModal from '@/components/AuthorizationModal.vue'

import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '@/stores/user.js'
import RecipeAddModal from '@/components/RecipeAddModal.vue'

const showAuthModal = ref(false)

const userStore = useUserStore()

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      console.log(user)
      userStore.userId = user.uid
    } else {
      userStore.userId = ''
    }
  })
})
</script>

<!--flex-1 элемент увеличиваться и уменьшаться по мере необходимости, игнорируя его начальный размер-->

<template>
  <TheHeader @toggleModal="showAuthModal = true" />
  <RouterView />
  <AuthorizationModal :is-open="showAuthModal" @closeModal="showAuthModal = false" />
  <TheFooter />
</template>
