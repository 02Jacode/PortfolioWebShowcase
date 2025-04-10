import { Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Hero from './hero.jsx'
import Skills from './skills.jsx'
import Projects from './Projects.jsx'
import Certs from './cert.jsx'
import Contact from './contact.jsx'

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/Skills" element={<Skills />} />
    <Route path="/Projects" element={<Projects />} />
    <Route path="/Certificates" element={<Certs />} />
    <Route path="/Contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
