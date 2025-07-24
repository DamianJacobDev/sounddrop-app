<template>
  <div
    class="md:flex md:flex-col items-center text-center rounded-xl p-4 shadow-md dark:bg-gray-900 bg-white text-sm max-md:w-full relative max-md:mb-4">
    <div :style="`background-image: url('${avatar}')`" class="mb-3 h-20 w-20 rounded-full bg-cover"></div>
    <h3 class="text-xl font-medium dark:text-white max-md:absolute top-4 left-28">
      {{ name }}
    </h3>
    <p class="max-md:absolute top-10 left-28">
      {{ title }}
    </p>
    <p class="mb-4 mt-2 flex items-center max-md:absolute top-14 left-28">
      <play-icon class="heroicon--small stroke-[1px]" />
      {{ plays }} plays
    </p>
    <action-button @click="toggleFollow" class="w-full">{{ followed ? 'Unfollow' : 'Follow' }}</action-button>
  </div>
</template>

<script setup>
import ActionButton from "./ActionButton.vue";
import { PlayIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

defineProps({
  id: Number,
  name: String,
  title: String,
  avatar: String,
  plays: [String, Number]
});

const followed = ref(false)
const emit = defineEmits(['follow'])

const toggleFollow = () => {
  followed.value = !followed.value;
  emit('follow', followed.value);
}
</script>
