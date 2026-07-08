import { useState, useEffect } from 'react'
import { Calendar, ArrowRight, Sparkles } from 'lucide-react'
import { SITE } from '../data/content'

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const target = new Date(targetDate).getTime()
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.mins },
    { label: 'Secs', value: timeLeft.secs },
  ]

  return (
    <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div className="w-14 sm:w-16 h-14 sm:h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-blue-100">
            <span className="font-display font-bold text-xl sm:text-2xl text-[#4285f4]">
              {String(u.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs text-gray-500 mt-1 block">{u.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-blue-100 mb-6">
              <Sparkles className="w-4 h-4 text-[#fbbc04]" />
              <span className="text-sm font-medium text-gray-700">
                100% Free &bull; 13 Jul – 14 Sep 2026
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#1a1f36] mb-4">
              Google Cloud
              <br />
              <span className="gradient-text">Arcade 2026</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-2 font-medium">
              Facilitator Program
            </p>
            <p className="text-base text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0">
              {SITE.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href={SITE.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#4285f4] text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl animate-pulse-glow"
              >
                Register on Luma
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#4285f4] font-semibold rounded-full border-2 border-[#4285f4] hover:bg-blue-50 transition-colors"
              >
                Learn More
              </a>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2 justify-center lg:justify-start">
                <Calendar className="w-4 h-4" />
                Registration opens 13 July 2026, 5:00 PM IST
              </p>
              <Countdown targetDate={SITE.registrationDate} />
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4285f4] to-[#34a853] rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#ea4335]" />
                  <div className="w-3 h-3 rounded-full bg-[#fbbc04]" />
                  <div className="w-3 h-3 rounded-full bg-[#34a853]" />
                </div>
                <div className="space-y-4">
                  {['Arcade Games', 'Skill Badges', 'Bonus Milestones', 'Google Swag'].map(
                    (item, i) => (
                      <div key={item} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                          style={{
                            background: ['#4285f4', '#34a853', '#fbbc04', '#ea4335'][i],
                          }}
                        >
                          {i + 1}
                        </div>
                        <span className="font-medium text-gray-700">{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400">Referral Code</p>
                  <p className="font-mono font-bold text-[#4285f4]">{SITE.referralCode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
