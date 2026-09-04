export default function Marquee() {
  const items = ['AI PRODUCT','AUTOMATION','GROWTH SYSTEMS','DIGITAL EXPERIENCE','AI PRODUCT','AUTOMATION','GROWTH SYSTEMS','DIGITAL EXPERIENCE']
  return (
    <section aria-hidden="true" className="group relative overflow-hidden border-y border-black/[.1] py-5 dark:border-white/[.09] sm:pb-7">
      <div className="flex w-max animate-marquee gap-[35px] group-hover:[animation-play-state:paused] sm:gap-[55px]">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`flex items-center gap-[35px] whitespace-nowrap font-display text-[76px] uppercase leading-[.9] sm:gap-[55px] sm:text-[clamp(68px,9vw,128px)] after:h-[18px] after:w-[18px] after:rotate-45 after:bg-orange after:shadow-[0_0_18px_#FF6A00] ${index % 2 ? 'text-orange [text-shadow:0_0_45px_rgba(255,106,0,.35)]' : 'text-transparent [-webkit-text-stroke:1.4px_rgba(255,138,30,.82)]'}`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
