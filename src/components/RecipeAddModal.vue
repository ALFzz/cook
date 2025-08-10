<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({ isOpen: Boolean })

const emit = defineEmits(['closeModal'])

const selected = ref(null)

const categories = ['первое', 'закуски', 'второе', 'десерты']

function selectCategory(category) {
  selected.value = category
}

const router = useRouter()

function goToForm() {
  if (selected.value) {
    router.push({ name: 'RecipeForm', query: { category: selected.value } })
  }
}
</script>

<template>
  <div class="flex justify-center">
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="$emit('closeModal')"
      >
        <div
          class="bg-[#577165] flex flex-col w-[90%] max-w-[740px] min-h-[240px] text-white p-4 sm:p-6 rounded-lg shadow-lg"
        >
          <h3 class="text-center text-2xl sm:text-3xl mb-4">
            Уточните, какой рецепт вы хотите добавить:
          </h3>

          <div
            class="grid grid-cols-2 grid-rows-2 gap-4 text-center text-xl sm:text-2xl px-4 sm:px-16"
          >
            <h2
              v-for="category in categories"
              :key="category"
              @click="selectCategory(category)"
              :class="[
                'cursor-pointer transition-colors duration-200',
                selected === category ? 'text-[#64E5AD]' : 'text-white',
              ]"
            >
              {{ category }}
            </h2>
          </div>

          <div class="text-center text-black mt-6">
            <button
              @click="goToForm"
              class="px-8 py-2 text-base sm:text-lg border border-black bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              добавить рецепт
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
