<template>
  <div>
    <h2 class="font-bold">Recently Added</h2>
    <div class="recentlyAdded">
      <song-card variant="compact" v-for="track in recentlyAdded" :key="track.id" :trackId="track.id" />
    </div>

    <h2 class="font-bold">Most played</h2>
    <div class="mostPlayed">
      <song-card variant="compact" v-for="track in mostPlayed" :key="track.id" :trackId="track.id" />
    </div>
  </div>
</template>

<script setup>
import SongCard from '../components/SongCard.vue';
import { useTrackStore } from "../stores/trackStore.js";
import { computed } from 'vue';

const trackStore = useTrackStore();

const mostPlayed = computed(() => trackStore.getMostPlayed)
const recentlyAdded = computed(() => trackStore.getRecentlyAdded)

</script>

<style scoped></style>