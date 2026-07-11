import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Trophy, Medal, Gamepad2, Brain, RefreshCw } from 'lucide-react'
import type { LeaderboardEntry } from '../data/content'
import { SITE } from '../data/content'

const LOCAL_KEY = 'gca-cohort-leaderboard'

function rankIcon(rank: number) {
  if (rank === 1) return <Trophy className="w-5 h-5 text-[#fbbc04]" />
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />
  if (rank === 3) return <Medal className="w-5 h-5 text-amber-700" />
  return <span className="w-5 text-center text-sm font-bold text-gray-400">{rank}</span>
}

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [arcadeGames, setArcadeGames] = useState('')
  const [triviaGames, setTriviaGames] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const loadEntries = async () => {
    setLoading(true)
    try {
      const res = await fetch('/leaderboard.json')
      const official: LeaderboardEntry[] = res.ok ? await res.json() : []
      const local: LeaderboardEntry[] = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]')
      const merged = new Map<string, LeaderboardEntry>()
      ;[...official, ...local].forEach((e) => {
        const existing = merged.get(e.name.toLowerCase())
        if (!existing || e.gamesCompleted > existing.gamesCompleted) {
          merged.set(e.name.toLowerCase(), e)
        }
      })
      setEntries(
        Array.from(merged.values()).sort((a, b) => {
          if (b.gamesCompleted !== a.gamesCompleted) return b.gamesCompleted - a.gamesCompleted
          if (b.arcadeGames !== a.arcadeGames) return b.arcadeGames - a.arcadeGames
          return b.triviaGames - a.triviaGames
        }),
      )
    } catch {
      setEntries([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadEntries()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const arcade = Math.max(0, parseInt(arcadeGames, 10) || 0)
    const trivia = Math.max(0, parseInt(triviaGames, 10) || 0)
    if (!name.trim()) return

    setSubmitting(true)
    const entry: LeaderboardEntry = {
      id: crypto.randomUUID(),
      name: name.trim(),
      arcadeGames: arcade,
      triviaGames: trivia,
      gamesCompleted: arcade + trivia,
      updatedAt: new Date().toISOString().split('T')[0],
    }

    const local: LeaderboardEntry[] = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]')
    const filtered = local.filter((item) => item.name.toLowerCase() !== entry.name.toLowerCase())
    localStorage.setItem(LOCAL_KEY, JSON.stringify([...filtered, entry]))

    setName('')
    setArcadeGames('')
    setTriviaGames('')
    loadEntries().finally(() => setSubmitting(false))
  }

  const topThree = useMemo(() => entries.slice(0, 3), [entries])

  return (
    <section id="leaderboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#4285f4] font-semibold text-sm uppercase tracking-wider mb-2">
            Cohort Rankings
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1f36] mb-4">
            2026 Games Leaderboard
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ranked by Arcade games, Trivia games, and total completions in the current facilitator
            cohort. Track your exact points with{' '}
            <a
              href={SITE.arcadeCalcUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4285f4] font-semibold hover:underline"
            >
              ArcadeCalc
            </a>
            .
          </p>
        </div>

        {topThree.length > 0 && (
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {topThree.map((entry, i) => (
              <div
                key={entry.id}
                className={`text-center p-5 rounded-2xl border ${
                  i === 0
                    ? 'bg-yellow-50 border-yellow-200 sm:order-2 sm:-mt-4'
                    : i === 1
                      ? 'bg-gray-50 border-gray-200 sm:order-1'
                      : 'bg-amber-50 border-amber-100 sm:order-3'
                }`}
              >
                <div className="mb-2 flex justify-center">{rankIcon(i + 1)}</div>
                <p className="font-display font-bold text-lg">{entry.name}</p>
                <p className="text-2xl font-bold text-[#4285f4] mt-1">{entry.gamesCompleted}</p>
                <p className="text-xs text-gray-500">total games</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-[#f8f9fc] rounded-2xl border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
                <h3 className="font-display font-bold">Live Rankings</h3>
                <button
                  onClick={loadEntries}
                  className="flex items-center gap-1.5 text-sm text-[#4285f4] hover:underline"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading leaderboard...</div>
              ) : entries.length === 0 ? (
                <div className="p-10 text-center text-gray-500">
                  No entries yet. Be the first to submit your progress!
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-100">
                        <th className="px-5 py-3 font-medium">#</th>
                        <th className="px-5 py-3 font-medium">Learner</th>
                        <th className="px-5 py-3 font-medium text-center">
                          <span className="inline-flex items-center gap-1">
                            <Gamepad2 className="w-3.5 h-3.5" /> Arcade
                          </span>
                        </th>
                        <th className="px-5 py-3 font-medium text-center">
                          <span className="inline-flex items-center gap-1">
                            <Brain className="w-3.5 h-3.5" /> Trivia
                          </span>
                        </th>
                        <th className="px-5 py-3 font-medium text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry, i) => (
                        <tr
                          key={entry.id}
                          className="border-b border-gray-50 hover:bg-white transition-colors"
                        >
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-2">{rankIcon(i + 1)}</div>
                          </td>
                          <td className="px-5 py-3.5 font-medium text-gray-800">{entry.name}</td>
                          <td className="px-5 py-3.5 text-center text-gray-600">
                            {entry.arcadeGames}
                          </td>
                          <td className="px-5 py-3.5 text-center text-gray-600">
                            {entry.triviaGames}
                          </td>
                          <td className="px-5 py-3.5 text-center font-bold text-[#4285f4]">
                            {entry.gamesCompleted}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 sticky top-24"
            >
              <h3 className="font-display font-bold text-lg mb-1">Update Your Progress</h3>
              <p className="text-xs text-gray-500 mb-5">
                Submit your Arcade & Trivia game counts. Rankings update instantly for this cohort.
              </p>

              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Amit K."
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4285f4]/30 focus:border-[#4285f4]"
                required
              />

              <label className="block text-sm font-medium text-gray-700 mb-1">Arcade Games</label>
              <input
                type="number"
                min="0"
                value={arcadeGames}
                onChange={(e) => setArcadeGames(e.target.value)}
                placeholder="0"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4285f4]/30 focus:border-[#4285f4]"
              />

              <label className="block text-sm font-medium text-gray-700 mb-1">Trivia Games</label>
              <input
                type="number"
                min="0"
                value={triviaGames}
                onChange={(e) => setTriviaGames(e.target.value)}
                placeholder="0"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4285f4]/30 focus:border-[#4285f4]"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#4285f4] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors disabled:opacity-60"
              >
                {submitting ? 'Saving...' : 'Submit Progress'}
              </button>

              <p className="text-xs text-gray-400 mt-4 text-center">
                For full Arcade points, use{' '}
                <a
                  href={SITE.arcadeCalcUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4285f4] hover:underline"
                >
                  ArcadeCalc
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
