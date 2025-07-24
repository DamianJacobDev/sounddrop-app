<template>
  <div v-for="comment in comments" :key="comment.id">
    <div class="flex gap-3 py-1">
      <img :src="comment.avatar" alt="avatar" class="w-10 h-10 rounded-full" />

      <div class="flex-1">
        <div class="flex justify-between items-center">
          <span class="font-semibold text-sm">{{ comment.user }}</span>
        </div>

        <p class="text-sm mt-1">
          {{ comment.text }}
        </p>

        <div class="flex items-center gap-4 mt-2 text-xs text-secondary">
          <button>❤️ {{ comment.likes }}</button>
          <button @click="showReply(comment.id)">Odpowiedz</button>
          <button @click="trackStore.removeComment(trackId, comment.id)" class="text-xs text-red-600 hover:underline">
            <trash-icon class="heroicon--small" />
          </button>
        </div>
        <input v-if="replyId === comment.id" placeholder="Dodaj odpowiedź" type="text" v-model="replyMsg"/>
      </div>
    </div>

    <div v-if="comment.replies?.length" class="pl-12">
      <CommentItem :comments="comment.replies" :track-id="trackId" />
    </div>
  </div>
</template>

<script setup>
import { useTrackStore } from "../stores/trackStore.js";
const trackStore = useTrackStore();
import { TrashIcon } from "@heroicons/vue/24/outline/index.js";
import {ref} from "vue";

defineProps({
  comments: Array,
  trackId: [String, Number]
})

const replyId = ref(null);
const showReply = (val) => {
  replyId.value = replyId.value === val ? null : val

}

const replyMsg = ref('');


</script>
