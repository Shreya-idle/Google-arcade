import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Facilitators from './components/Facilitators'
import Timeline from './components/Timeline'
import Setup from './components/Setup'
import Points from './components/Points'
import Milestones from './components/Milestones'
import FAQSection from './components/FAQSection'
import Resources from './components/Resources'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilitators />
        <Timeline />
        <Setup />
        <Points />
        <Milestones />
        <FAQSection />
        <Resources />
      </main>
      <Footer />
    </>
  )
}
