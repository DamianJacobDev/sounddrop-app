<template>
  <div class="flex flex-col items-center rounded-xl p-4 shadow-md dark:bg-gray-900 bg-white text-sm">
    <div :style="`background-image: url('${avatar}')`" class="mb-3 h-20 w-20 rounded-full bg-cover"></div>
    <h3 class="text-xl font-medium dark:text-white">
      {{ name }}
    </h3>
    <p>
      {{ title }}
    </p>
    <p class="mb-4 mt-2 flex items-center">
      <play-icon class="heroicon--small stroke-[1px]" />
      {{ plays }} plays
    </p>
    <action-button class="w-full">Follow</action-button>
  </div>
</template>

<script setup>
import ActionButton from "./ActionButton.vue";
import { PlayIcon } from "@heroicons/vue/24/outline";

defineProps({
  id: Number,
  name: String,
  title: String,
  avatar: String,
  plays: [String, Number]
});
</script>
