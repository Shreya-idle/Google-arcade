import { useEffect, useMemo, useState } from 'react'
import { Star } from 'lucide-react'

const RATINGS_KEY = 'gca-site-ratings'
const VISITS_KEY = 'gca-site-visits'

type StoredRatings = {
  scores: number[]
  visitorCount: number
}

function loadRatings(): StoredRatings {
  try {
    const raw = localStorage.getItem(RATINGS_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    /* ignore */
  }
  return { scores: [5, 5, 4, 5, 5], visitorCount: 42 }
}

function saveRatings(data: StoredRatings) {
  localStorage.setItem(RATINGS_KEY, JSON.stringify(data))
}

export default function DynamicRating({ className = '' }: { className?: string }) {
  const [data, setData] = useState<StoredRatings>(loadRatings)
  const [hovered, setHovered] = useState(0)
  const [hasRated, setHasRated] = useState(false)

  useEffect(() => {
    const visited = sessionStorage.getItem(VISITS_KEY)
    if (!visited) {
      sessionStorage.setItem(VISITS_KEY, '1')
      setData((prev) => {
        const next = { ...prev, visitorCount: prev.visitorCount + 1 }
        saveRatings(next)
        return next
      })
    }
  }, [])

  const average = useMemo(() => {
    if (data.scores.length === 0) return 4.9
    const sum = data.scores.reduce((a, b) => a + b, 0)
    return Math.round((sum / data.scores.length) * 10) / 10
  }, [data.scores])

  const handleRate = (score: number) => {
    if (hasRated) return
    const next = { ...data, scores: [...data.scores, score] }
    setData(next)
    saveRatings(next)
    setHasRated(true)
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="flex items-center justify-center gap-1 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onMouseEnter={() => !hasRated && setHovered(i + 1)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleRate(hovered || i + 1)}
            className="p-0.5 transition-transform hover:scale-110 disabled:cursor-default"
            disabled={hasRated}
            aria-label={`Rate ${i + 1} stars`}
          >
            <Star
              className={`w-4 h-4 ${
                (hovered || Math.round(average)) > i
                  ? 'fill-[#fbbc04] text-[#fbbc04]'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-600">
        <span className="font-bold text-[#1a1f36]">{average}</span>
        <span className="text-gray-400"> / 5</span>
        <span className="text-gray-400 mx-1">·</span>
        from <span className="font-semibold">{data.scores.length + data.visitorCount}</span> learners
      </p>
      {!hasRated && (
        <p className="text-xs text-gray-400 mt-1">Tap a star to rate this guide</p>
      )}
      {hasRated && (
        <p className="text-xs text-[#34a853] mt-1">Thanks for your rating!</p>
      )}
    </div>
  )
}
