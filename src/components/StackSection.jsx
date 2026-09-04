import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const cards = [
  {
    title: 'Product & Experience',
    desc: 'Planning, interface architecture, prototyping and front-end systems.',
    items: ['Product Strategy','UX Flows','Figma','HTML/CSS/JS','React Concepts','Responsive Design'],
  },
  {
    title: 'AI, Data & Automation',
    desc: 'Connected workflows, intelligent actions, dashboards and business integrations.',
    items: ['AI Workflows','Automation Logic','APIs','CRM Flows','Analytics','Business Dashboards'],
  },
]

export default function StackSection() {
  return (
    <section className="relative py-[82px] sm:py-28">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <SectionHeading
          kicker="TOOLS & STACK"
          title={<>A FLEXIBLE <span className="text-orange">PRODUCT TOOLKIT.</span></>}
          description="The exact stack depends on the project. The focus is on choosing tools that support the workflow rather than forcing every idea into the same template."
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map(card => (
            <Reveal key={card.title} className="rounded-[26px] border border-black/[.1] bg-white/[.65] p-7 shadow-[0_18px_44px_-34px_rgba(23,19,15,.25)] dark:border-white/[.09] dark:bg-transparent dark:bg-[linear-gradient(160deg,rgba(255,255,255,.045),rgba(255,255,255,.016))] dark:shadow-none">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-[13px] text-black/[.65] dark:text-white/[.7]">{card.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {card.items.map(item => <span key={item} className="rounded-xl border border-black/[.15] bg-black/[.025] px-[13px] py-[9px] text-xs font-bold transition duration-300 hover:-translate-y-0.5 hover:border-orange/[.4] hover:bg-orange/[.08] dark:border-white/[.15] dark:bg-white/[.038]">{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
