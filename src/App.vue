<template>
  <div class="container mx-auto globalPadding">
    <app-header />
    <router-view />
  </div>
</template>

<script setup>

import AppHeader from "./components/AppHeader.vue";
</script>
