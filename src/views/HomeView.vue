<template>
  <div>
    <h2>Latest tracks</h2>
    <div class="playlist">
      <song-card variant="compact" v-for="track in trackStore.tracks" :key="track.id" :trackId="track.id"/>
    </div>
    <div class="playlist">
      <song-card variant="full" v-for="track in trackStore.tracks" :key="track.id" :trackId="track.id"/>
    </div>
  </div>
</template>

<script setup>
import SongCard from '../components/SongCard.vue';
import {useTrackStore} from "../stores/trackStore.js";

const trackStore = useTrackStore();


</script>

<style scoped>
</style>