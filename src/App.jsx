import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <div className="hero-transition">
        <Hero />
      </div>
    </>
  )
}

export default App