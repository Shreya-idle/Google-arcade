import { SETUP_STEPS } from '../data/content'
import { ExternalLink, AlertTriangle } from 'lucide-react'

export default function Setup() {
  return (
    <section id="setup" className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
            Before You Start
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1f36] mb-4">
            Mandatory Setup Guide
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Complete these steps before enrolling. Skipping any step may make you ineligible for
            rewards.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {SETUP_STEPS.map((step) => (
            <div
              key={step.step}
              className="card-hover bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4285f4] text-white font-display font-bold flex items-center justify-center shrink-0 text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <ul className="space-y-2 mb-4">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#34a853] font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4285f4] hover:underline"
                    >
                      {step.linkLabel}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-4xl mx-auto flex items-start gap-3 p-5 bg-yellow-50 border border-yellow-200 rounded-2xl">
          <AlertTriangle className="w-5 h-5 text-[#fbbc04] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm text-gray-800 mb-1">Critical Reminder</p>
            <p className="text-sm text-gray-600">
              Add <code className="bg-yellow-100 px-1.5 py-0.5 rounded text-xs">googlecloudedu-noreply@google.com</code> to
              your contacts immediately. A hidden profile means a hidden you — double-check your
              public profile setting before every milestone deadline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
