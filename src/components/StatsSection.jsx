import Reveal from './ui/Reveal'

const stats = [
  ['AI', 'PRODUCT STRATEGY'],
  ['UX', 'PORTALS & EXPERIENCES'],
  ['OPS', 'WORKFLOW AUTOMATION'],
  ['GROW', 'BUSINESS SYSTEMS'],
]

export default function StatsSection() {
  return (
    <section className="relative py-[55px] sm:py-[72px]">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <Reveal className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-3xl border border-black/[.1] bg-white/[.7] px-6 py-7 text-center shadow-[0_20px_50px_-30px_rgba(23,19,15,.25)] transition duration-300 hover:-translate-y-[5px] hover:border-orange/[.4] hover:bg-orange/[.05] dark:border-white/[.09] dark:bg-transparent dark:bg-[linear-gradient(160deg,rgba(255,255,255,.055),rgba(255,255,255,.017))] dark:shadow-none dark:hover:bg-orange/[.055]">
              <b className="block text-[38px] font-black leading-none tracking-[-.04em] text-orange">{value}</b>
              <small className="mt-[9px] block text-xs font-bold tracking-[.04em] text-black/[.65] dark:text-white/[.7]">{label}</small>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
