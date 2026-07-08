import { FACILITATORS, SITE } from '../data/content'
import { MessageCircle, ExternalLink } from 'lucide-react'

export default function Facilitators() {
  return (
    <section id="facilitators" className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
            Your Guides
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1f36]">
            Meet Your Facilitators
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FACILITATORS.map((f) => (
            <div
              key={f.name}
              className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${f.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <span className="text-white font-display font-bold text-2xl">{f.initials}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-1">{f.name}</h3>
              <p className="text-[#4285f4] text-sm font-medium mb-3">{f.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Facilitator Referral Code</p>
            <p className="font-mono font-bold text-2xl text-[#4285f4]">{SITE.referralCode}</p>
            <p className="text-xs text-gray-400 mt-2">Enter when enrolling on the registration form</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SITE.whatsappChannel}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-green-600 transition-colors opacity-60 cursor-not-allowed"
            title="WhatsApp link coming soon"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Channel (Coming Soon)
          </a>
          <a
            href={SITE.whatsappGroup}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#25D366] font-semibold rounded-full border-2 border-[#25D366] hover:bg-green-50 transition-colors opacity-60 cursor-not-allowed"
            title="WhatsApp link coming soon"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Group (Coming Soon)
          </a>
          <a
            href={SITE.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4285f4] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Event on Luma
          </a>
        </div>
      </div>
    </section>
  )
}
