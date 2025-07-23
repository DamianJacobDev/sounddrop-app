<template>
  <div class="space-y-4">
    <h2 class="font-bold">Recently Added</h2>
    <div class="recentlyAdded lg:grid lg:grid-cols-2 gap-2 max-lg:space-y-2">
      <song-card variant="compact" v-for="track in recentlyAdded" :key="track.id" :track="track"/>
    </div>

    <h2 class="font-bold">Most played</h2>
    <div class="mostPlayed lg:grid lg:grid-cols-2 gap-2 max-lg:space-y-2">
      <song-card variant="compact" v-for="track in mostPlayed" :key="track.id" :track="track"/>
    </div>

    <h2 class="font-bold">TOP 10</h2>
    <div class="flex items-center gap-2 overflow-y-auto">
      <song-card variant="mini" v-for="track in mostPlayed" :key="track.id" :track="track"/>
    </div>
  </div>
</template>

<script setup>
import SongCard from '../components/SongCard.vue';
import {useTrackStore} from "../stores/trackStore.js";
import {computed} from 'vue';


const trackStore = useTrackStore();

const mostPlayed = computed(() => trackStore.getMostPlayed)
const recentlyAdded = computed(() => trackStore.getRecentlyAdded)



</script>

<style scoped></style>