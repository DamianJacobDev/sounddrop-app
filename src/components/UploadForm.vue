<template>
  <form @submit.prevent="handleUpload"
    class="lg:min-w-[1000px] max-lg:w-[80%] mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <div v-if="!isTrackUploaded">
      <h2 class="text-xl font-bold mb-4">Upload your track</h2>
      <div class="lg:flex gap-4 items-start justify-between">
        <div class="lg:w-1/2">
          <label class="block mb-2 font-semibold text-sm">Title</label>
          <input v-model="title" type="text" class="input" required />

          <label class="block mt-4 mb-2 font-semibold text-sm">Description</label>
          <textarea v-model="description" rows="3" class="input" />

          <label class="block mt-4 mb-2 font-semibold text-sm">Tags</label>
          <input v-model="tags" type="text" class="input" required />
        </div>
        <div class="lg:w-1/2">
          <label class="block mb-2 font-semibold text-sm">Audio file (.mp3/.wav)</label>
          <div class="relative">
            <label for="file-upload" class="cursor-pointer inline-flex gap-2">
              <arrow-up-tray-icon class="heroicon--big" />
              <span>Wybierz plik</span>

            </label>
            <input id="file-upload" type="file" @change="handleAudioFile" accept="audio/*" class="hidden" required />
            <div v-if="audioFile" class="text-xs mt-1 text-gray-500 absolute top-0 left-32">{{ audioFile.name }} ({{
              formatSize(audioFile.size) }})
            </div>
          </div>

          <label class="block mt-4 mb-2 font-semibold text-sm">Cover</label>
          <label for="cover-upload" class="cursor-pointer inline-flex gap-2">
            <arrow-up-tray-icon class="heroicon--big" />
            <span>Wybierz plik</span>

          </label>
          <input id="cover-upload" type="file" @change="handleCoverFile" accept="image/*" class="hidden" />
          <img v-if="coverPreview" :src="coverPreview"
            class="w-32 h-32 object-cover mt-2 rounded absolute max-lg:bottom-4 max-lg:left-36 max-sm:h-16 max-sm:w-16 max-sm:bottom-16" />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <action-button type="submit" class="mt-6">Upload</action-button>
        <action-button @click="closeUpload" type="button" class="mt-6">Close</action-button>
      </div>
    </div>
    <div v-else>
      <h2 class="text-xl font-bold">Twój plik został załadowany pomyślnie.</h2>
    </div>
  </form>


</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from "../stores/userStore.js";
import ActionButton from './ActionButton.vue'
import { ArrowUpTrayIcon } from '@heroicons/vue/24/outline';

const title = ref('')
const description = ref('')
const tags = ref('')
const audioFile = ref(null)
const coverFile = ref(null)
const coverPreview = ref(null)

const userStore = useUserStore()
const isTrackUploaded = ref(false)

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
    artist: userStore.userData.name,
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

  isTrackUploaded.value = true
  emit('submitted');
}
const emit = defineEmits(['closeUpload', 'submitted'])
const closeUpload = () => {
  emit('closeUpload');
}

</script>

<style scoped>
.input {
  @apply w-full px-2 border rounded bg-white dark:bg-gray-700 dark:text-white outline-none;
}
</style>