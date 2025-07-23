<template>
  <div class="container mx-auto globalPadding">
    <app-header @upload="showUpload" />
    <div v-if="uploadActive" class="bg-black/70 w-screen h-screen absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <upload-form @close-upload="hideUpload" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </div>
    <router-view />
    <global-player/>
  </div>
</template>

<script setup>

import AppHeader from "./components/AppHeader.vue";
import GlobalPlayer from "./components/GlobalPlayer.vue";
import UploadForm from "./components/UploadForm.vue";
import {ref} from "vue";

const uploadActive = ref(false)

const showUpload = () => {
  document.body.style.overflow = 'hidden';
  uploadActive.value = true
}

const hideUpload = () => {
  document.body.style.overflow = '';
  uploadActive.value = false
}
</script>
