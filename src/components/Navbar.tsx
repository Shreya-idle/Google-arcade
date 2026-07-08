import { useState, useEffect } from 'react'
import { Menu, X, Cloud } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#4285f4] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-sm text-[#1a1f36] leading-tight block">
                Google Cloud Arcade
              </span>
              <span className="text-xs text-[#4285f4] font-medium">2026 Facilitator</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#4285f4] rounded-lg hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#4285f4] text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
            >
              Register Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-1">
            <div className="flex flex-col gap-1 pt-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#4285f4] hover:bg-blue-50 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 text-center px-5 py-2.5 bg-[#4285f4] text-white text-sm font-semibold rounded-full"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
