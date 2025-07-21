import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const likedTracks = ref([])
  const playlists = ref({
    liked: [],
    tracks: [
      {id: '1',
        title: 'Dreamscape',
        description: 'An ethereal blend of ambient tones and dreamy textures.',
        artist: 'Damian Jacob',
        role: 'Singer/Songwriter',
        link: '/audio/demo.mp3',
        cover: 'link to cover',
        createdAt: '2025-07-20T10:00:00',
        playCount: 10,
        likes: 5,
        likedBy: [],
        comments: [
            {
                id: 1,
                user: 'Ola',
                text: 'Super vibe!',
                date: '2025-07-20T12:00:00',
                avatar: 'https://i.pravatar.cc/40',
                likes: '6',
                replies: [
                    {
                        id: 1,
                        user: 'John Smith',
                        text: 'Yes, this is amazing!',
                        date: '2025-07-20T12:00:00',
                        avatar: 'https://i.pravatar.cc/40',
                        likes: '1',
                        replies: []
                    }
                ]
            }
        ],
        tags: ['ambient', 'lofi']}
    ]
  })
  const subscribed = ref([])

  const toggleLike = (trackId) => {
    if (likedTracks.value.includes(trackId)) {
      likedTracks.value = likedTracks.value.filter(id => id !== trackId)
    } else {
      likedTracks.value.push(trackId)
    }
  }

  return {
    likedTracks,
    playlists,
    subscribed,
    toggleLike
  }
})