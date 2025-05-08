<script setup>
import LearnBlock from '@/components/LearnBlock.vue'
</script>

<template>
  <div class="bg-[#577165] flex flex-col text-white pt-12 pb-28">
    <div class="flex flex-col items-center justify-center text-center px-4">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Узнайте больше о нас</h1>
      <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
        Познакомьтесь с нашей историей, миссией и преданностью вашему кулинарному успеху.
      </h3>
    </div>

    <div class="flex flex-col lg:flex-row mt-24 items-center justify-center gap-8 lg:gap-44 px-4">
      <LearnBlock
        header="Наша история: Ваше вдохновение, наше сотрудничество"
        description="Присоединяйтесь к вкусным моментам, где мы становимся вашими надежными партнерами в создании кулинарных шедевров. Наша история — это преданность качеству и искусству, преодоление кулинарных вызовов с помощью изобретательных рецептов, открывающих путь к незабываемым впечатлениям"
      />
      <LearnBlock
        header="Наша миссия: Формирование вашего кулинарного успеха с креативностью"
        description="В центре вкусных моментов находится команда, преданная формированию вашего успеха. Мы обещаем предоставить инновационные рецепты, тщательно адаптированные к вашим вкусам. Доверьтесь нам, чтобы вдохновить ваши кулинарные достижения и открыть для вас мир бесконечных возможностей."
      />
    </div>
  </div>
</template>
