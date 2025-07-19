<template>
    <div class="container mx-auto globbalPadding">
      <app-header/>
      <router-view/>
    </div>
</template>

<script setup>

import AppHeader from "./components/AppHeader.vue";
</script>
