<script setup>

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import AuthorizationModal from '@/components/AuthorizationModal.vue'


import { ref } from 'vue'

const showModal  = ref(false)


</script>

<!--flex-1 элемент увеличиваться и уменьшаться по мере необходимости, игнорируя его начальный размер-->

<template>
  <TheHeader @toggleModal="showModal = true"/>
  <RouterView/>
  <AuthorizationModal :is-open="showModal" @closeModal="showModal = false"/>
  <TheFooter/>

</template>



