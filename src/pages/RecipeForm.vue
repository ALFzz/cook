<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { createRecipe, getRecipesLength } from '@/recipes.js'

const previewUrl = ref(null)
const label = ref('')
const description = ref('')
const ingredients = ref([])
const equipment = ref([])
const steps = ref([])
const serving = ref('')
const cookingTime = ref('')
const photo = ref(null)

const route = useRoute()
const router = useRouter()

const handleFileUpload = (e) => {
  photo.value = e.target.files[0]
  if (photo.value) {
    previewUrl.value = URL.createObjectURL(photo.value)
  }
}

async function submit() {
  const formData = new FormData()
  formData.append('image', photo.value)

  createRecipe({
    id: getRecipesLength(),
    label: label.value,
    description: description.value,
    category: route.query.category,
    ingredients: ingredients.value.split('\n'),
    equipment: equipment.value.split('\n'),
    steps: steps.value.split('\n'),
    serving: serving.value,
    time: cookingTime.value,
    reviews: [],
    img: photo.value.name,
  })

  try {
    const response = await axios.post('http://localhost:3000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log('Файл загружен:', response.data)
  } catch (error) {
    console.error('Ошибка загрузки файла:', error)
  }
  await router.push('categories/' + route.query.category)
  // await nextTick();
}
</script>

<template>
  <div class="flex flex-col px-10">
    <div class="flex flex-row max-sm:flex-col mt-16 gap-10">
      <div class="relative w-1/2 max-sm:w-full">
        <div
          class="relative w-full h-[500px] border bg-gray-300 rounded flex items-center justify-center"
        >
          <div v-if="previewUrl" class="absolute inset-0 p-4 z-0">
            <img :src="previewUrl" alt="preview" class="object-contain w-full h-full rounded" />
          </div>

          <label
            for="fileInput"
            class="cursor-pointer absolute mb-5 bottom-2 left-1/2 transform -translate-x-1/2 text-[20px] w-fit px-5 py-3 text-center border-black border rounded-2xl shadow-2xl bg-white text-black z-10"
          >
            добавить фото
          </label>

          <input
            id="fileInput"
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleFileUpload"
          />
        </div>
      </div>

      <div class="w-1/2 max-sm:w-full h-[500px] flex flex-col justify-between">
        <input
          v-model="label"
          class="border border-black w-full h-[10%] rounded p-2 pr-1"
          type="text"
          placeholder="Название блюда"
        />

        <input
          v-model="cookingTime"
          class="border border-black w-full h-[10%] rounded p-2 pr-1 mt-4"
          type="text"
          placeholder="Время приготовления (например: 30 минут)"
        />

        <textarea
          v-model="description"
          class="border border-black h-[20%] w-full rounded p-2 pr-1 resize-none mt-4"
          placeholder="Описание блюда"
        ></textarea>

        <div class="flex flex-row gap-12 max-sm:gap-6 text-md h-full mt-10">
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

    <div class="mt-20">
      <h2 class="text-[20px]">Приготовление:</h2>
      <textarea
        v-model="steps"
        class="border border-black w-full h-[500px] rounded p-2 pr-1 resize-none"
        placeholder="Каждый шаг с новой строки"
      ></textarea>
    </div>

    <div class="mt-10">
      <h2 class="text-[20px]">Подача:</h2>
      <textarea
        v-model="serving"
        class="border border-black w-full h-[500px] rounded p-2 pr-1 resize-none"
        placeholder="Как подавать блюдо"
      ></textarea>
    </div>

    <div class="mt-8 mb-10 flex justify-end">
      <button
        @click="submit"
        class="text-[20px] w-fit px-8 py-3 transition duration-150 hover:bg-gray-300 text-center border-black border rounded-2xl shadow-2xl text-black"
      >
        сохранить рецепт
      </button>
    </div>
  </div>
</template>
