<template>
  <div class="mx-auto">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <img :src="user.avatar" alt="avatar" class="w-20 h-20 rounded-full object-cover bg-primary" />
      <div>
        <h2 class="text-2xl font-bold">{{ user.name }}</h2>
        <p>{{ user.bio }}</p>
      </div>
      <div v-if="isCurrentUser" class="ml-auto">
        <action-button>Edytuj profil</action-button>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex gap-6 border-b mb-4">
      <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="['pb-2 border-b-2', activeTab === tab ? 'border-black font-semibold' : 'border-transparent text-gray-500']"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Tab Content -->
    <div v-if="activeTab === 'Utwory'">
      <SongCard
          v-for="song in user.songs"
          :key="song.id"
          :title="song.title"
          :artist="song.artist"
          :time="song.duration"
      />
    </div>

    <div v-else-if="activeTab === 'Polubione'">
      <SongCard
          v-for="song in user.likedSongs"
          :key="song.id"
          :title="song.title"
          :artist="song.artist"
          :time="song.duration"
      />
    </div>

    <div v-else-if="activeTab === 'Obserwowani'" class="flex items-center gap-4">
      <artist-card v-for="song in user.following" :key="song.id" :name="song.name" :title="song.bio"
      :views="song.views"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SongCard from '../components/SongCard.vue'
import ActionButton from "../components/ActionButton.vue";
import ArtistCard from "../components/ArtistCard.vue";

const user = ref({
  id: 'user123',
  name: 'Damian Jacob',
  bio: 'Twórca',
  avatar: '/avatar.png',
  songs: [
    { id: 'song1', title: 'Ocean Drive', artist: 'Damian Jacob', duration: '3:25' },
    { id: 'song2', title: 'Midnight Flow', artist: 'Damian Jacob', duration: '2:47' },
  ],
  likedSongs: [
    { id: 'song3', title: 'Castle On The Hill', artist: 'Ed Sheeran', duration: '4:20' },
    { id: 'song3', title: 'Youth', artist: 'Troye Sivan', duration: '3:06' },
    { id: 'song3', title: 'Rude', artist: 'Magic!', duration: '3:38' },
  ],
  following: [
    { id: 'u1', name: 'Anna', bio: 'Singer/Songwriter', avatar: '/img/default-avatar.png', views: '1654' },
    { id: 'u2', name: 'Tom', bio: 'Beatmaker', avatar: '/img/default-avatar.png', views: '12996' },
  ],
})

const tabs = ['Utwory', 'Polubione', 'Obserwowani']
const activeTab = ref('Utwory')

const isCurrentUser = computed(() => user.value.id === 'user123')
</script>
