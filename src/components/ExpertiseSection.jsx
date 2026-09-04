import { expertiseItems } from '../data/content'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-[82px] sm:py-28">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <SectionHeading
          kicker="EXPERTISE"
          title={<>FROM STRATEGY TO <span className="text-orange">EXECUTION.</span></>}
          description="A portfolio built around the intersection of product, business operations, UX and automation."
        />
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-3">
          {expertiseItems.map(item => (
            <Reveal
              as="article"
              key={item.n}
              data-cursor-hot="true"
              className="group relative min-h-[260px] overflow-hidden rounded-3xl border border-black/[.1] bg-white/[.65] p-[26px] shadow-[0_18px_40px_-30px_rgba(23,19,15,.25)] transition duration-[400ms] hover:-translate-y-1.5 hover:border-orange/[.4] hover:bg-orange/[.05] dark:border-white/[.09] dark:bg-white/[.026] dark:shadow-none"
            >
              <div className="grid h-[50px] w-[50px] place-items-center rounded-2xl bg-[linear-gradient(135deg,#FF8A1E,#B23A00)] shadow-[0_0_22px_rgba(255,106,0,.33)]">
                <svg viewBox="0 0 24 24" className="h-[23px] w-[23px] fill-none stroke-white stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"><path d={item.path}/></svg>
              </div>
              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mt-[9px] text-[13px] text-black/[.65] dark:text-white/[.7]">{item.desc}</p>
              <span className="absolute bottom-1.5 right-5 font-display text-[80px] leading-none text-orange/[.08] dark:text-orange/[.07]">{item.n}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
