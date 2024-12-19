import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { NetworkDiagram } from '@/components/NetworkDiagram'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <NetworkDiagram />
      </div>
    </div>
  )
}

export default App

