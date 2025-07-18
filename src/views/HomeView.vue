<template>
    <div class="space-y-2 container mx-auto">
        <song-card v-for="song in 5" :key="song" title="Song title" artist="Artist name" time="3:26" />
    </div>
</template>

<script setup>
import SongCard from '../components/SongCard.vue';
</script>

<style scoped></style>