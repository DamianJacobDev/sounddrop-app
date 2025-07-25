<template>
  <div class="container mx-auto globalPadding">
    <app-header @upload="showUpload" />
    <transition name="fade-bg">
      <div v-if="uploadActive"
        class="bg-black/70 w-screen h-screen absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <transition name="slide-fade">
          <upload-form v-if="uploadActive" @submitted="hideUploadForm" @close-upload="hideUpload"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </transition>
      </div>
    </transition>
    <router-view />
    <global-player />
  </div>
</template>

<script setup>

import AppHeader from "./components/AppHeader.vue";
import GlobalPlayer from "./components/GlobalPlayer.vue";
import UploadForm from "./components/UploadForm.vue";
import { ref } from "vue";

const uploadActive = ref(false)

const showUpload = () => {
  document.body.style.overflow = 'hidden';
  uploadActive.value = true
}

const hideUpload = () => {
  document.body.style.overflow = '';
  uploadActive.value = false
}

const hideUploadForm = () => {
  setTimeout(() => {
    uploadActive.value = false;
    document.body.style.overflow = '';
  }, 3000);
}
</script>

<style scoped>
.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: opacity 0.3s ease;
}

.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>