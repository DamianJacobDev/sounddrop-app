<template>
  <div v-if="track" class="fixed bottom-0 left-0 w-full bg-zinc-900 text-white p-4">
    <p>{{track.title}} * {{track.artist}}</p>
  </div>
</template>

<script setup>
import { useTrackStore } from "../stores/trackStore.js";
import { storeToRefs } from 'pinia';
import { computed } from 'vue'

const trackStore = useTrackStore();
const { currentTrack } = storeToRefs(trackStore);

const track = computed(() => currentTrack.value)
</script>