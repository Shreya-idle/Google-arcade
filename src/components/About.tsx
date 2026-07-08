import { Cloud, Briefcase, Award, Gift, CheckCircle2 } from 'lucide-react'
import { VALUE_PROPS, EXPECTATIONS } from '../data/content'

const ICONS = { cloud: Cloud, briefcase: Briefcase, badge: Award, gift: Gift }

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
            About the Programme
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1f36] mb-4">
            Your Cloud Learning Journey Starts Here
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Google Cloud Arcade is a hands-on, gamified cloud learning programme. Build real,
            practical Google Cloud skills through guided labs, games, and interactive challenges —
            completely free of cost.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {VALUE_PROPS.map((prop) => {
            const Icon = ICONS[prop.icon as keyof typeof ICONS]
            return (
              <div
                key={prop.title}
                className="card-hover p-6 rounded-2xl bg-[#f8f9fc] border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4285f4]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#4285f4]" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{prop.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{prop.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-[#e8f0fe] to-[#e6f4ea] rounded-3xl p-8 sm:p-12">
          <h3 className="font-display font-bold text-2xl text-center mb-8">
            What Can You Expect?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {EXPECTATIONS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#34a853] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border-2 border-[#4285f4]/20 bg-blue-50/50">
            <h4 className="font-display font-bold text-lg mb-3 text-[#4285f4]">
              Google Cloud Arcade
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Open to everyone globally — no invite required</li>
              <li>Full 12-month continuous season (Jan–Dec 2026)</li>
              <li>Monthly games, learning tracks, and standard Arcade Points</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border-2 border-[#34a853]/20 bg-green-50/50">
            <h4 className="font-display font-bold text-lg mb-3 text-[#34a853]">
              Facilitator Programme
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Registration via facilitator referral code</li>
              <li>Accelerated window — 13 Jul to 14 Sep 2026</li>
              <li>Structured navigation, direct support, and Bonus Point milestones</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
