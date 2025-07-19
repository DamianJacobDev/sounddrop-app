<template>
  <div class="w-full h-24 px-2 rounded overflow-hidden">
    <div ref="waveform"></div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import WaveSurfer from 'wavesurfer.js'

const props = defineProps({
  link: String,
})

const emit = defineEmits(['duration'])
const waveform = ref(null)
const duration = ref(0)

let wavesurfer

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${mins}:${secs}`
}

onMounted( () => {
  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: '#E7D2CC',
    progressColor: '#B9B7BD',
    barWidth: 2,
    height: 96,
    responsive: true,
  })

  wavesurfer.load(props.link)

  wavesurfer.on('ready', () => {
    duration.value = wavesurfer.getDuration();
    emit('duration', duration.value)
  })
})

onUnmounted(() => {
  wavesurfer?.destroy()
})
</script>
