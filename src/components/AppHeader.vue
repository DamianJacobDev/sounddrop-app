<template>
  <header class="flex items-center justify-between py-4 border-b mb-6">
    <div class="text-2xl font-bold tracking-tight">SoundDrop</div>
    <nav class="flex items-center gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/upload">Upload</RouterLink>
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
</script>
<style scoped></style>