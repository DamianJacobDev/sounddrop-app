<template>

  <div v-if="track">
    <song-card variant="full" :track="track" />

    <div class="md:flex gap-4 my-4">
      <artist-card @follow="saveFollow" class="w-48 h-fit" :name="track.artist || user.userData.name"
        :title="track.role || user.userData.role"
        :plays="track.artist === 'Damian Jacob' ? user.userData.playCount : track.playCount"
        :avatar="track.artist === 'Damian Jacob' ? user.userData.avatar : `https://i.pravatar.cc/40?u=${track.artist}`" />

      <div class="flex-1">
        <p class="text-sm">{{ track.description }}</p>
        <h3 class="pt-4 font-bold">Comments:</h3>
        <div class="border border-primary px-2 py-1 rounded-lg w-full relative mb-2">
          <input class="w-full text-sm bg-transparent focus:outline-none" placeholder="Dodaj komentarz..."
            v-model="comment" @keyup.enter="addComment" />
          <button class="absolute top-1/2 -translate-y-1/2 bg-primary rounded-lg px-5 py-1.5 right-0 text-sm"
            @click="addComment">Dodaj</button>
        </div>
        <CommentItem :comments="track.comments" :track-id="track.id" />
      </div>
    </div>
  </div>
</template>

<script setup>

import SongCard from "../components/SongCard.vue";
import ArtistCard from "../components/ArtistCard.vue";
import CommentItem from "../components/CommentItem.vue";
import { useTrackStore } from "../stores/trackStore.js";
import { useUserStore } from "../stores/userStore.js";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";


const store = useTrackStore();
const user = useUserStore();
const route = useRoute();

const comment = ref()

const trackId = Number(route.params.id);
const track = computed(() => {
  const fromTrackStore = store.tracks.find(t => t.id === trackId)
  if (fromTrackStore) return fromTrackStore

  const fromUserStore = user.findTrackById(trackId)
  return fromUserStore || null
})

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
const saveFollow = (val) => {
  console.log('działa', val)

  const newFollow = {
    id: Date.now(),
    name: track.value.artist,
    role: track.value.role,
    plays: track.value.playCount,
    avatar: `https://i.pravatar.cc/40?u=${track.value.artist}`,
  }

  if (val === true) {
    user.subscribed.push(newFollow)
  }
}


</script>

<style scoped></style>