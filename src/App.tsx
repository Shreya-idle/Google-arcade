import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Facilitators from './components/Facilitators'
import ArcadeCalcBanner from './components/ArcadeCalcBanner'
import Leaderboard from './components/Leaderboard'
import Timeline from './components/Timeline'
import Setup from './components/Setup'
import Points from './components/Points'
import Milestones from './components/Milestones'
import FAQSection from './components/FAQSection'
import Resources from './components/Resources'
import Footer from './components/Footer'
import WhatsAppPopup from './components/WhatsAppPopup'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilitators />
        <ArcadeCalcBanner />
        <Leaderboard />
        <Timeline />
        <Setup />
        <Points />
        <Milestones />
        <FAQSection />
        <Resources />
      </main>
      <Footer />
      <WhatsAppPopup />
    </>
  )
}
