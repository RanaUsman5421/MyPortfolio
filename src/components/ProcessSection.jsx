import { processSteps } from '../data/content'
import Reveal from './ui/Reveal'
import { Kicker } from './ui/SectionHeading'

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-[82px] sm:py-28">
      <div className="mx-auto grid w-[92vw] max-w-[1280px] grid-cols-1 items-start gap-[50px] lg:grid-cols-[.72fr_1.28fr]">
        <Reveal className="lg:sticky lg:top-[130px]">
          <Kicker>MY PROCESS</Kicker>
          <h2 className="text-[clamp(38px,4vw,58px)] font-black uppercase leading-[.98] tracking-[-.045em]">COMPLEXITY IN. <span className="text-orange">CLARITY OUT.</span></h2>
          <p className="mt-[18px] text-black/[.65] dark:text-white/[.7]">I prefer a structured path from business problem to digital system. It keeps design grounded, prevents feature clutter and makes the final product easier to build and scale.</p>
        </Reveal>
        <div className="flex flex-col gap-3.5">
          {processSteps.map(([no, title, desc, tag]) => (
            <Reveal key={no} data-cursor-hot="true" className="grid grid-cols-[54px_1fr] items-center gap-[17px] rounded-[22px] border border-black/[.1] bg-white/[.65] p-5 shadow-[0_16px_40px_-32px_rgba(23,19,15,.25)] transition duration-300 hover:translate-x-1.5 hover:border-orange/[.4] hover:bg-orange/[.05] dark:border-white/[.09] dark:bg-transparent dark:bg-[linear-gradient(160deg,rgba(255,255,255,.04),rgba(255,255,255,.018))] dark:shadow-none sm:grid-cols-[68px_1fr_auto]">
              <div className="grid h-12 w-12 place-items-center rounded-[18px] border border-orange/[.4] bg-orange/[.08] text-sm font-black text-[#a85b13] dark:text-amber sm:h-14 sm:w-14">{no}</div>
              <div><h3 className="text-lg font-bold">{title}</h3><p className="mt-1 text-[13px] text-black/[.65] dark:text-white/[.7]">{desc}</p></div>
              <span className="hidden text-[10px] font-extrabold tracking-[.08em] text-black/[.4] dark:text-white/[.45] sm:block">{tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
