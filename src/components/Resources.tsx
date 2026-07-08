import { RESOURCES, SITE } from '../data/content'
import { ExternalLink, Mail, ArrowRight } from 'lucide-react'

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-[#1a1f36] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
            Quick Links
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Official Resources
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need, in one place. Bookmark these links for easy access throughout the
            programme.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {RESOURCES.map((resource) => (
            <a
              key={resource.label}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
            >
              <span className="font-medium text-sm">{resource.label}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#4285f4] transition-colors" />
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#4285f4] to-[#34a853] rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">
            Ready to Become #GoogleCloudReady?
          </h3>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Registration opens 13 July 2026 at 5:00 PM IST. Join our community and start your cloud
            journey with expert facilitation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#4285f4] font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Register on Luma
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
