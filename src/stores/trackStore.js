import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTrackStore = defineStore('track', () => {
    const tracks = ref([
        {
            id: '1',
            title: 'Dreamscape',
            artist: 'Damian Jacob',
            link: '/audio/demo.mp3',
            cover: 'link to cover',
            createdAt: '2025-07-20T10:00:00',
            playCount: 10,
            likes: 5,
            comments: [
                { id: 1, user: 'Ola', text: 'Super vibe!', date: '2025-07-20T12:00:00', avatar: 'https://i.pravatar.cc/40' }
            ],
            tags: ['ambient', 'lofi']
        },
        {
            id: '2',
            title: 'Take me to the moon',
            artist: 'Damian Jacob',
            link: '/audio/demo.mp3',
            cover: 'link to cover',
            createdAt: '2025-07-20T10:00:00',
            playCount: 10,
            likes: 5,
            comments: [
                { id: 1, user: 'Karol', text: 'Mega sztos!', date: '2025-07-20T12:00:00', avatar: 'https://i.pravatar.cc/40' }
            ],
            tags: ['ballad', 'pop', 'vocal harmonies']
        },
    ])

    const getMostPlayed = computed(() =>
        [...tracks.value].sort((a, b) => b.playCount - a.playCount).slice(0, 10)
    )

    const getRecentlyAdded = computed(() =>
        [...tracks.value].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    )

    const addTrack = (trackData) => {
        const id = Date.now().toString()
        tracks.value.push({
            ...trackData,
            id,
            playCount: 0,
            likes: 0,
            comments: [],
            createdAt: new Date().toISOString()
        })
    }

    const incrementPlay = (trackId) => {
        const track = tracks.value.find(t => t.id === trackId)
        if (track) track.playCount++
    }

    const addComment = (trackId, comment) => {
        const track = tracks.value.find(t => t.id === trackId)
        if (track) track.comments.push(comment)
    }

    const likeTrack = (trackId) => {
        const track = tracks.value.find(t => t.id === trackId)
        if (track) track.likes++
    }

    const unlikeTrack = (trackId) => {
        const track = tracks.value.find(t => t.id === trackId)
        if (track && track.likes > 0) track.likes--
    }

    return {
        tracks,
        getMostPlayed,
        getRecentlyAdded,
        addTrack,
        incrementPlay,
        addComment,
        likeTrack,
        unlikeTrack
    }
})
