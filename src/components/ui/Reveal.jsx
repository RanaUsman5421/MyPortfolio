import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.11 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-[850ms] ease-premium motion-reduce:!translate-y-0 motion-reduce:!opacity-100 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-[34px] opacity-0'}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
