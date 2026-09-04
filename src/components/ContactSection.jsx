import { useRef, useState } from 'react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const fieldClass = 'w-full rounded-[14px] border border-black/[.15] bg-white px-3.5 py-[13px] text-ink outline-none transition duration-300 placeholder:text-black/[.35] focus:border-orange focus:ring-4 focus:ring-orange/[.09] dark:border-white/[.15] dark:bg-white/[.038] dark:text-white dark:placeholder:text-white/[.35]'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [copyLabel, setCopyLabel] = useState('COPY')
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const send = () => {
    const name = nameRef.current
    const email = emailRef.current
    const message = messageRef.current
    if (!name?.value.trim()) return name?.focus()
    if (!/^\S+@\S+\.\S+$/.test(email?.value.trim() || '')) return email?.focus()
    if ((message?.value.trim().length || 0) < 10) return message?.focus()
    setSent(true)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('macktech28@gmail.com')
      setCopyLabel('COPIED')
    } catch {
      setCopyLabel('SELECT')
    }
    setTimeout(() => setCopyLabel('COPY'), 1300)
  }

  return (
    <section id="contact" className="relative py-[82px] sm:py-28">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <SectionHeading
          kicker="CONTACT"
          title={<>LET&apos;S BUILD SOMETHING <span className="text-orange">USEFUL.</span></>}
          description="Share the business problem, product idea or redesign goal. The form is fully interactive on the front end; connect it to your preferred backend or form service when deploying."
        />
        <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-[.8fr_1.2fr]">
          <Reveal as="aside" className="relative overflow-hidden rounded-[30px] border border-black/[.15] bg-[linear-gradient(160deg,#fff,#f6f3ef)] p-[25px] shadow-[0_22px_70px_-45px_rgba(23,19,15,.35)] after:absolute after:-bottom-[220px] after:-right-[220px] after:h-[380px] after:w-[380px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,106,0,.36),transparent_66%)] dark:border-white/[.15] dark:bg-[linear-gradient(160deg,#191512,#0d0b0a)] dark:shadow-none sm:p-[34px]">
            <h3 className="text-[32px] font-bold leading-[1.05] tracking-[-.03em]">Start with the problem.</h3>
            <p className="mt-[13px] text-sm text-black/[.65] dark:text-white/[.7]">The most useful first message explains what the business is trying to improve, who will use the product and what is currently difficult or manual.</p>
            <div className="relative z-10 mt-[27px] flex flex-col gap-[11px]">
              <div className="flex items-center justify-between gap-[15px] rounded-2xl border border-black/[.1] bg-black/[.02] px-4 py-[15px] dark:border-white/[.09] dark:bg-white/[.03]">
                <div><span className="block text-xs font-bold text-black/[.45] dark:text-white/[.45]">EMAIL</span><b className="text-[13px]">macktech28@gmail.com</b></div>
                <button type="button" onClick={copyEmail} className="border-0 bg-transparent text-[10px] font-black tracking-[.08em] text-[#a85b13] dark:text-amber">{copyLabel}</button>
              </div>
              <div className="flex items-center justify-between gap-[15px] rounded-2xl border border-black/[.1] bg-black/[.02] px-4 py-[15px] dark:border-white/[.09] dark:bg-white/[.03]"><div><span className="block text-xs font-bold text-black/[.45] dark:text-white/[.45]">AVAILABILITY</span><b className="text-[13px]">Open for selected product work</b></div></div>
              <div className="flex items-center justify-between gap-[15px] rounded-2xl border border-black/[.1] bg-black/[.02] px-4 py-[15px] dark:border-white/[.09] dark:bg-white/[.03]"><div><span className="block text-xs font-bold text-black/[.45] dark:text-white/[.45]">FOCUS</span><b className="text-[13px]">AI · SaaS · Ops · Growth</b></div></div>
            </div>
            <div className="relative z-10 mt-[19px] flex flex-wrap gap-[9px]">
              {['LinkedIn','GitHub','Instagram'].map(item => <a key={item} href="#" className="flex h-10 items-center rounded-full border border-black/[.1] px-3.5 text-[11px] font-extrabold text-black/[.65] transition duration-300 hover:-translate-y-[3px] hover:border-orange hover:bg-orange/[.12] hover:text-ink dark:border-white/[.09] dark:text-white/[.7] dark:hover:text-white">{item}</a>)}
            </div>
          </Reveal>

          <Reveal className="overflow-hidden rounded-[30px] border border-black/[.15] bg-[linear-gradient(160deg,#fff,#f6f3ef)] p-[25px] shadow-[0_22px_70px_-45px_rgba(23,19,15,.35)] dark:border-white/[.15] dark:bg-[linear-gradient(160deg,#191512,#0d0b0a)] dark:shadow-none sm:p-[34px]">
            {!sent ? (
              <div>
                <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2">
                  <label className="mb-3.5 flex flex-col gap-[7px] text-[11px] font-extrabold tracking-[.05em] text-black/[.65] dark:text-white/[.7]">RANA USMAN<input ref={nameRef} className={fieldClass} placeholder="Enter your name" /></label>
                  <label className="mb-3.5 flex flex-col gap-[7px] text-[11px] font-extrabold tracking-[.05em] text-black/[.65] dark:text-white/[.7]">macktech28@gmail.com<input ref={emailRef} className={fieldClass} type="email" placeholder="name@company.com" /></label>
                </div>
                <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2">
                  <label className="mb-3.5 flex flex-col gap-[7px] text-[11px] font-extrabold tracking-[.05em] text-black/[.65] dark:text-white/[.7]">PROJECT TYPE<select className={fieldClass} defaultValue="AI / SaaS Product"><option>AI / SaaS Product</option><option>Dashboard / Portal Redesign</option><option>Automation System</option><option>Operations Platform</option><option>Other</option></select></label>
                  <label className="mb-3.5 flex flex-col gap-[7px] text-[11px] font-extrabold tracking-[.05em] text-black/[.65] dark:text-white/[.7]">BUDGET RANGE<select className={fieldClass} defaultValue="Not decided yet"><option>Not decided yet</option><option>Small project</option><option>Mid-size project</option><option>Large / custom project</option></select></label>
                </div>
                <label className="mb-3.5 flex flex-col gap-[7px] text-[11px] font-extrabold tracking-[.05em] text-black/[.65] dark:text-white/[.7]">WHAT DO YOU WANT TO BUILD?<textarea ref={messageRef} className={`${fieldClass} min-h-[126px] resize-y`} placeholder="Tell me about the problem, users and the outcome you want..." /></label>
                <div className="mt-[5px] flex flex-wrap items-center justify-between gap-3">
                  <span className="max-w-[42ch] text-[11px] text-black/[.45] dark:text-white/[.45]">This demo validates the form in-browser. Connect Formspree, EmailJS, your API or backend before going live.</span>
                  <Button type="button" onClick={send}>Send Message <svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg></Button>
                </div>
              </div>
            ) : (
              <div className="px-2 py-8 text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[linear-gradient(135deg,#FF8A1E,#FF6A00)] shadow-[0_0_0_12px_rgba(255,106,0,.09)]"><svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-white stroke-[2.6]"><path d="M5 12l5 5 9-10"/></svg></div>
                <h3 className="text-[26px] font-bold">Message ready.</h3>
                <p className="mt-2 text-[13px] text-black/[.65] dark:text-white/[.7]">The front-end form is working. Connect a mail service or backend to make it deliver messages.</p>
                <Button type="button" variant="ghost" className="mt-[18px]" onClick={() => setSent(false)}>Send another</Button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
