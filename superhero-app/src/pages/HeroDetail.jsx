import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getHeroById } from '../api'

export default function HeroDetail() {
  const { id } = useParams()
  const [hero, setHero] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadHero() {
      try {
        setLoading(true)
        const data = await getHeroById(id)
        setHero(data)
      } catch (err) {
        console.error(err)
        setError('Não foi possível carregar os detalhes do herói.')
      } finally {
        setLoading(false)
      }
    }

    loadHero()
  }, [id])

  if (loading) {
    return <p className="center">Carregando detalhes...</p>
  }

  if (error) {
    return <p className="center">{error}</p>
  }

  if (!hero) {
    return <p className="center">Herói não encontrado.</p>
  }

  return (
    <div className="container detail">
      <Link to="/" className="btn back-btn">
        ← Voltar
      </Link>

      <img src={hero.images.lg} alt={hero.name} className="detail-img" />

      <h1>{hero.name}</h1>

      <p>
        <strong>Nome completo:</strong>{' '}
        {hero.biography.fullName || 'Não informado'}
      </p>

      <p>
        <strong>Alter ego:</strong>{' '}
        {hero.biography.alterEgos || 'Não informado'}
      </p>

      <p>
        <strong>Primeira aparição:</strong>{' '}
        {hero.biography.firstAppearance || 'Não informado'}
      </p>

      <p>
        <strong>Editora:</strong>{' '}
        {hero.biography.publisher || 'Não informado'}
      </p>

      <p>
        <strong>Inteligência:</strong> {hero.powerstats.intelligence}
      </p>

      <p>
        <strong>Força:</strong> {hero.powerstats.strength}
      </p>

      <p>
        <strong>Velocidade:</strong> {hero.powerstats.speed}
      </p>

      <p>
        <strong>Poder:</strong> {hero.powerstats.power}
      </p>

      <p>
        <strong>Combate:</strong> {hero.powerstats.combat}
      </p>
    </div>
  )
}