import { TIMELINE } from '../data/content'
import { Clock } from 'lucide-react'

const STATUS_STYLES = {
  ongoing: 'bg-green-100 text-green-700 border-green-200',
  upcoming: 'bg-blue-100 text-blue-700 border-blue-200',
  past: 'bg-gray-100 text-gray-500 border-gray-200',
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
            Key Dates
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1f36] mb-4">
            Official 2026 Timeline
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Mark every date. Register the moment enrolment opens — seats fill fast!
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4285f4] via-[#34a853] to-[#fbbc04]" />

          <div className="space-y-8">
            {TIMELINE.map((event, i) => (
              <div key={i} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-[#4285f4] flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-5 h-5 text-[#4285f4]" />
                </div>
                <div className="card-hover flex-1 bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-[#4285f4]">{event.date}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border font-medium capitalize ${STATUS_STYLES[event.status as keyof typeof STATUS_STYLES]}`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
