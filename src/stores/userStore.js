import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useUserStore = defineStore('user', () => {
    const userData = ref({
            id: 1,
            name: 'Damian Jacob',
            username: '7aco3',
            password: '123456',
            email: 'jacob@gmail.com',
            role: 'Singer/Songwriter',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                cover: 'https://images.unsplash.com/photo-1629058546203-f38da6cfff04?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                cover: 'https://images.unsplash.com/photo-1698202711230-9cbff0d5151f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                createdAt: '2025-07-20T10:00:00',
                playCount: 10,
                likes: 5,
                likedBy: [],
                comments: [],
                tags: ['pop', 'ballad', 'romantic']
            },
            
        ]
    })
    const subscribed = ref([
        {id: 1,
        name: 'Losia',
            role: 'Singer/Songwriter',
            plays: 1277,
            avatar: 'https://img.freepik.com/darmowe-wektory/czerwona-kobieta-z-warkoczami_1308-179342.jpg?t=st=1753203038~exp=1753206638~hmac=439816287ab7020cdb24cb59d8a60e53a67694ab4356535464c1b5b4dac366e7&w=1800'
        },
        {id: 2,
            name: 'John Snow',
            role: 'Singer/Songwriter',
            plays: 4024,
            avatar: 'https://img.freepik.com/darmowe-wektory/usmiechniety-mlody-czlowiek-w-okularach_1308-174373.jpg?t=st=1753203451~exp=1753207051~hmac=e238020e80a26b87c1e24a3eab3abe1498a984b8618d34b0518d136844ebf4a8&w=1800'
        },
    ])

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