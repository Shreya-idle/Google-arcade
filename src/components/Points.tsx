import { POINTS_SYSTEM, GAME_TYPES } from '../data/content'
import { Gamepad2, Zap, Trophy, AlertCircle } from 'lucide-react'

const ICONS = { gamepad: Gamepad2, zap: Zap, trophy: Trophy }

export default function Points() {
  return (
    <section id="points" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
            Rewards System
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1f36] mb-4">
            Points System
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Earn Arcade + Bonus Points through games, badges, and milestones. Combine them to reach
            Skills Boost Arcade prize tiers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {POINTS_SYSTEM.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS]
            return (
              <div
                key={item.title}
                className="card-hover text-center p-8 rounded-2xl bg-gradient-to-br from-[#f8f9fc] to-white border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4285f4]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#4285f4]" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="font-mono font-bold text-[#4285f4] text-lg mb-3">{item.formula}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="flex items-start gap-3 p-5 bg-blue-50 border border-blue-200 rounded-2xl mb-12 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-[#4285f4] shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> Earning facilitator milestones does NOT directly guarantee
            swags/prizes. You earn Bonus Points that accumulate and add to your Arcade Points to
            reach actual Skills Boost Arcade Player achievements.
          </p>
        </div>

        <h3 className="font-display font-bold text-2xl text-center mb-8">
          Monthly Game Types
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GAME_TYPES.map((game, i) => (
            <div
              key={game.name}
              className="p-5 rounded-xl border border-gray-100 bg-[#f8f9fc] card-hover"
            >
              <div
                className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-white text-sm font-bold"
                style={{
                  background: ['#4285f4', '#34a853', '#fbbc04', '#ea4335'][i],
                }}
              >
                {i + 1}
              </div>
              <h4 className="font-display font-bold text-sm mb-1">{game.name}</h4>
              <p className="text-gray-600 text-xs leading-relaxed">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
