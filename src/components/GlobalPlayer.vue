<template>
  <div v-if="track" class="fixed bottom-0 left-0 w-full bg-zinc-900/50 text-white p-4 flex items-center justify-evenly">
    <div class="flex items-center gap-4">
      <img :src="track.cover" alt="track cover" class="w-14 h-14" />
      <div class="text-sm">
        <p>{{ track.title }}</p>
        <p>{{ track.artist }}</p>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <chevron-left-icon class="w-10 rounded-full bg-white/50 p-2" />
      <play-icon class="w-10 rounded-full bg-white/50 p-2" />
      <chevron-right-icon class="w-10 rounded-full bg-white/50 p-2" />
    </div>

    <div class="bg-blue-500 w-[50%]">
      <p>Progress bar</p>
    </div>

    <div class="flex items-center gap-2">
      <heart-icon class="heroicon--big" />
      <arrow-path-icon class="heroicon--big" />
      <share-icon class="heroicon--big" />
      <speaker-wave-icon class="heroicon--big" />
    </div>



  </div>
</template>

<script setup>
import { useTrackStore } from "../stores/trackStore.js";
import { storeToRefs } from 'pinia';
import { computed } from 'vue'

import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, HeartIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ShareIcon, ArrowPathIcon } from "@heroicons/vue/24/outline";

const trackStore = useTrackStore();
const { currentTrack } = storeToRefs(trackStore);

const track = computed(() => currentTrack.value)
</script>