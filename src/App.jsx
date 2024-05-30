import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Jewelry from './components/Jewelry'
import Contact from './components/Contact'
import NavNet from './components/projects/NavNet'
import MuNa from './components/projects/MuNa'
import BdP from './components/projects/BdP'


export default function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Jewelry" element={<Jewelry />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/NavNet" element={<NavNet/>} />
          <Route path="/MuNa" element={<MuNa/>} />
          <Route path="/BdP" element={<BdP/>} />
        </Routes>
    </>
  )
}


