<template>
  <div v-for="comment in comments" :key="comment.id">
    <div class="flex gap-3 py-1">
      <img :src="comment.avatar" alt="avatar" class="w-10 h-10 rounded-full" />

      <div class="flex-1">
        <div class="flex justify-between items-center">
          <span class="font-semibold text-sm">{{ comment.user }}</span>
          <button class="text-xs text-red-600 hover:underline">Usuń</button>
        </div>

        <p class="text-sm mt-1">
          {{ comment.text }}
        </p>

        <div class="flex items-center gap-4 mt-2 text-xs text-secondary">
          <button>❤️ {{ comment.likes }}</button>
          <button>Odpowiedz</button>
        </div>
      </div>
    </div>

    <div v-if="comment.replies?.length" class="pl-12">
      <CommentItem :comments="comment.replies" />
    </div>
  </div>
</template>

<script setup>

defineProps({
  comments: Array,
})


</script>
