import { projects } from '../data/projects'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] fill-none stroke-current stroke-[2.2]"><path d="M7 17L17 7M8 7h9v9"/></svg>
}

export default function ProjectsSection({ onOpen }) {
  return (
    <section id="projects" className="relative py-[82px] sm:py-28">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <SectionHeading
          kicker="SELECTED PROJECTS"
          title={<>PRODUCTS BUILT AROUND <span className="text-orange">REAL BUSINESS.</span></>}
          description="Selected product directions across logistics, AI workspaces, field operations, employee monitoring and social automation."
        />
        <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-2">
          {projects.map(project => (
            <Reveal
              as="article"
              key={project.id}
              onClick={() => onOpen(project)}
              data-cursor-hot="true"
              className={`group isolate relative min-h-[430px] cursor-pointer overflow-hidden rounded-[30px] border border-black/[.15] bg-[linear-gradient(160deg,#fff,#f6f3ef)] p-6 shadow-[0_24px_60px_-42px_rgba(23,19,15,.3)] transition-[transform,border-color,box-shadow] duration-500 ease-premium before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(23,19,15,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(23,19,15,.04)_1px,transparent_1px)] before:[background-size:38px_38px] before:[mask-image:radial-gradient(circle_at_78%_30%,#000,transparent_68%)] after:absolute after:-right-[130px] after:-top-[130px] after:-z-10 after:h-[390px] after:w-[390px] after:rounded-full after:bg-[radial-gradient(circle,#FF6A00_0%,transparent_64%)] after:opacity-[.10] after:transition-opacity after:duration-[400ms] hover:-translate-y-2 hover:border-orange/[.4] hover:shadow-[0_34px_80px_-44px_rgba(255,106,0,.55)] hover:after:opacity-[.22] dark:border-white/[.15] dark:bg-[linear-gradient(160deg,#1d1916,#100e0d)] dark:before:bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] dark:after:opacity-[.15] dark:hover:after:opacity-[.28] sm:p-[30px] ${project.featured ? 'lg:col-span-2 lg:min-h-[460px]' : ''}`}
            >
              <div className="relative flex justify-between gap-3 text-[11px] font-extrabold tracking-[.08em] text-black/[.45] dark:text-white/[.45]"><b className="text-[#a85b13] dark:text-amber">{project.number} · {project.metaTitle}</b><span>{project.metaSide}</span></div>
              <div className="absolute right-6 top-[68px] h-[125px] w-[125px] animate-spin-17 rounded-full border border-dashed border-amber/[.4] after:absolute after:left-1/2 after:top-[-4px] after:h-2 after:w-2 after:rounded-full after:bg-amber after:shadow-[0_0_12px_#FFB347] sm:right-7 sm:h-[145px] sm:w-[145px]">
                <span className="absolute inset-7 rotate-45 rounded-[30px] border border-amber/[.4] bg-[linear-gradient(145deg,rgba(255,138,30,.42),rgba(255,106,0,.09))] shadow-[0_0_34px_rgba(255,106,0,.28)]" />
              </div>
              <h3 className={`relative mt-[120px] font-light leading-none tracking-[-.035em] sm:mt-[92px] ${project.featured ? 'text-[clamp(42px,5vw,70px)] lg:max-w-[10ch]' : 'text-[clamp(31px,3vw,46px)]'}`}>{project.title}</h3>
              <p className={`relative mt-3.5 text-sm text-black/[.65] dark:text-white/[.7] ${project.featured ? 'max-w-[60ch] sm:text-[15px]' : 'max-w-[48ch]'}`}>{project.cardDescription}</p>
              <div className="relative mt-[22px] flex flex-wrap gap-2">
                {project.chips.map(chip => <span key={chip} className="rounded-full border border-black/[.15] bg-black/[.025] px-[11px] py-2 text-[11px] font-bold dark:border-white/[.15] dark:bg-white/[.04]">{chip}</span>)}
              </div>
              <div className="absolute bottom-[27px] left-6 right-6 flex items-center justify-between border-t border-black/[.1] pt-[18px] text-xs font-extrabold dark:border-white/[.09] sm:left-[30px] sm:right-[30px]">
                <span>CASE STUDY</span>
                <button type="button" onClick={event => { event.stopPropagation(); onOpen(project) }} className="flex items-center gap-2 border-0 bg-transparent font-extrabold text-current transition group-hover:text-orange">VIEW DETAILS <ArrowIcon /></button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
