<template>
  <div class="flex flex-col items-center rounded-xl p-4 shadow-md dark:bg-gray-900">
    <div class="mb-3 h-20 w-20 rounded-full bg-primary"></div>
    <h3 class="text-xl font-semibold dark:text-white">
      {{ name }}
    </h3>
    <p>
      {{ title }}
    </p>
    <p class="mb-4 flex items-center">
      <play-icon class="w-4 h-4 stroke-[1px]" />
      {{ plays }} plays
    </p>
    <action-button>Follow</action-button>
  </div>
</template>

<script setup>
import ActionButton from "./ActionButton.vue";
import { PlayIcon } from "@heroicons/vue/24/outline";

defineProps({
  name: String,
  title: String,
  avatar: String,
  plays: [String, Number]
});
</script>
