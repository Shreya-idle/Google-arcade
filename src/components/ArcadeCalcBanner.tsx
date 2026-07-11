import { Calculator, ExternalLink } from 'lucide-react'
import { SITE } from '../data/content'

export default function ArcadeCalcBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#1a1f36] to-[#2d3561]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-white">
            <div className="w-12 h-12 rounded-xl bg-[#4285f4] flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-1">
                Calculate Your Arcade Points Instantly
              </h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Paste your Google Cloud Skills Boost public profile URL into{' '}
                <strong className="text-white">ArcadeCalc</strong> to get accurate points, milestone
                progress, and swag eligibility — trusted by 75,000+ learners.
              </p>
            </div>
          </div>
          <a
            href={SITE.arcadeCalcUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4285f4] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors shadow-lg shrink-0"
          >
            Open ArcadeCalc
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
