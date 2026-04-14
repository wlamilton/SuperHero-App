import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HeroDetail from './pages/HeroDetail'
import About from './pages/About'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<HeroDetail />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </>
  )
}