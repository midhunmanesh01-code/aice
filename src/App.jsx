import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'

function App() {
  return (
    <>
      <Navbar />

      <div className="hero-transition">
        <Hero />
      </div>
      <About />
    </>
  )
}

export default App