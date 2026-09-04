import { useEffect } from 'react'

export default function useMagneticButtons() {
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    const buttons = [...document.querySelectorAll('[data-magnetic="true"]')]
    const cleanups = buttons.map(button => {
      const move = event => {
        const r = button.getBoundingClientRect()
        const x = (event.clientX - r.left - r.width / 2) * 0.15
        const y = (event.clientY - r.top - r.height / 2) * 0.18
        button.style.transform = `translate(${x}px,${y}px) scale(1.02)`
      }
      const leave = () => { button.style.transform = '' }
      button.addEventListener('mousemove', move)
      button.addEventListener('mouseleave', leave)
      return () => {
        button.removeEventListener('mousemove', move)
        button.removeEventListener('mouseleave', leave)
      }
    })
    return () => cleanups.forEach(fn => fn())
  }, [])
}
