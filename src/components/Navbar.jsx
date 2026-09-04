import { useEffect, useState } from 'react'
import Button from './ui/Button'

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['projects', 'Projects'],
  ['expertise', 'Expertise'],
  ['process', 'Process'],
  ['contact', 'Contact'],
]

function ArrowIcon() {
  return <svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9" /></svg>
}

function MoonIcon() {
  return <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current stroke-2"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8z" /></svg>
}

function SunIcon() {
  return <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [light, setLight] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' } catch { return false }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', !light)
    document.documentElement.style.colorScheme = light ? 'light' : 'dark'
    try { localStorage.setItem('portfolio-theme', light ? 'light' : 'dark') } catch {}
  }, [light])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean)
    const spy = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      }),
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach(section => spy.observe(section))
    return () => spy.disconnect()
  }, [])

  return (
    <>
      <header className="fixed left-1/2 top-4 z-[80] flex h-[64px] w-[95vw] max-w-[1400px] -translate-x-1/2 animate-nav-in items-center justify-between rounded-full border border-black/[.1] bg-[linear-gradient(135deg,rgba(255,255,255,.90),rgba(255,255,255,.62)_45%,rgba(255,138,30,.06))] px-3 pl-[19px] shadow-[inset_0_1px_0_#fff,0_24px_60px_-24px_rgba(23,19,15,.25)] backdrop-blur-[26px] after:pointer-events-none after:absolute after:left-[7%] after:right-[7%] after:top-0 after:h-px after:bg-[linear-gradient(90deg,transparent,#fff,transparent)] dark:border-white/[.15] dark:bg-[linear-gradient(135deg,rgba(255,255,255,.115),rgba(255,255,255,.032)_43%,rgba(255,138,30,.055))] dark:shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_26px_60px_-24px_rgba(0,0,0,.9),0_0_0_1px_rgba(255,138,30,.07)] dark:after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent)] sm:h-[76px] sm:pl-7">
        <a href="#home" className="relative z-10 whitespace-nowrap text-[22px] font-black tracking-[-.04em] sm:text-[27px]">
          YOUR<span className="bg-[linear-gradient(90deg,#FFB347,#FF6A00,#FFB347)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">NAME</span>
        </a>

        <nav className="hidden lg:block">
          <ul className="relative z-10 flex h-full list-none items-center gap-4 xl:gap-6">
            {navItems.map(([id, label]) => {
              const selected = active === id
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative py-2 text-[13px] font-bold transition-colors duration-200 after:absolute after:-bottom-[9px] after:left-0 after:right-0 after:h-[3px] after:origin-left after:rounded-full after:bg-orange after:shadow-[0_0_12px_#FF6A00] after:transition-transform after:duration-300 after:ease-premium xl:text-sm ${selected ? 'text-ink after:scale-x-100 dark:text-white' : 'text-black/[.65] after:scale-x-0 hover:text-ink hover:after:scale-x-100 dark:text-white/[.7] dark:hover:text-white'}`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="relative z-10 flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setLight(value => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/[.15] bg-black/[.035] text-ink transition hover:border-orange/[.4] hover:bg-orange/[.08] dark:border-white/[.15] dark:bg-white/[.055] dark:text-white sm:h-11 sm:w-11"
          >
            {light ? <SunIcon /> : <MoonIcon />}
          </button>
          <Button href="#contact" className="hidden lg:inline-flex">Let's Talk <ArrowIcon /></Button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(value => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/[.15] bg-black/[.035] text-ink dark:border-white/[.15] dark:bg-white/[.05] dark:text-white sm:h-11 sm:w-11 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </header>

      <div className={`fixed left-1/2 top-[89px] z-[79] w-[min(94vw,430px)] -translate-x-1/2 rounded-[25px] border border-black/[.1] bg-white/[.95] p-3.5 shadow-2xl backdrop-blur-[22px] transition-all duration-300 dark:border-white/[.15] dark:bg-[#0f0c0b]/[.95] sm:top-[101px] lg:hidden ${mobileOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-3 opacity-0 pointer-events-none'}`}>
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMobileOpen(false)}
            className="block rounded-[13px] px-[15px] py-[13px] font-bold text-black/[.65] transition hover:bg-orange/[.1] hover:text-ink dark:text-white/[.7] dark:hover:text-white"
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
