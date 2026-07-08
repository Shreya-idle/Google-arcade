import { useState } from 'react'
import { FAQ, STRATEGY_TIPS } from '../data/content'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
              Winning Strategy
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1f36] mb-8">
              Three Rules to Win the Season
            </h2>

            <div className="space-y-6">
              {STRATEGY_TIPS.map((tip) => (
                <div key={tip.number} className="flex gap-4">
                  <span className="font-display font-bold text-3xl text-[#4285f4]/30 leading-none">
                    {tip.number}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">{tip.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 pl-4 border-l-4 border-[#4285f4] italic text-gray-600">
              &ldquo;A Marathon, Not a Sprint.&rdquo;
            </blockquote>
          </div>

          <div>
            <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
              FAQ
            </p>
            <h2 className="font-display font-bold text-3xl text-[#1a1f36] mb-8">
              Common Questions
            </h2>

            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-xl overflow-hidden bg-[#f8f9fc]"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-sm text-gray-800 pr-4">{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
