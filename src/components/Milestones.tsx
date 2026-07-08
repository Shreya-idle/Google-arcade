import { MILESTONES, PRIZE_TIERS } from '../data/content'
import { Star } from 'lucide-react'

export default function Milestones() {
  return (
    <section id="milestones" className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
            Achievement System
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1f36] mb-4">
            Facilitator Milestones
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Complete milestones to earn bonus points. You only receive points for the highest
            milestone earned.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {MILESTONES.map((m) => (
            <div
              key={m.name}
              className={`card-hover bg-white rounded-2xl p-6 border-t-4 ${m.color} shadow-sm`}
            >
              <div className="text-center mb-4">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {m.level}
                </span>
                <h3 className="font-display font-bold text-lg">{m.name}</h3>
              </div>

              <div className="text-center mb-4">
                <span className="font-display font-bold text-4xl text-[#4285f4]">
                  {m.totalPoints}
                </span>
                <span className="text-sm text-gray-500 block">Total Points</span>
              </div>

              <ul className="space-y-2 mb-4">
                {m.requirements.map((req) => (
                  <li key={req} className="text-xs text-gray-600 flex items-start gap-1.5">
                    <span className="text-[#34a853]">✓</span>
                    {req}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 space-y-1">
                <div className="flex justify-between">
                  <span>Arcade Points</span>
                  <span className="font-semibold">{m.arcadePoints}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bonus Points</span>
                  <span className="font-semibold">{m.bonusPoints}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="font-display font-bold text-2xl mb-2">Arcade Prize Tier Structure</h3>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Prize tier spots refresh weekly and operate first-come, first-served. High point scores
            alone don&apos;t guarantee a prize once the tier cap is reached.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {PRIZE_TIERS.map((tier) => (
            <div
              key={tier.name}
              className="card-hover bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
            >
              <div className="flex justify-center gap-0.5 mb-3">
                {Array.from({ length: tier.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <h4 className="font-display font-bold text-lg">{tier.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{tier.spots}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto text-center p-6 bg-white rounded-2xl border border-gray-100">
          <p className="text-sm text-gray-600">
            <strong>Waterfall Mechanism:</strong> If you earn enough points but miss the cap at a
            higher tier, your eligibility safely rolls down to guarantee a reward at the next tier.
            The earlier you lock in your points, the higher up the waterfall you stay.
          </p>
        </div>
      </div>
    </section>
  )
}
