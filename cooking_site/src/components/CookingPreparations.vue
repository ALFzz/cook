<script setup></script>

<template>
  <div class="flex flex-col lg:flex-row w-full mt-14 max-lg:mt-0">
    <!-- Картинка, занимающая 50% ширины на больших экранах и всю ширину на мобильных устройствах -->
    <div class="w-full lg:w-1/2 ml-24 max-lg:ml-0">
      <img
        class="w-full h-[500px] object-cover"
        src="/src/assets/img/cake_recipe.png"
        alt="cake_recipe"
      />
    </div>

    <!-- Блок с текстом, занимающий оставшуюся половину экрана на больших экранах и всю ширину на мобильных -->
    <div
      class="flex flex-col w-full lg:w-1/2 text-base sm:text-sm md:text-lg lg:text-xl pl-6 sm:pl-8 lg:pl-12 pr-6 sm:pr-8 lg:pr-12 mt-6 lg:mt-0"
    >
      <h3 class="mb-5 text-justify leading-relaxed">
        Чизкейк — это десерт, основой которого является сырная масса, чаще всего приготовленная из
        сливочного сыра, творога или рикотты, с добавлением сахара, яиц и других ингредиентов.
        Обычно он располагается на песочной или бисквитной основе и может быть запечённым или без
        выпечки.
      </h3>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-20">
        <div>
          <h2 class="text-lg sm:text-xl lg:text-2xl">Ингредиенты:</h2>
          <h2 class="font-semibold text-sm sm:text-lg lg:text-xl">Для основы:</h2>
          <ul class="list-disc ml-6 sm:ml-8 mb-5">
            <li>Песочное печенье (типа Юбилейное, Digestive) — 200 г</li>
            <li>Масло сливочное — 100 г</li>
            <li>Сахар — 1 ст. л. (по желанию)</li>
          </ul>
        </div>

        <div>
          <h2 class="text-lg sm:text-xl lg:text-2xl">Инвентарь:</h2>
          <ul class="list-disc ml-6 sm:ml-8 mt-7">
            <li>Разъёмная форма 20–24 см</li>
            <li>Миксер или венчик</li>
            <li>Миска</li>
            <li>Пергамент</li>
            <li>Духовка</li>
          </ul>
        </div>
      </div>

      <div class="mt-5">
        <h2 class="font-semibold text-lg sm:text-xl lg:text-2xl">Для сырной начинки:</h2>
        <ul class="list-disc ml-6 sm:ml-8">
          <li>Творожный сливочный сыр (например, Philadelphia) — 600 г</li>
          <li>Сметана (20–25%) — 200 г</li>
          <li>Сахар — 150–180 г</li>
          <li>Яйца — 3 шт.</li>
          <li>Ванильный экстракт — 1 ч. л. (или ванильный сахар — 1 пакетик)</li>
          <li>Крахмал кукурузный — 1 ст. л.</li>
          <li>Щепотка соли</li>
          <li>Цедра лимона (по желанию) — 0.5 ч. л.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Картинка будет адаптироваться под размер экрана */
img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Обеспечиваем правильное обрезание картинки */
}
</style>
