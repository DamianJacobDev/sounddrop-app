<template>

  <div v-if="track">
    <song-card variant="full" :trackId="track.id" />
  </div>
  <div class="flex gap-4 rounded-xl border p-4">
    <artist-card class="w-[15%] h-fit" :name="track.artist" :title="track.role" :plays="track.playCount" />

    <div class="flex-1">
      <p class="text-sm">{{ track.description }}</p>
      <h3 class="pt-4 font-bold">Comments:</h3>
      <input placeholder="Dodaj komentarz..." class="border px-2 py-1 rounded-lg w-full" v-model="comment" />
      <CommentItem :comments="track.comments" />

    </div>
  </div>
</template>

<script setup>

import SongCard from "../components/SongCard.vue";
import ArtistCard from "../components/ArtistCard.vue";
import CommentItem from "../components/CommentItem.vue";
import { useTrackStore } from "../stores/trackStore.js";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

const store = useTrackStore();
const route = useRoute();

const comment = ref()

const trackId = route.params.id;
const track = computed(() =>
  store.tracks.find(t => t.id === trackId))


</script>

<style scoped></style>