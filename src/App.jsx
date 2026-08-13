import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import EventsTransition from './Components/EventsTransition';
import Events from './Components/Events';
import EventJoinTransition from './Components/EventJoinTransition';
import Join from './Components/Join';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <div className="hero-transition">
        <Hero />
      </div>
      <About />
      <EventsTransition />
      <Events />
      <EventJoinTransition />
      <Join />
      <Footer />
    </>
  )
}

export default App