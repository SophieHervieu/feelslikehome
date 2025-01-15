import { Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Articles } from './pages/Articles'
import { Forum } from "./pages/Forum"
import { Apropos } from "./pages/Apropos"
import { Contact } from "./pages/Contact"
import { Connexion } from "./pages/Connexion"
import { Footer } from './components/Footer'
import './App.scss'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Connexion" element={<Connexion />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
