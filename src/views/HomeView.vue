<template>
  <div>
    <h2>Latest tracks</h2>
    <div class="playlist">
      <song-card variant="compact" v-for="song in songs" :key="song.id" :title="song.title" :artist="song.artist" :link="song.link" :tags="song.tags"/>
    </div>
    <div class="playlist">
      <song-card variant="full" v-for="song in songs" :key="song.id" :title="song.title" :artist="song.artist" :link="song.link" :tags="song.tags"/>
    </div>
  </div>
</template>

<script setup>
import SongCard from '../components/SongCard.vue';

const songs = [
  { id: 1, title: 'Take me to the moon and back', artist: 'Damian Jacob', link: '/audio/demo.mp3', tags: ['pop', 'rock', 'vocal harmonies']},
]

</script>

<style scoped>
</style>