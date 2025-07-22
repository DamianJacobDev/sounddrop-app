<template>
  <div class="container mx-auto globalPadding">
    <app-header />
    <router-view />
    <global-player/>
  </div>
</template>

<script setup>

import AppHeader from "./components/AppHeader.vue";
import GlobalPlayer from "./components/GlobalPlayer.vue";
</script>
