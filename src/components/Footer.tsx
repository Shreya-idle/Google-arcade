import { SITE } from '../data/content'
import { Cloud, Heart } from 'lucide-react'
import DynamicRating from './DynamicRating'

export default function Footer() {
  return (
    <footer className="bg-[#0f1225] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DynamicRating className="mb-8 [&_p]:text-gray-400 [&_span]:text-white" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#4285f4] flex items-center justify-center">
              <Cloud className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-sm">Google Cloud Arcade 2026</p>
              <p className="text-xs">Facilitated by Mayank Sharma & Shreya Agrawal</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href={SITE.lumaUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Luma Event
            </a>
            <a href={SITE.arcadeCalcUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              ArcadeCalc
            </a>
            <a href={SITE.whatsappGroup} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp Group
            </a>
            <a href="#leaderboard" className="hover:text-white transition-colors">
              Leaderboard
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs">
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400" /> for the Google Cloud Arcade community
          </p>
          <p className="mt-2 text-gray-500">
            &ldquo;No rush. No shortcuts. Just structured learning and steady progress.&rdquo;
          </p>
          <p className="mt-3 text-gray-600">
            &copy; 2026 Google Cloud Arcade Facilitator Program. Not affiliated with Google LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}
