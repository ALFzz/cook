<script setup>
defineProps({
  header: String,
  description: String,
  pad: Number
})
</script>

<template>
  <div class="flex w-1/3">
    <div class="flex bg-white rounded-full w-5 h-48"/>
    <div class="ml-3">
      <h3 class="text-[19px] font-medium ">{{header}}</h3>
      <h4 class="text-[16px]" :style="{ marginTop: pad + 'px' }">{{description}}.</h4>
    </div>
  </div>
</template>


