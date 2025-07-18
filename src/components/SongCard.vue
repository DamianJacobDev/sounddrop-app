<template>

    <div class="flex items-center justify-between px-4 py-4 rounded-xl border">
        <div class="flex items-center gap-2">
            <span class="w-12 h-12 bg-black/80 inline-flex items-center justify-center rounded-sm group ">
                <PlayCircleIcon
                    class="heroicon opacity-0 group-hover:scale-[1.8] hover:opacity-100 transition-all duration-300 text-gray-200 cursor-pointer" />
            </span>
            <span>{{ title }}</span>
            <span class="artist relative pl-4 text-sm text-gray-500">{{ artist }}</span>
        </div>
        <div class="flex items-center gap-4">
            <span>{{ time }}</span>
            <HeartIcon class="heroicon" />
            <ChatBubbleOvalLeftEllipsisIcon class="heroicon" />
            <EllipsisHorizontalIcon class="heroicon" />
        </div>
    </div>

</template>

<script setup>
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon, PlayCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    title: String,
    artist: String,
    time: String
})
</script>


<style scoped>
.artist::before {
    @apply content-[''] absolute w-1.5 h-1.5 rounded-full bg-gray-500 top-1/2 -translate-y-1/2 -translate-x-4
}
</style>