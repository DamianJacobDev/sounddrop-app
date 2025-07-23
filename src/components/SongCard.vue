<template>
  <div v-if="track" @click="goToDetails(track.id)" class="">
    <div v-if="variant === 'compact'" class="flex items-center justify-between cursor-pointer">
      <div class="flex items-center gap-2">
        <span :style="`background-image: url('${track.cover}')`"
          class="bg-cover bg-no-repeat w-12 h-12 inline-flex items-center justify-center rounded-sm group ">
          <PlayCircleIcon @click.stop="trackStore.playTrack(track)"
            class="heroicon--big opacity-0 group-hover:scale-[1.8] hover:opacity-100 transition-all duration-300 text-gray-200 cursor-pointer" />
        </span>
        <div class="sm:flex items-center gap-2">
          <p class="font-semibold">{{ track.title }}</p>
          <p class="artist relative sm:pl-4 text-sm font-light">{{ track.artist }}</p>
        </div>
        <Waveform class="hidden" @duration="trackStore.getTime" :key="track.id" :link="track.link" />
      </div>
      <div class="flex items-center gap-1.5 text-xs">
        <span>{{ trackStore.time }}</span>
        <HeartIcon class="heroicon--small" @click.stop="like()" />
        <span>{{ track.likes }}</span>
        <ChatBubbleOvalLeftEllipsisIcon class="heroicon--small" />
        <span>{{ countAllComments(track.comments) }}</span>
        <EllipsisHorizontalIcon class="heroicon--small" />
      </div>
    </div>

    <div v-else-if="variant === 'full'" class="cursor-pointer flex gap-2">
      <span :style="`background-image: url('${track.cover}')`"
        class="bg-cover bg-no-repeat w-48 h-48 flex-shrink-0 rounded-sm"></span>
      <div class="w-full">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <PlayCircleIcon @click.stop="trackStore.playTrack(track)" class="w-16 h-16 stroke-[0.03rem] group-hover:scale-[1.8] hover:opacity-100
        transition-all duration-300 text-gray-200 cursor-pointer" />
            <div>
              <span class="block text-gray-400">{{ track.artist }}</span>
              <span class="block font-bold">{{ track.title }}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 flex-wrap max-w-xl">
            <span v-for="(tag, index) in track.tags" :key="index" class="bg-primary px-2 py-0.5 rounded-lg text-sm">#{{
              tag }}</span>
          </div>

        </div>
        <Waveform @duration="trackStore.getTime" :key="track.id" :link="track.link" />
        <div class="flex items-center gap-2 justify-end pt-2">
          <span>{{ trackStore.time }}</span>
          <HeartIcon class="heroicon--small" @click.stop="like()" />
          <span>{{ track.likes }}</span>
          <ChatBubbleOvalLeftEllipsisIcon class="heroicon--small" />
          <span>{{ countAllComments(track.comments) }}</span>
          <EllipsisHorizontalIcon class="heroicon--small" />
        </div>
      </div>
    </div>

    <div v-else-if="variant === 'mini'" class="w-fit cursor-pointer">
      <span :style="`background-image: url('${track.cover}')`"
        class="bg-cover bg-no-repeat w-48 h-48 rounded-sm block"></span>
      <div>
        <div class="text-gray-400">{{ track.artist }}</div>
        <div class="font-bold">{{ track.title }}</div>
      </div>
    </div>



  </div>
</template>

<script setup>
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PlayCircleIcon
} from '@heroicons/vue/24/outline';
import Waveform from "./Waveform.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTrackStore } from "../stores/trackStore.js";

const trackStore = useTrackStore();

const router = useRouter();

const props = defineProps({
  track: Object,
  variant: {
    type: String,
    default: 'compact',
    validator: (val) => ['compact', 'full', 'mini'].includes(val),
  }
})


const goToDetails = (id) => {
  router.push(`/track/${id}`);
}


const countAllComments = (comments) => {
  return comments.reduce((sum, comment) => {
    const repliesCount = comment.replies?.length ? countAllComments(comment.replies) : 0
    return sum + 1 + repliesCount
  }, 0)
}

</script>


<style scoped>
.artist::before {
  @apply sm:content-[''] absolute w-1.5 h-1.5 rounded-full bg-main top-1/2 -translate-y-1/2 -translate-x-4
}
</style>