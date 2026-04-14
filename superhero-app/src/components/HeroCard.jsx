import { Link } from 'react-router-dom'

export default function HeroCard({ hero }) {
  return (
    <div className="card">
      <img src={hero.images.md} alt={hero.name} />
      <h3>{hero.name}</h3>
      <p>{hero.biography.fullName || 'Nome completo não informado'}</p>

      <Link to={`/hero/${hero.id}`} className="btn">
        Ver detalhes
      </Link>
    </div>
  )
}