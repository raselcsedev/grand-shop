import 'typeface-montserrat';
import './css/custom.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
function App() {

  return (
    <div className="dashboard">
      <Navbar />
      <Hero />
      <HomePage />
    </div>
  )
}

export default App
