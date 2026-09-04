import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    const onKey = event => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <div
      onClick={event => { if (event.target === event.currentTarget) onClose() }}
      className={`fixed inset-0 z-[120] grid place-items-center bg-black/[.8] p-5 backdrop-blur-[14px] transition-opacity duration-300 ${project ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div className={`relative max-h-[90vh] w-full max-w-[850px] overflow-auto rounded-[28px] border border-orange/[.4] bg-[linear-gradient(160deg,#fff,#f6f3ef)] p-[34px] shadow-[0_40px_120px_-30px_rgba(255,106,0,.35)] transition duration-[450ms] ease-premium dark:bg-[linear-gradient(160deg,#171412,#0a0909)] dark:shadow-[0_40px_120px_-30px_rgba(255,106,0,.55)] ${project ? 'translate-y-0 scale-100' : 'translate-y-6 scale-[.98]'}`}>
        <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-black/[.1] bg-black/[.03] text-xl text-ink transition hover:border-orange hover:bg-orange hover:text-white dark:border-white/[.09] dark:bg-white/[.05] dark:text-white">×</button>
        <span className="text-[11px] font-black tracking-[.1em] text-[#a85b13] dark:text-amber">{project?.label ?? ''}</span>
        <h3 className="mb-[13px] mt-[11px] text-[38px] font-bold leading-none">{project?.title ?? ''}</h3>
        <p className="text-sm text-black/[.65] dark:text-white/[.7]">{project?.description ?? ''}</p>
        <ul className="mt-5 grid list-none grid-cols-1 gap-2.5 sm:grid-cols-2">
          {project?.list.map(item => <li key={item} className="rounded-[14px] border border-black/[.1] bg-black/[.02] p-[13px] text-xs font-bold before:mr-2 before:text-[#a85b13] before:content-['✓'] dark:border-white/[.09] dark:bg-white/[.03] dark:before:text-amber">{item}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project?.modalChips.map(chip => <span key={chip} className="rounded-full border border-orange/[.4] bg-orange/[.07] px-3 py-2 text-[11px] font-extrabold">{chip}</span>)}
        </div>
      </div>
    </div>
  )
}
