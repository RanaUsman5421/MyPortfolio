const columns = [
  { title: 'NAVIGATION', links: [['Home','#home'],['About','#about'],['Projects','#projects'],['Expertise','#expertise']] },
  { title: 'WORK', links: [['LionEx Courier','#projects'],['IntellioEra','#projects'],['FieldTrack','#projects'],['AI Social Manager','#projects']] },
  { title: 'CONTACT', links: [['Start a Project','#contact'],['Email','mailto:hello@yourdomain.com'],['Availability','#contact']] },
]

export default function Footer() {
  return (
    <div className="pb-[26px]">
      <footer className="relative mx-auto w-[92vw] max-w-[1240px] overflow-hidden rounded-[32px] border border-black/[.15] bg-white/[.7] px-[25px] pb-6 pt-[35px] shadow-[0_22px_70px_-45px_rgba(23,19,15,.35)] backdrop-blur-[20px] before:absolute before:-bottom-[350px] before:-right-[190px] before:h-[520px] before:w-[520px] before:rounded-full before:bg-[radial-gradient(circle,rgba(255,106,0,.34),transparent_62%)] dark:border-white/[.15] dark:bg-transparent dark:bg-[linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.018))] dark:shadow-none sm:px-[46px] sm:pb-7 sm:pt-12">
        <div className="relative z-10 grid grid-cols-1 gap-[34px] sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="whitespace-nowrap text-[27px] font-black tracking-[-.04em]">YOUR<span className="bg-[linear-gradient(90deg,#FFB347,#FF6A00,#FFB347)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">NAME</span></a>
            <p className="mt-3.5 max-w-[34ch] text-[13px] text-black/[.65] dark:text-white/[.7]">AI product thinking, business automation and advanced digital experiences built around practical operations and growth.</p>
          </div>
          {columns.map(column => (
            <div key={column.title}>
              <h5 className="mb-3.5 text-[11px] font-extrabold tracking-[.09em] text-[#a85b13] dark:text-amber">{column.title}</h5>
              <ul className="flex list-none flex-col gap-[9px]">
                {column.links.map(([label, href]) => <li key={label}><a href={href} className="text-[13px] font-bold text-black/[.65] transition-all duration-200 hover:pl-[5px] hover:text-ink dark:text-white/[.7] dark:hover:text-white">{label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative z-10 mt-[35px] flex flex-wrap justify-between gap-3.5 border-t border-black/[.1] pt-5 text-[11px] font-bold text-black/[.45] dark:border-white/[.09] dark:text-white/[.45]"><span>© 2026 Your Name. All rights reserved.</span><span>Portfolio · Product · AI · Automation</span></div>
      </footer>
    </div>
  )
}
