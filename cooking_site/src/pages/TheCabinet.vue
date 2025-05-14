<script setup>
import TheCabinetForm from '@/components/TheCabinetForm.vue'
import TheCabinetAvatar from '@/components/TheCabinetAvatar.vue'
</script>

<template>
  <div
      class="flex flex-col lg:flex-row w-full mt-24 mb-16 px-6 sm:px-12 lg:px-24 gap-12 lg:gap-20 "
  >

    <TheCabinetAvatar />


    <TheCabinetForm class="w-full" />
  </div>

</template>
