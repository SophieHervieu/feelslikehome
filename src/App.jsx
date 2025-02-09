import { Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Articles } from './pages/Articles'
import { Forum } from "./pages/Forum"
import { NewForumPost } from "./pages/NewForumPost"
import { Apropos } from "./pages/Apropos"
import { Contact } from "./pages/Contact"
import { Connexion } from "./pages/Connexion"
import { MdpOublie } from "./pages/MdpOublie"
import { ReinitMdp } from "./pages/ReinitMdp"
import { Inscription } from "./pages/Inscription"
import { CGU } from "./pages/CGU"
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
        <Route path="/NewPost" element={<NewForumPost />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/OubliMdp" element={<MdpOublie />} />
        <Route path="/ReinitialisationMdp" element={<ReinitMdp />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/CGU" element={<CGU />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
