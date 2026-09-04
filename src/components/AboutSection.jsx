import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { Kicker } from './ui/SectionHeading'

const points = [
  ['Business-first', 'Features start from operational problems, not trends.'],
  ['Premium UX', 'Complex systems should still feel clear and refined.'],
  ['Automation-led', 'Reduce manual steps wherever the workflow allows.'],
  ['Growth-aware', 'Every product should connect back to business value.'],
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-[82px] sm:py-28">
      <div className="mx-auto grid w-[92vw] max-w-[1280px] grid-cols-1 items-center gap-[58px] lg:grid-cols-[.9fr_1.1fr]">
        <Reveal className="relative min-h-[460px] overflow-hidden rounded-[34px] border border-orange/[.4] bg-[linear-gradient(155deg,#fff,#f6f3ef)] shadow-[0_40px_110px_-48px_rgba(255,106,0,.25)] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(23,19,15,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,19,15,.035)_1px,transparent_1px)] before:[background-size:38px_38px] dark:bg-[linear-gradient(155deg,#1c1714,#0c0a09)] dark:shadow-[0_40px_110px_-48px_rgba(255,106,0,.48)] dark:before:bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] lg:min-h-[520px]">
          <div className="absolute left-1/2 top-[48%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/[.4] bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.28),rgba(255,106,0,.2)_42%,rgba(255,106,0,.05)_68%)] shadow-[inset_0_0_50px_rgba(255,138,30,.22),0_0_70px_rgba(255,106,0,.25)]">
            <span className="absolute -inset-[45px] animate-spin-24 rounded-full border border-amber/[.35]" />
            <span className="absolute -inset-[82px] animate-spin-39 rounded-full border border-dashed border-amber/[.35]" />
          </div>
          <div className="absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-1/2 text-center">
            <b className="text-[54px] font-black leading-[.85] tracking-[-.05em]">BUILD<br/><span className="text-orange">SMART</span></b>
            <small className="mt-3 block text-[11px] font-extrabold tracking-[.13em] text-[#a85b13] dark:text-amber">STRATEGY → SYSTEM → GROWTH</small>
          </div>
          {[
            ['PRODUCT', 'left-6 top-7'],
            ['OPERATIONS', 'right-6 top-[110px]'],
            ['AUTOMATION', 'bottom-[42px] left-7'],
            ['GROWTH', 'bottom-[92px] right-7'],
          ].map(([label, pos]) => (
            <span key={label} className={`absolute z-20 rounded-[14px] border border-black/[.15] bg-white/[.9] px-[13px] py-2.5 text-[11px] font-extrabold shadow-sm backdrop-blur-xl dark:border-white/[.15] dark:bg-[#110e0c]/[.85] ${pos}`}>{label}</span>
          ))}
        </Reveal>

        <Reveal>
          <Kicker>ABOUT ME</Kicker>
          <h2 className="text-[clamp(38px,4.4vw,64px)] font-black uppercase leading-[.98] tracking-[-.045em]">BUILDING WHERE <span className="text-orange">AI MEETS BUSINESS.</span></h2>
          <p className="mt-[22px] max-w-[62ch] text-[17px] text-black/[.65] dark:text-white/[.7]">My work sits between product direction, operations, automation and interface design. I enjoy taking a complicated business workflow, finding where time is being lost, and turning it into a cleaner digital system that people can actually use.</p>
          <p className="mt-4 max-w-[62ch] text-[17px] text-black/[.65] dark:text-white/[.7]">I focus on practical AI — not AI as decoration. The goal is to create tools that save effort, improve visibility, speed up decisions and make the business experience feel more advanced.</p>
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map(([title, text]) => (
              <div key={title} className="rounded-[18px] border border-black/[.1] bg-white/[.6] p-[17px] transition hover:border-orange/[.35] hover:bg-orange/[.04] dark:border-white/[.09] dark:bg-white/[.027]">
                <b className="block text-sm">{title}</b>
                <small className="mt-[5px] block text-xs text-black/[.6] dark:text-white/[.7]">{text}</small>
              </div>
            ))}
          </div>
          <div className="mt-[29px] flex flex-wrap gap-3"><Button href="#projects">See my work</Button><Button href="#contact" variant="ghost">Discuss a project</Button></div>
        </Reveal>
      </div>
    </section>
  )
}
