<template>

  <div v-if="track">
    <song-card variant="full" :trackId="track.id"/>
  </div>
  <div class="flex gap-4 rounded-xl border p-4">
    <artist-card class="w-[50%] h-fit"/>

    <div>
      <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3 class="py-4 font-bold">Comments:</h3>
      <CommentItem :comments="track.comments"/>
    </div>
  </div>
</template>

<script setup>

import SongCard from "../components/SongCard.vue";
import ArtistCard from "../components/ArtistCard.vue";
import CommentItem from "../components/CommentItem.vue";
import {useTrackStore} from "../stores/trackStore.js";
import {useRoute} from "vue-router";
import {computed} from "vue";

const store = useTrackStore();
const route = useRoute();

const trackId = route.params.id;
const track = computed(() =>
  store.tracks.find(t => t.id === trackId))


</script>

<style scoped>

</style>