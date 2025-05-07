<script setup>
defineProps({
  header: String,
  description: String,
})
</script>

<template>
  <div class="flex w-1/3">
    <div class="bg-white rounded-full w-5"></div>
    <div class="ml-3 flex flex-col justify-between">
      <h3 class="text-[19px] font-medium">{{header}}</h3>
      <h4 class="text-[17px] pt-5" >{{description}}.</h4>
    </div>
  </div>
</template>


