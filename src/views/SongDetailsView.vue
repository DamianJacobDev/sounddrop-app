<template>

  <div v-if="track">
    <song-card variant="full" :trackId="track.id"/>
  </div>
  <div class="flex gap-4 rounded-xl border p-4">
    <artist-card class="w-[15%] h-fit" :name="track.artist" :title="track.role" :plays="track.playCount"/>

    <div class="flex-1">
      <p class="text-sm">{{ track.description }}</p>
      <h3 class="pt-4 font-bold">Comments:</h3>
      <div class="border px-2 py-1 rounded-lg w-full relative mb-2">
        <input class="w-full text-sm focus:outline-none" placeholder="Dodaj komentarz..." v-model="comment" @keyup.enter="addComment"/>
        <button class="absolute top-1/2 -translate-y-1/2 bg-primary rounded-lg px-5 py-1.5 right-0 text-sm" @click="addComment">Dodaj</button>
      </div>
      <CommentItem :comments="track.comments" :track-id="track.id"/>

    </div>
  </div>
</template>

<script setup>

import SongCard from "../components/SongCard.vue";
import ArtistCard from "../components/ArtistCard.vue";
import CommentItem from "../components/CommentItem.vue";
import {useTrackStore} from "../stores/trackStore.js";
import {useUserStore} from "../stores/userStore.js";
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import ActionButton from "../components/ActionButton.vue";


const store = useTrackStore();
const user = useUserStore();
const route = useRoute();

const comment = ref()

const trackId = route.params.id;
const track = computed(() =>
    store.tracks.find(t => t.id === trackId))

const addComment = () => {
  if (!comment.value.trim()) return;

  const newComment = {
    id: Date.now(),
    user: user.userData.name,
    text: comment.value,
    date: new Date().toISOString(),
    avatar: user.userData.avatar,
    likes: 0,
    replies: []
  };

  store.addComment(trackId, newComment);
  comment.value = "";
}

</script>

<style scoped></style>