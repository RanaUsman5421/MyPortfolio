import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const mern = [
  { letter: 'M', name: 'MongoDB', role: 'DATABASE' },
  { letter: 'E', name: 'Express.js', role: 'API FRAMEWORK' },
  { letter: 'R', name: 'React', role: 'USER INTERFACE' },
  { letter: 'N', name: 'Node.js', role: 'SERVER RUNTIME' },
]

const cards = [
  {
    number: '01', title: 'Frontend Development',
    desc: 'Responsive web apps, dashboards and interfaces built for everyday use.',
    items: ['React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Responsive UI'],
    path: 'M3 4h18v16H3zM3 9h18M8 12l-2 2 2 2M16 12l2 2-2 2',
  },
  {
    number: '02', title: 'Backend & Data',
    desc: 'APIs and data layers that connect the interface with business logic.',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'API Integrations'],
    path: 'M4 4h16v6H4zM4 14h16v6H4zM7 7h.01M7 17h.01M10 7h7M10 17h7',
  },
  {
    number: '03', title: 'Software & Automation',
    desc: 'Business applications, desktop software and connected workflows.',
    items: ['Desktop Software', 'Business Applications', 'Workflow Automation', 'Dashboards'],
    path: 'M3 4h18v13H3zM8 21h8M12 17v4M8 8l-2 2 2 2M16 8l2 2-2 2',
  },
]

export default function StackSection() {
  return (
    <section className="relative py-[82px] sm:py-28">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <SectionHeading
          kicker="TOOLS & STACK"
          title={<>MY STACK. <span className="text-orange">YOUR NEXT SOLUTION.</span></>}
          description="MERN at the core, with the tools and development skills to bring web applications, desktop software and business workflows together."
        />
        <Reveal className="relative">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-orange/[.4]" />
            <span className="text-[10px] font-extrabold tracking-[.2em] text-[#a85b13] dark:text-amber">POWERED BY MERN</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-orange/[.4]" />
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-10">
            {mern.map(tool => (
              <div key={tool.name} className="group flex flex-col items-center text-center">
                <div className="relative mb-5 grid h-24 w-24 place-items-center sm:h-28 sm:w-28">
                  <span className="absolute inset-0 rounded-[30px] border border-orange/[.3] bg-orange/[.04] rotate-12 transition-transform duration-500 group-hover:rotate-0 motion-reduce:transition-none" />
                  <span className="absolute inset-2 rounded-[24px] border border-black/[.1] bg-white shadow-[0_12px_30px_-18px_rgba(255,106,0,.5)] dark:border-white/[.12] dark:bg-[#191410]" />
                  <span aria-hidden="true" className="relative text-5xl font-black text-[#a85b13] dark:text-orange">{tool.letter}</span>
                </div>
                <h3 className="text-xl font-extrabold tracking-tight">{tool.name}</h3>
                <p className="mt-2 text-[9px] font-bold tracking-[.16em] text-black/[.55] dark:text-white/[.55]">{tool.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-black/[.55] dark:text-white/[.55]">Four technologies. One connected application.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cards.map(card => (
            <Reveal key={card.title} className="group relative overflow-hidden rounded-[24px] border border-black/[.1] bg-[linear-gradient(145deg,#fff,#f5f0e9)] p-6 shadow-[0_20px_50px_-35px_rgba(23,19,15,.3)] hover:border-orange/[.4] dark:border-white/[.1] dark:bg-[linear-gradient(145deg,#1c1713,#0d0c0b)] dark:shadow-none sm:p-7">
              <span aria-hidden="true" className="absolute left-0 top-7 h-12 w-[3px] rounded-r-full bg-orange" />
              <div className="mb-6 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-orange/[.2] bg-orange/[.08] text-[#a85b13] dark:text-amber">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]"><path d={card.path}/></svg>
                </span>
                <span className="font-display text-5xl leading-none text-orange/[.2] dark:text-orange/[.25]">{card.number}</span>
              </div>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-black/[.65] dark:text-white/[.7]">{card.desc}</p>
              <div className="mt-6 flex flex-col gap-3 border-t border-black/[.1] pt-5 dark:border-white/[.1]">
                {card.items.map(item => <span key={item} className="flex items-center gap-3 text-xs font-bold text-black/[.7] dark:text-white/[.75]"><span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-orange" />{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
