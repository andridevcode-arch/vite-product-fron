import { Navbar } from './components/nav/Navbar'
import { HeroSection } from './components/hero/HeroSection'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <HeroSection />
    </div>
  )
}
