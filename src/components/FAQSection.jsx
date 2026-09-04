import { useState } from 'react'
import { faqs } from '../data/content'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function FAQSection() {
  const [open, setOpen] = useState(0)
  return (
    <section className="relative py-[82px] sm:py-28">
      <div className="mx-auto w-[92vw] max-w-[1280px]">
        <SectionHeading kicker="FAQ" title={<>COMMON <span className="text-orange">QUESTIONS.</span></>} />
        <Reveal className="mx-auto flex max-w-[900px] flex-col gap-[11px]">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index
            return (
              <div key={question} className={`overflow-hidden rounded-[20px] border bg-white/[.65] transition duration-300 dark:bg-white/[.027] ${isOpen ? 'border-orange/[.4] bg-orange/[.04] dark:bg-orange/[.04]' : 'border-black/[.1] dark:border-white/[.09]'}`}>
                <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-center justify-between bg-transparent px-[22px] py-5 text-left font-extrabold text-current">
                  {question}
                  <i className="relative ml-4 h-6 w-6 flex-none rounded-full border border-black/[.15] dark:border-white/[.15]">
                    <span className="absolute left-1/2 top-1/2 h-[1.5px] w-[9px] -translate-x-1/2 -translate-y-1/2 bg-current" />
                    <span className={`absolute left-1/2 top-1/2 h-[1.5px] w-[9px] -translate-x-1/2 -translate-y-1/2 bg-current transition duration-300 ${isOpen ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`} />
                  </i>
                </button>
                <div className={`overflow-hidden px-[22px] text-black/[.65] transition-[max-height,padding] duration-[400ms] ease-premium dark:text-white/[.7] ${isOpen ? 'max-h-[180px] pb-5' : 'max-h-0 pb-0'}`}>{answer}</div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
