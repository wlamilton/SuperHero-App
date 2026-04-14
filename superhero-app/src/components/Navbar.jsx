import { Link } from 'react-router-dom'

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