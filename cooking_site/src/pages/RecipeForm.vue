<script setup>
import {ref} from "vue";

const previewUrl = ref(null)




const title = ref('')
const description = ref('')
const ingredients = ref([])
const equipment = ref([])
const steps = ref([])
const serving = ref('')
const photo = ref(null)

const handleFileUpload = (e) => {
  photo.value = e.target.files[0]
  if (photo.value) {
    previewUrl.value = URL.createObjectURL(photo.value)

  }
}

const saveRecipe = () => {
  const newRecipe = {
    title: title.value,
    description: description.value,
    ingredients: ingredients.value.split('\n'),
    equipment: equipment.value.split('\n'),
    steps: steps.value.split('\n'),
    serving: serving.value,
    photo: photo.value,
  }

}
</script>

<template>
  <div class="flex flex-col px-10">
    <div class="flex flex-row mt-16 gap-10">
      <div class="relative w-1/2">
        <div class="relative w-full h-[500px] border bg-gray-300 rounded flex items-center justify-center">
          <!-- Картинка (ниже по z-index) -->
          <div v-if="previewUrl" class="absolute inset-0 p-4 z-0">
            <img :src="previewUrl" alt="preview" class="object-contain w-full h-full rounded" />
          </div>

          <!-- Кнопка (выше по z-index) -->
          <label
              for="fileInput"
              class="cursor-pointer absolute mb-5 bottom-2 left-1/2 transform -translate-x-1/2 text-[20px] w-fit px-5 py-3 text-center border-black border rounded-2xl shadow-2xl bg-white text-black z-10"
          >
            добавить фото
          </label>

          <!-- Скрытый input -->
          <input
              id="fileInput"
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleFileUpload"
          />
        </div>
      </div>

      <!-- Ингредиенты и Инвентарь -->
      <div class="w-1/2 h-[500px] flex flex-col justify-between">
       <textarea
           class="border border-black h-[20%] w-full rounded p-2 pr-1 resize-none"
           placeholder="описание блюда"
       ></textarea>

        <div class="flex flex-row gap-12 h-full mt-10">
          <div class="flex flex-col w-1/2 h-full">
            <h2 class="mb-2">Ингредиенты:</h2>
            <textarea
                v-model="ingredients"
                class="border border-black w-full h-full rounded p-2 pr-1 resize-none"
                placeholder="Каждый ингредиент с новой строки"
            ></textarea>
          </div>

          <div class="flex flex-col w-1/2 h-full">
            <h2 class="mb-2">Инвентарь:</h2>
            <textarea
                v-model="equipment"
                class="border border-black w-full h-full rounded p-2 pr-1 resize-none"
                placeholder="Каждый предмет с новой строки"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- Приготовление -->
    <div class="mt-20">
      <h2 class="text-[20px]">Приготовление:</h2>
      <textarea
          v-model="steps"
          class="border border-black w-full h-[500px] rounded p-2 pr-1 resize-none"
          placeholder="Каждый шаг с новой строки"
      ></textarea>
    </div>

    <!-- Подача -->
    <div class="mt-10">
      <h2 class="text-[20px]">Подача:</h2>
      <textarea
          v-model="serving"
          class="border border-black w-full h-[500px] rounded p-2 pr-1 resize-none"
          placeholder="Как подавать блюдо"
      ></textarea>
    </div>

    <!-- Кнопка сохранить -->
    <div class="mt-8 mb-10 flex justify-end">
      <button
          @click="saveRecipe"
          class="text-[20px] w-fit px-8 py-3 text-center border-black border rounded-2xl shadow-2xl bg-gray-300 text-black"
      >
        сохранить рецепт
      </button>
    </div>
  </div>
</template>

<style scoped></style>
