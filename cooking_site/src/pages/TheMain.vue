<script setup>

import MainBlock from '@/components/MainBlock.vue'
import TheLearnMore from '@/components/TheLearnMore.vue'
import TheDelicious from '@/components/TheDelicious.vue'
</script>

<template>
  <TheDelicious/>
  <TheLearnMore/>
  <MainBlock img="/src/assets/img/pancakes.png"
             alt="pancakes"
             :reversed="false"
             header="Кулинарное планирование"
             description="Используйте наш кулинарный опыт, чтобы создать идеальное меню для вашего мероприятия. Мы анализируем ваши предпочтения, согласуем рецепты с вашими пожеланиями и обеспечиваем незабываемые кулинарные впечатления."
  />

  <MainBlock img="/src/assets/img/beans.jpg"
             alt="pancakes"
             :reversed="true"
             header="Творческие рецепты"
             description="Оставайтесь впереди с нашим креативным подходом к кулинарии. Мы предоставляем уникальные рецепты, которые решают ваши индивидуальные задачи, позволяя вам наслаждаться новыми кулинарными открытиями."
  />

  <MainBlock img="/src/assets/img/pizza.png"
             alt="pancakes"
             :reversed="false"
             header="Оптимизация процессов приготовления"
             description="Раскройте весь потенциал вашей кухни с помощью наших услуг по оптимизации. От упрощения процессов до повышения эффективности, мы работаем над тем, чтобы максимизировать ваши кулинарные достижения и обеспечить долговременный успех."
  />

</template>
