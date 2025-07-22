<template>
  <div class="mx-auto">
    <!-- Header -->
    <div class="mb-6 flex items-center gap-4">
      <img :src="userStore.userData.avatar" alt="avatar" class="h-20 w-20 rounded-full object-cover bg-primary" />
      <div>
        <h2 class="text-2xl font-bold">{{ userStore.userData.name }}</h2>
        <p>{{ userStore.userData.bio }}</p>
        <div class="flex items-center gap-2 text-sm">
          <div class="flex items-center gap-1">
            <user-group-icon class="heroicon--small" />
            <p>{{ userStore.userData.subscribers.length }}</p>
          </div>
          <div class="flex items-center gap-1">
            <play-icon class="heroicon--small" />
            <p>{{ userStore.userData.playCount }}</p>
          </div>
        </div>
      </div>
      <div v-if="isCurrentUser" class="ml-auto">
        <action-button>Edytuj profil</action-button>
      </div>
    </div>

    <!-- Tabs -->
    <div class="mb-4 flex gap-6 border-b">
      <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
        :class="['pb-2 border-b-2', activeTab === tab ? 'border-black font-semibold' : 'border-transparent text-gray-500']">
        {{ tab }}
      </button>
    </div>

    <!-- Tab Content -->
    <div v-if="activeTab === 'Utwory'" v-for="track in userStore.playlists.tracks" :key="track.id">
      <pre>{{ track.title }}</pre>
      <SongCard :track="track" />
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
import { UserGroupIcon, PlayIcon } from "@heroicons/vue/24/outline/index.js";

import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();

const tabs = ['Utwory', 'Polubione', 'Obserwowani']
const activeTab = ref('Utwory')

const isCurrentUser = computed(() => userStore.userData.id)
</script>
