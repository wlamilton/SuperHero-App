import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🦸 SuperHero App</div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </nav>
  )
}