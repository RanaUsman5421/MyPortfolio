const base = 'group relative inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-extrabold transition-all duration-300 ease-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/[.7]'
const solid = 'bg-[linear-gradient(135deg,#FF8A1E,#FF6A00_60%,#df5900)] text-white shadow-[0_13px_34px_-12px_rgba(255,106,0,.9),inset_0_1px_0_rgba(255,255,255,.3)] hover:-translate-y-[3px] hover:shadow-[0_22px_52px_-12px_rgba(255,106,0,1),0_0_0_6px_rgba(255,138,30,.10)]'
const ghost = 'border border-black/[.15] bg-white text-ink shadow-none backdrop-blur-[10px] hover:-translate-y-[3px] hover:border-orange/[.4] hover:bg-orange/[.08] dark:border-white/[.15] dark:bg-white/[.045] dark:text-white dark:hover:bg-orange/[.09]'

export default function Button({ href, variant = 'solid', className = '', children, magnetic = false, ...props }) {
  const classes = `${base} ${variant === 'ghost' ? ghost : solid} ${className}`
  const content = (
    <>
      {variant !== 'ghost' && <span aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-full border-[1.5px] border-amber/[.6] animate-button-ring" />}
      <span className="relative z-10 inline-flex items-center gap-2.5 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2.3] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]">{children}</span>
    </>
  )
  if (href) return <a href={href} className={classes} data-magnetic={magnetic ? 'true' : undefined} {...props}>{content}</a>
  return <button className={classes} data-magnetic={magnetic ? 'true' : undefined} {...props}>{content}</button>
}
