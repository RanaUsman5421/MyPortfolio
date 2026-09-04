import { useEffect, useRef } from 'react'

function CircuitCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let points = []
    let raf = 0

    const size = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      points = Array.from(
        { length: Math.min(92, Math.floor((width * height) / 17000)) },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.3 + 0.4,
        }),
      )
    }

    const frame = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of points) {
        if (!reduce) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }
      }
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i]
          const b = points[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(255,138,30,${(1 - d / 130) * 0.18})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const p of points) {
        ctx.fillStyle = 'rgba(255,179,71,.56)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    size()
    window.addEventListener('resize', size, { passive: true })
    frame()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-50 dark:opacity-[.82]" />
}

function CustomCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const cursor = ref.current
    if (!cursor) return
    if (!window.matchMedia('(pointer:fine)').matches) {
      cursor.style.display = 'none'
      return
    }

    const move = event => {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    }
    const over = event => {
      if (!event.target.closest('a,button,[data-cursor-hot="true"]')) return
      cursor.classList.remove('h-[18px]', 'w-[18px]', 'bg-transparent', 'border-amber/[.8]')
      cursor.classList.add('h-[42px]', 'w-[42px]', 'bg-orange/[.12]', 'border-orange')
    }
    const out = event => {
      if (!event.target.closest('a,button,[data-cursor-hot="true"]')) return
      cursor.classList.remove('h-[42px]', 'w-[42px]', 'bg-orange/[.12]', 'border-orange')
      cursor.classList.add('h-[18px]', 'w-[18px]', 'bg-transparent', 'border-amber/[.8]')
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return <div ref={ref} className="pointer-events-none fixed -left-10 -top-10 z-[200] h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/[.8] bg-transparent transition-[width,height,background-color,border-color] duration-200 motion-reduce:hidden" />
}

function Ring({ className = '', dot = true }) {
  return (
    <i className={`absolute rounded-full border border-orange2/[.6] ${className}`}>
      {dot && <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-amber shadow-[0_0_15px_#FFB347]" />}
    </i>
  )
}

export default function AmbientBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(23,19,15,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(23,19,15,.05)_1px,transparent_1px)] [background-size:64px_64px] dark:bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)]" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <i className="absolute -right-[16vw] -top-[18vw] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,#FF6A00,transparent_65%)] opacity-[.18] blur-[120px] mix-blend-screen animate-drift dark:opacity-30" />
        <i className="absolute -left-[16vw] top-[40vh] h-[44vw] w-[44vw] rounded-full bg-[radial-gradient(circle,#FF8A1E,transparent_62%)] opacity-[.10] blur-[120px] mix-blend-screen animate-drift-reverse dark:opacity-15" />
      </div>
      <div className="pointer-events-none fixed -right-[12vw] -top-[13vw] z-0 h-[62vw] w-[62vw] opacity-[.10] dark:opacity-[.18]">
        <Ring className="inset-0 animate-spin-42" />
        <Ring className="inset-[12%] animate-spin-64 border-dashed" />
        <Ring className="inset-[25%] animate-spin-30" />
      </div>
      <div className="pointer-events-none fixed left-[-20%] right-[-20%] z-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(255,138,30,.45),rgba(255,255,255,.65),rgba(255,138,30,.45),transparent)] opacity-[.10] blur-[1px] animate-beam dark:opacity-20" />
      <div className="pointer-events-none fixed left-[-20%] right-[-20%] z-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(255,138,30,.45),rgba(255,255,255,.65),rgba(255,138,30,.45),transparent)] opacity-[.06] blur-[1px] animate-beam-delay dark:opacity-[.11]" />
      <CircuitCanvas />
      <CustomCursor />
    </>
  )
}
