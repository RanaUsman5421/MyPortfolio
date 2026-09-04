import { principles } from '../data/content'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function PrinciplesSection() {
  return (
    <section className="relative py-[82px] sm:py-28">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <SectionHeading
          kicker="WORKING PRINCIPLES"
          title={<>HOW I THINK ABOUT <span className="text-orange">DIGITAL PRODUCTS.</span></>}
          description="Rather than adding generic testimonials or invented results, this section shows the principles behind the work."
        />
        <div className="relative grid grid-cols-1 gap-[18px] md:grid-cols-2 md:before:absolute md:before:bottom-0 md:before:left-1/2 md:before:top-0 md:before:w-px md:before:bg-[linear-gradient(transparent,rgba(255,138,30,.42),transparent)]">
          {principles.map(([small, title, desc], index) => (
            <Reveal
              as="article"
              key={small}
              className={`relative rounded-3xl border border-black/[.1] bg-white/[.65] p-[25px] shadow-[0_16px_40px_-32px_rgba(23,19,15,.24)] dark:border-white/[.09] dark:bg-white/[.025] dark:shadow-none ${index % 2 ? 'md:mt-[70px]' : ''}`}
            >
              <span className={`absolute top-[29px] hidden h-[9px] w-[9px] rounded-full bg-orange shadow-[0_0_13px_#FF6A00] md:block ${index % 2 ? '-left-[14px]' : '-right-[14px]'}`} />
              <small className="text-[10px] font-extrabold tracking-[.11em] text-[#a85b13] dark:text-amber">{small}</small>
              <h3 className="mt-2 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-[13px] text-black/[.65] dark:text-white/[.7]">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
