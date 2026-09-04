import { useEffect, useRef } from 'react'
import portrait from '../assets/portfolio-portrait.png'
import Button from './ui/Button'

function ArrowIcon() {
  return <svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9" /></svg>
}

const meta = ['Product-first thinking', 'Business-focused UX', 'AI & automation mindset']

export default function Hero() {
  const stageRef = useRef(null)
  const portraitRef = useRef(null)

  useEffect(() => {
    const stage = stageRef.current
    const wrap = portraitRef.current
    if (!stage || !wrap || !window.matchMedia('(pointer:fine)').matches) return
    let tx = 0
    let ty = 0
    let mx = 0
    let my = 0
    let raf = 0

    const move = event => {
      const r = stage.getBoundingClientRect()
      tx = (event.clientX - r.left) / r.width - 0.5
      ty = (event.clientY - r.top) / r.height - 0.5
    }
    const leave = () => { tx = 0; ty = 0 }
    const frame = () => {
      mx += (tx - mx) * 0.06
      my += (ty - my) * 0.06
      wrap.style.transform = `rotateY(${mx * 12}deg) rotateX(${-my * 9}deg)`
      raf = requestAnimationFrame(frame)
    }

    stage.addEventListener('mousemove', move)
    stage.addEventListener('mouseleave', leave)
    frame()
    return () => {
      cancelAnimationFrame(raf)
      stage.removeEventListener('mousemove', move)
      stage.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <section id="home" className="relative grid min-h-screen items-center overflow-hidden pb-14 pt-[100px] sm:pt-[118px] lg:pt-32">
      <div className="mx-auto grid w-[92vw] max-w-[1280px] grid-cols-1 items-center gap-7 lg:grid-cols-[.96fr_1.04fr]">
        <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <div className="mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-orange/[.4] bg-orange/[.07] px-3.5 py-2 text-xs font-extrabold tracking-[.06em] text-[#a85b13] dark:text-amber">
            <i className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-[#62c978] shadow-[0_0_12px_#8CE99A]" />
            AI · PRODUCT · AUTOMATION · GROWTH
          </div>
          <h1 className="mx-auto max-w-[10ch] text-[clamp(46px,15vw,70px)] font-black uppercase leading-[.88] tracking-[-.052em] lg:mx-0 lg:max-w-[9.5ch] lg:text-[clamp(54px,6.3vw,94px)]">
            <span className="block overflow-hidden"><b className="block animate-rise">I BUILD</b></span>
            <span className="block overflow-hidden"><b className="block animate-rise text-orange drop-shadow-[0_0_42px_rgba(255,106,0,.32)] [animation-delay:80ms]">SMART</b></span>
            <span className="block overflow-hidden"><b className="block animate-rise [animation-delay:160ms]">DIGITAL</b></span>
            <span className="block overflow-hidden"><b className="block animate-rise [animation-delay:240ms]">SYSTEMS.</b></span>
          </h1>
          <p className="mx-auto my-[25px] max-w-[58ch] text-base font-medium text-black/[.65] dark:text-white/[.7] sm:text-lg lg:mx-0">
            I turn business problems into intelligent products, premium digital experiences and automation-led systems designed for real operations and measurable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button href="#projects" magnetic>Explore Projects <ArrowIcon /></Button>
            <Button href="#about" variant="ghost" magnetic>About Me</Button>
          </div>
          <div className="mt-[34px] flex flex-wrap justify-center gap-6 lg:justify-start">
            {meta.map(item => (
              <div key={item} className="flex items-center gap-[9px] text-xs font-bold text-black/[.45] dark:text-white/[.45]">
                <i className="grid h-[18px] w-[18px] place-items-center rounded-full border border-orange/[.4] bg-orange/[.08] not-italic text-[10px] text-[#a85b13] dark:text-amber">✓</i>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div ref={stageRef} className="relative order-1 mx-auto aspect-square w-full max-w-[540px] [perspective:1200px] lg:order-2 lg:ml-auto lg:mr-0 lg:max-w-[650px]">
          <div className="absolute inset-[20%] animate-halo rounded-full bg-[radial-gradient(circle,rgba(255,106,0,.45),rgba(255,106,0,.12)_42%,transparent_68%)] blur-3xl" />
          <div className="absolute left-1/2 top-1/2 aspect-square w-[86%] animate-ring-20 rounded-full border border-orange2/[.4]">
            <i className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-amber shadow-[0_0_13px_#FFB347]" />
          </div>
          <div className="absolute left-1/2 top-1/2 aspect-square w-[106%] animate-ring-34 rounded-full border border-dashed border-amber/[.25]">
            <i className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-amber shadow-[0_0_13px_#FFB347]" />
          </div>
          <div ref={portraitRef} className="absolute inset-[5%] [transform-style:preserve-3d] transition-transform duration-150">
            <div className="absolute inset-[8%] animate-float overflow-hidden rounded-full drop-shadow-[0_35px_60px_rgba(0,0,0,.65)]">
              <img src={portrait} alt="Professional portfolio portrait" className="block h-full w-full object-contain" />
            </div>
          </div>
          <div className="absolute left-0 top-[19%] animate-chip rounded-full border border-black/[.15] bg-white/[.9] px-3 py-2 text-[10px] font-extrabold shadow-[0_16px_34px_-22px_rgba(0,0,0,.9)] backdrop-blur-xl before:mr-2 before:inline-block before:h-[7px] before:w-[7px] before:rounded-full before:bg-orange before:shadow-[0_0_10px_#FF6A00] dark:border-white/[.15] dark:bg-[#120f0d]/[.85] sm:px-3.5 sm:py-2.5 sm:text-xs [animation-delay:400ms]">AI PRODUCT STRATEGY</div>
          <div className="absolute right-0 top-[31%] animate-chip rounded-full border border-black/[.15] bg-white/[.9] px-3 py-2 text-[10px] font-extrabold shadow-[0_16px_34px_-22px_rgba(0,0,0,.9)] backdrop-blur-xl before:mr-2 before:inline-block before:h-[7px] before:w-[7px] before:rounded-full before:bg-orange before:shadow-[0_0_10px_#FF6A00] dark:border-white/[.15] dark:bg-[#120f0d]/[.85] sm:right-[-2%] sm:px-3.5 sm:py-2.5 sm:text-xs [animation-delay:1300ms]">BUSINESS AUTOMATION</div>
          <div className="absolute bottom-[18%] left-[5%] animate-chip rounded-full border border-black/[.15] bg-white/[.9] px-3 py-2 text-[10px] font-extrabold shadow-[0_16px_34px_-22px_rgba(0,0,0,.9)] backdrop-blur-xl before:mr-2 before:inline-block before:h-[7px] before:w-[7px] before:rounded-full before:bg-orange before:shadow-[0_0_10px_#FF6A00] dark:border-white/[.15] dark:bg-[#120f0d]/[.85] sm:px-3.5 sm:py-2.5 sm:text-xs [animation-delay:2100ms]">GROWTH SYSTEMS</div>
        </div>
      </div>
      <div className="absolute bottom-[18px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-[7px] text-[10px] font-extrabold tracking-[.16em] text-black/[.4] dark:text-white/[.4] lg:flex">
        SCROLL TO EXPLORE
        <i className="h-10 w-px animate-scroll-line bg-gradient-to-b from-orange to-transparent" />
      </div>
    </section>
  )
}
