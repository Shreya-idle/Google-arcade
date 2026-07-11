import { useEffect, useState } from 'react'
import { X, MessageCircle, Users } from 'lucide-react'
import { SITE } from '../data/content'

const STORAGE_KEY = 'gca-whatsapp-popup-dismissed'

export default function WhatsAppPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed) return

    const timer = setTimeout(() => setVisible(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-8 text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h3 className="font-display font-bold text-xl mb-2">Join Our WhatsApp Group</h3>
          <p className="text-white/90 text-sm">
            Get updates, milestone reminders, and real-time support from facilitators and fellow
            learners in our 2026 cohort.
          </p>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-center gap-3 mb-5 p-3 bg-green-50 rounded-xl border border-green-100">
            <Users className="w-5 h-5 text-[#25D366] shrink-0" />
            <p className="text-sm text-gray-600">
              Connect with learners in the <strong>Google Cloud Arcade 2026</strong> facilitator
              cohort — no Telegram, just WhatsApp.
            </p>
          </div>

          <a
            href={SITE.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-green-600 transition-colors shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            Join WhatsApp Group
          </a>
          <button
            onClick={dismiss}
            className="w-full mt-3 py-2.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
