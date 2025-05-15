<script setup>


defineProps({
  recipe: Object
})

</script>

<template>
  <div class="flex flex-col ml-6 sm:ml-12 lg:ml-24 mt-14 pr-6 sm:pr-8 lg:pr-20">
    <h2 class="text-[24px] sm:text-[26px] lg:text-[28px]">Приготовление</h2>

    <ul
        class="list-decimal  pl-20 text-[18px] sm:text-[20px] lg:text-[22px] mt-7 mb-16"
    >
      <li
          v-for="(step, index) in recipe.steps"
          :key="index">
        {{step}}
      </li>
    </ul>

    <div>
      <h2 class="text-[24px] sm:text-[26px] lg:text-[28px]">Подача</h2>
      <h3
          class="ml-6 sm:ml-8 lg:ml-14 mt-5 mb-12 text-[18px] sm:text-[20px] lg:text-[22px] leading-relaxed"
      >
        {{recipe.serving}}
      </h3>
    </div>
  </div>
</template>

