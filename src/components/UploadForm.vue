<template>
  <form @submit.prevent="handleUpload" class="min-w-[1000px] mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h2 class="text-xl font-bold mb-4">Upload your track</h2>
    <div class="flex items-start justify-between">
      <div class="w-1/2">
        <label class="block mb-2 font-semibold text-sm">Title</label>
        <input v-model="title" type="text" class="input" required/>

        <label class="block mt-4 mb-2 font-semibold text-sm">Description</label>
        <textarea v-model="description" rows="3" class="input"/>

        <label class="block mt-4 mb-2 font-semibold text-sm">Tags</label>
        <input v-model="tags" type="text" class="input" required/>
        <p>{{ tags }}</p>
      </div>
      <div class="w-1/2">
        <label class="block mb-2 font-semibold text-sm">Audio file (.mp3/.wav)</label>
        <input type="file" @change="handleAudioFile" accept="audio/*" class="input" required/>
        <div v-if="audioFile" class="text-xs mt-1 text-gray-500">{{ audioFile.name }} ({{ formatSize(audioFile.size) }})
        </div>

        <label class="block mt-4 mb-2 font-semibold text-sm">Cover</label>
        <input type="file" @change="handleCoverFile" accept="image/*" class="input"/>
        <img v-if="coverPreview" :src="coverPreview" class="w-32 h-32 object-cover mt-2 rounded"/>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <action-button type="submit" class="mt-6">Upload</action-button>
      <action-button @click="closeUpload" type="button" class="mt-6">Close</action-button>
    </div>

  </form>
</template>

<script setup>
import {ref} from 'vue'
import {useUserStore} from "../stores/userStore.js";
import ActionButton from './ActionButton.vue'

const title = ref('')
const description = ref('')
const tags = ref('')
const audioFile = ref(null)
const coverFile = ref(null)
const coverPreview = ref(null)

const userStore = useUserStore()

const handleAudioFile = (e) => {
  audioFile.value = e.target.files[0]
}

const handleCoverFile = (e) => {
  coverFile.value = e.target.files[0]
  if (coverFile.value) {
    coverPreview.value = URL.createObjectURL(coverFile.value)
  }
}

const formatSize = (bytes) => {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

const handleUpload = () => {
  if (!audioFile.value) return

  const newTrack = {
    id: Date.now(),
    title: title.value,
    description: description.value,
    tags: tags.value.split(',').map(t => t.trim()).filter(Boolean),
    audio: audioFile.value,
    cover: coverPreview.value,
    comments: [],
    likes: 0,
  }

  userStore.addTrack(newTrack)

  title.value = ''
  description.value = ''
  audioFile.value = null
  coverFile.value = null
  coverPreview.value = null
}
const emit = defineEmits(['closeUpload'])
const closeUpload = () => {
  emit('closeUpload')
}
</script>

<style scoped>
.input {
  @apply w-full px-3 py-2 border rounded bg-white dark:bg-gray-700 dark:text-white;
}
</style>