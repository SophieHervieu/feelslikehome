import { Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Articles } from './pages/Articles'
import { ArticlePage } from "./pages/ArticlePage"
import { Forum } from "./pages/Forum"
import { PostPage } from "./pages/PostPage"
import { NewForumPost } from "./pages/NewForumPost"
import { Quizz } from "./pages/Quizz"
import {Resultat} from './pages/Resultat'
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
        <Route path="/articles" element={<Articles />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/resultat" element={<Resultat />} />
        <Route path="/newpost" element={<NewForumPost />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/oublimdp" element={<MdpOublie />} />
        <Route path="/reinitialisationmdp" element={<ReinitMdp />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/cgu" element={<CGU />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
