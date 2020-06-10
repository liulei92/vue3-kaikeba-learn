import { ref, onMounted, onUnmounted } from 'vue'

export default function useMouseover () {
  const position = ref({ x: 0, y: 0 })

  const handler = (e) => {
    position.value = {
      x: e.pageX,
      y: e.pageY
    }
  }

  onMounted(() => {
    window.addEventListener('mousemove', handler)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handler)
  })

  return {
    position
  }
}
