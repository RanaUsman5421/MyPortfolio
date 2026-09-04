import Button from './ui/Button'
import Reveal from './ui/Reveal'

export default function CTASection() {
  return (
    <section className="pb-28 pt-[60px]">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-orange/[.4] bg-white px-[26px] py-[48px] text-center shadow-[0_22px_70px_-45px_rgba(23,19,15,.35)] dark:bg-[#090808] sm:px-[clamp(26px,6vw,75px)] sm:py-[clamp(48px,7vw,88px)]">
          <span className="pointer-events-none absolute -inset-[45%] animate-spin-13 bg-[conic-gradient(from_0deg,transparent_0_74%,rgba(255,138,30,.38)_86%,transparent)]" />
          <span className="pointer-events-none absolute inset-px rounded-[35px] bg-[linear-gradient(135deg,#fff,#f5f1eb)] dark:bg-[linear-gradient(135deg,#1a1210,#090808)]" />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-[18ch] text-[clamp(36px,5vw,68px)] font-black uppercase leading-[.98] tracking-[-.045em]">HAVE A PRODUCT THAT SHOULD FEEL <span className="text-orange">SMARTER?</span></h2>
            <p className="mx-auto mb-[29px] mt-[18px] max-w-[56ch] text-black/[.65] dark:text-white/[.7]">Turn the idea, workflow or existing platform into a clearer, more advanced digital system.</p>
            <div className="flex flex-wrap justify-center gap-3"><Button href="#contact">Start a conversation <svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg></Button><Button href="#projects" variant="ghost">Explore projects</Button></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
