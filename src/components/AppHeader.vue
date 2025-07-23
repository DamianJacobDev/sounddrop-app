<template>
  <header class="mb-6 flex items-center justify-between border-b py-4">
    <div class="text-2xl font-bold tracking-tight">SoundDrop</div>
    <nav class="flex items-center gap-4">
      <RouterLink to="/">Home</RouterLink>
      <span class="cursor-pointer" @click="openUploadForm">Upload</span>
      <RouterLink to="/user">
        <action-button>
          Log in
        </action-button>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import ActionButton from "./ActionButton.vue";
const emit = defineEmits(['upload']);

const openUploadForm = () => {
  emit('upload');
}
</script>
<style scoped></style>