import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useUserStore = defineStore('user', () => {
    const userData = ref({
            id: 1,
            name: 'Damian Jacob',
            username: '7aco3',
            password: '123456',
            email: 'jacob@gmail.com',
            bio: 'Singer/Songwriter',
            avatar: '/avatar.png',
            playCount: 748,
            subscribedTo: [],
            subscribers: [{id: 1, name: 'Losia'}, {id: 2, name: 'Singer'}, {id: 3, name: 'Songwriter'}],
        }
    )
    const likedTracks = ref([])
    const playlists = ref({
        liked: [],
        tracks: [
            {
                id: 11,
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
                                user: 'Marcin Nowak',
                                text: 'Yes, this is amazing!',
                                date: '2025-07-20T12:00:00',
                                avatar: 'https://i.pravatar.cc/40',
                                likes: '1',
                                replies: []
                            }
                        ]
                    }
                ],
                tags: ['ambient', 'lofi']
            },
            {
                id: 12,
                title: 'Take me home',
                description: 'An ethereal blend of ambient tones and dreamy textures.',
                artist: 'Damian Jacob',
                role: 'Singer/Songwriter',
                link: '/audio/demo.mp3',
                cover: 'link to cover',
                createdAt: '2025-07-20T10:00:00',
                playCount: 10,
                likes: 5,
                likedBy: [],
                comments: [],
                tags: ['pop', 'ballad', 'romantic']
            },
            
        ]
    })
    const subscribed = ref([])

    const toggleLike = (track) => {
  const index = playlists.liked.findIndex(t => t.id === track.id)
  if (index !== -1) {
    playlists.liked.splice(index, 1)
  } else {
    playlists.liked.push(track)
  }
}

const findTrackById = (id) => {
  return playlists.value.tracks.find(t => t.id === id) ||
         playlists.value.liked.find(t => t.id === id) || null;
}

    return {
        userData,
        likedTracks,
        playlists,
        subscribed,
        toggleLike,
        findTrackById
    }
})