<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Project {
  name: string
  description: string
  link: string
  icon: string
  color: string
  github?: string
}

const props = defineProps<{
  url: string
}>()

const projects = ref<Project[]>([])

onMounted(async () => {
  if (!props.url) return
  try {
    const res = await fetch(props.url)
    projects.value = await res.json()
  } catch (e) {
    console.error('Failed to load projects:', e)
  }
})
</script>

<template>
  <div class="flex flex-wrap justify-center gap-6 my-8">
    <div v-for="project in projects" :key="project.name" 
      class="project-card relative flex flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-white w-full sm:w-72"
      :style="{ background: project.color }"
    >
      <div class="flex-1 p-3 flex flex-col items-center justify-center text-center">
        <div :class="project.icon" class="text-2xl mb-0 drop-shadow-md"></div>
        <h3 class="text-sm font-bold mb-0 drop-shadow-sm">{{ project.name }}</h3>
        <p class="text-sm opacity-90 leading-tight">{{ project.description }}</p>
      </div>
      
      <div class="flex border-t border-white/20 bg-black/10 backdrop-blur-sm">
        <a :href="project.link" target="_blank" class="flex-1 py-2 flex items-center justify-center text-white hover:bg-white/20 transition-colors" title="访问网站">
          <div class="i-ri-global-line text"></div>
        </a>
        <a v-if="project.github" :href="project.github" target="_blank" class="flex-1 py-2 flex items-center justify-center text-white hover:bg-white/20 transition-colors" title="GitHub">
          <div class="i-ri-github-line text"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  /* 确保卡片有最小高度，防止加载时塌陷 */
  min-height: 20px;
}
</style>
