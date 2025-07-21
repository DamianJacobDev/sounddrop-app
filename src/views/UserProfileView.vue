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
      <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
        :class="['pb-2 border-b-2', activeTab === tab ? 'border-black font-semibold' : 'border-transparent text-gray-500']">
        {{ tab }}
      </button>
    </div>

    <!-- Tab Content -->
    <div v-if="activeTab === 'Utwory'" v-for="track in userStore.playlists.tracks" :key="track.id">
      <SongCard :trackId="track.id" />
    </div>

    <div v-else-if="activeTab === 'Polubione'">
      <SongCard />
    </div>

    <div v-else-if="activeTab === 'Obserwowani'" class="flex items-center gap-4">
      <artist-card />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SongCard from '../components/SongCard.vue'
import ActionButton from "../components/ActionButton.vue";
import ArtistCard from "../components/ArtistCard.vue";

import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();

const user = ref({
  id: 'user123',
  name: 'Damian Jacob',
  bio: 'Twórca',
  avatar: '/avatar.png',
})

const tabs = ['Utwory', 'Polubione', 'Obserwowani']
const activeTab = ref('Utwory')

const isCurrentUser = computed(() => user.value.id === 'user123')
</script>
