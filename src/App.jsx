import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import EventsTransition from './Components/EventsTransition';
import Events from './Components/Events';
import EventJoinTransition from './Components/EventJoinTransition';

function App() {
  return (
    <>
      <Navbar />

      <div className="hero-transition">
        <Hero />
      </div>
      <About />
      <EventsTransition />
      <Events />
      <EventJoinTransition />
    </>
  )
}

export default App