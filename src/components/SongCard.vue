<template>
  <div v-if="variant === 'compact'"
       class="flex items-center justify-between px-4 py-4 rounded-xl border my-2 cursor-pointer">
    <div class="flex items-center gap-2">
            <span class="bg-primary w-12 h-12 inline-flex items-center justify-center rounded-sm group ">
                <PlayCircleIcon
                    class="heroicon opacity-0 group-hover:scale-[1.8] hover:opacity-100 transition-all duration-300 text-gray-200 cursor-pointer"/>
            </span>
      <span>{{ title }}</span>
      <span class="artist relative pl-4 text-sm">{{ artist }}</span>
      <Waveform class="hidden" @duration="getTime" :key="props.link" :link="props.link"/>
    </div>
    <div class="flex items-center gap-4">
      <span>{{ time }}</span>
      <HeartIcon class="heroicon"/>
      <ChatBubbleOvalLeftEllipsisIcon class="heroicon"/>
      <EllipsisHorizontalIcon class="heroicon"/>
    </div>
  </div>

  <div v-else class="px-4 py-4 rounded-xl border my-2 cursor-pointer flex gap-2">
    <span class="bg-primary w-48 h-48 flex-shrink-0 rounded-sm"></span>
    <div class="w-full">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <PlayCircleIcon class="w-16 h-16 stroke-[0.03rem] group-hover:scale-[1.8] hover:opacity-100
        transition-all duration-300 text-gray-200 cursor-pointer"/>
          <div>
            <span class="block text-gray-400">{{ artist }}</span>
            <span class="block font-bold">{{ title }}</span>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-wrap max-w-xl">
          <span v-for="(tag, index) in props.tags" class="bg-primary px-2 py-0.5 rounded-lg text-sm">#{{ tag }}</span>
        </div>

      </div>
      <Waveform @duration="getTime" :key="props.link" :link="props.link"/>
      <div class="flex items-center gap-4 justify-end pt-2">
        <span>{{ time }}</span>
        <HeartIcon class="heroicon"/>
        <ChatBubbleOvalLeftEllipsisIcon class="heroicon"/>
        <EllipsisHorizontalIcon class="heroicon"/>
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
import {ref} from "vue";

const time = ref('');
const getTime = (val) => {
  const mins = Math.floor(val / 60)
  const secs = Math.floor(val % 60).toString().padStart(2, '0')
  time.value = `${mins}:${secs}`
}

const props = defineProps({
  title: String,
  artist: String,
  link: String,
  tags: Array,
  variant: {
    type: String,
    default: 'compact',
    validator: (val) => ['compact', 'full'].includes(val),
  }
})

</script>


<style scoped>
.artist::before {
  @apply content-[''] absolute w-1.5 h-1.5 rounded-full bg-main top-1/2 -translate-y-1/2 -translate-x-4
}
</style>