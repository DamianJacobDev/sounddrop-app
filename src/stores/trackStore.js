import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useTrackStore = defineStore('track', () => {
    const tracks = ref([
        {
            id: 1,
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
            tags: ['ambient', 'lofi']
        },
        {
            id: 2,
            title: 'Take me to the moon',
            description: 'A heartfelt ballad with emotional melodies and smooth vocals.',
            artist: 'Luna Vega',
            role: 'Singer/Songwriter',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1604582843496-3ddb42d312e0?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-08-20T10:00:00',
            playCount: 120,
            likes: 5,
            likedBy: [],
            comments: [
                {
                    id: 1,
                    user: 'Karol',
                    text: 'Mega sztos!',
                    date: '2025-07-20T12:00:00',
                    avatar: 'https://i.pravatar.cc/40'
                },
                {
                    id: 2,
                    user: 'Beyonce',
                    text: 'You go girl!',
                    date: '2025-07-20T12:00:00',
                    avatar: 'https://i.pravatar.cc/40',
                    replies: [
                        {
                            id: 1,
                            user: 'Luna Vega',
                            text: 'Thank you so much! <3',
                            date: '2025-07-20T12:00:00',
                            avatar: 'https://i.pravatar.cc/40'
                        },
                    ]
                }
            ],
            tags: ['ballad', 'pop', 'vocal harmonies']
        },
        {
            id: 3,
            title: 'Neon Skyline',
            description: 'Retro synths and pulsating beats for a late-night drive.',
            artist: 'ECHO',
            role: 'Beatmaker',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1633130664306-2e6acb58d308?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-07-25T08:30:00',
            playCount: 45,
            likes: 8,
            likedBy: [],
            comments: [],
            tags: ['synthwave', 'retrowave']
        },
        {
            id: 4,
            title: 'Fragments',
            description: 'Emotive piano and cinematic strings collide in this piece.',
            artist: 'Celeste Nova',
            role: 'Singer/Songwriter',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1667249744516-d604786b8e4a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-07-26T14:15:00',
            playCount: 67,
            likes: 12,
            likedBy: [],
            comments: [],
            tags: ['cinematic', 'instrumental']
        },
        {
            id: 5,
            title: 'Glow',
            description: 'A chill vibe with soft pads and gentle vocal layers.',
            artist: 'Amelia Rae',
            role: 'Singer/Songwriter',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1533497374533-d860dceecf74?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-07-27T09:00:00',
            playCount: 34,
            likes: 6,
            likedBy: [],
            comments: [],
            tags: ['lofi', 'chill']
        },
        {
            id: 6,
            title: 'Gravity',
            description: 'Dark basslines meet hypnotic rhythms in this track.',
            artist: 'Orion Drift',
            role: 'Singer/Songwriter',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1518573484273-eb277fe4b036?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-07-28T16:45:00',
            playCount: 78,
            likes: 15,
            likedBy: [],
            comments: [],
            tags: ['electronic', 'dark']
        },
        {
            id: 7,
            title: 'Morning Dew',
            description: 'Peaceful melodies perfect for slow mornings and reflection.',
            artist: 'Zara Flux',
            role: 'Singer/Songwriter',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1470137430626-983a37b8ea46?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-07-29T06:10:00',
            playCount: 23,
            likes: 4,
            likedBy: [],
            comments: [],
            tags: ['acoustic', 'calm']
        },
        {
            id: 8,
            title: 'Pulse',
            description: 'High-energy beat with modern electronic grooves.',
            artist: 'Noir & Jade',
            role: 'Singer/Songwriter',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1645411913501-925af81083e8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-07-30T18:00:00',
            playCount: 150,
            likes: 21,
            likedBy: [],
            comments: [],
            tags: ['edm', 'club']
        },
        {
            id: 9,
            title: 'Solitude',
            description: 'A haunting soundscape exploring themes of loneliness.',
            artist: 'Velvet Echoes',
            role: 'Singer/Songwriter',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1494783435443-c15feee0a80a?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-07-31T11:40:00',
            playCount: 60,
            likes: 9,
            likedBy: [],
            comments: [],
            tags: ['ambient', 'dark']
        },
        {
            id: 10,
            title: 'Sunlight',
            description: 'Bright chords and uplifting progressions to start your day.',
            artist: 'Chloe',
            role: 'Singer/Songwriter',
            link: '/audio/demo.mp3',
            cover: 'https://images.unsplash.com/photo-1593182020110-61d64e0df341?q=80&w=613&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            createdAt: '2025-08-01T07:20:00',
            playCount: 95,
            likes: 18,
            likedBy: [],
            comments: [],
            tags: ['uplifting', 'pop']
        },
    ])


    const getMostPlayed = computed(() =>
        [...tracks.value].sort((a, b) => b.playCount - a.playCount).slice(0, 10)
    )

    const getRecentlyAdded = computed(() =>
        [...tracks.value].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4)
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

    const removeComment = (trackId, commentId) => {
        const track = tracks.value.find(t => t.id === trackId)
        if (!track) return

        const removeRecursive = (commentsArray, idToRemove) => {
            return commentsArray
                .filter(c => c.id !== idToRemove)
                .map(c => ({
                    ...c,
                    replies: c.replies ? removeRecursive(c.replies, idToRemove) : []
                }))
        }

        track.comments = removeRecursive(track.comments, commentId)
    }

    const likeTrack = (trackId) => {
        const track = tracks.value.find(t => t.id === trackId)
        if (track) track.likes++
    }

    const unlikeTrack = (trackId) => {
        const track = tracks.value.find(t => t.id === trackId)
        if (track && track.likes > 0) track.likes--
    }

    const currentTrack = ref(null)
    const playTrack = (track) => {
        console.log('playTrack called with:', track);
        currentTrack.value = track;
    }
    return {
        tracks,
        getMostPlayed,
        getRecentlyAdded,
        currentTrack,
        playTrack,
        addTrack,
        incrementPlay,
        addComment,
        removeComment,
        likeTrack,
        unlikeTrack
    }
})
