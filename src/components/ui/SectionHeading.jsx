import Reveal from './Reveal'

export function Kicker({ children }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange/[.4] bg-orange/[.07] px-[15px] py-2 text-xs font-extrabold tracking-[.09em] text-[#b66214] dark:text-amber">
      <i className="h-[7px] w-[7px] rounded-full bg-orange shadow-[0_0_10px_#FF6A00]" />
      {children}
    </span>
  )
}

export default function SectionHeading({ kicker, title, description }) {
  return (
    <Reveal className="mx-auto mb-[52px] max-w-[860px] text-center">
      <Kicker>{kicker}</Kicker>
      <h2 className="text-[clamp(34px,4.5vw,64px)] font-black uppercase leading-[.98] tracking-[-.045em]">{title}</h2>
      {description && <p className="mx-auto mt-[17px] max-w-[64ch] text-[15px] font-medium text-black/[.65] dark:text-white/[.7] sm:text-[17px]">{description}</p>}
    </Reveal>
  )
}
