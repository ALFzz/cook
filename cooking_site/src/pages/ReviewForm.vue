<script setup></script>

<template>
  <div class="flex flex-col px-10">
    <div class="flex flex-row mt-16 gap-10">
      <div class="relative w-1/2">
        <textarea
          class="border bg-gray-300 rounded p-2 w-full pr-1 h-[500px] resize-none"
          placeholder="Введите текст..."
        ></textarea>
        <button
          class="absolute mb-5 bottom-2 left-1/2 transform -translate-x-1/2 text-[20px] w-fit px-5 py-3 text-center border-black border rounded-2xl shadow-2xl bg-white text-black"
        >
          добавить фото
        </button>
      </div>

      <div class="w-1/2 h-[500px] flex flex-col justify-between">
        <textarea
          class="border border-black h-[20%] w-full rounded p-2 pr-1 resize-none"
          placeholder="описание блюда"
        ></textarea>

        <div class="flex flex-col h-[75%] mt-5">
          <div class="flex flex-row gap-12 h-full">
            <!-- Левая часть: Ингредиенты -->
            <div class="flex flex-col w-1/2 h-full">
              <h2 class="mb-2">Ингредиенты:</h2>
              <textarea
                class="border border-black w-full h-full rounded p-2 pr-1 resize-none"
              ></textarea>
            </div>

            <div class="flex flex-col w-1/2 h-full">
              <h2 class="mb-2">Инвентарь:</h2>
              <textarea
                class="border border-black w-full h-full rounded p-2 pr-1 resize-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20">
      <h2 class="text-[20px]">Приготовление:</h2>
      <textarea
        class="border border-black w-full h-[500px] rounded p-2 pr-1 resize-none"
      ></textarea>
    </div>

    <div class="mt-10">
      <h2 class="text-[20px]">Подача:</h2>
      <textarea
        class="border border-black w-full h-[500px] rounded p-2 pr-1 resize-none"
      ></textarea>
    </div>

    <div class="mt-8 mb-10 flex justify-end">
      <button
        class="text-[20px] w-fit px-8 py-3 text-center border-black border rounded-2xl shadow-2xl bg-gray-300 text-black"
      >
        сохранить рецепт
      </button>
    </div>
  </div>
</template>

<style scoped></style>
