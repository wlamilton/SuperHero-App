import { useEffect, useState } from 'react'
import { getHeroes } from '../api'
import HeroCard from '../components/HeroCard'

export default function Home() {
  const [heroes, setHeroes] = useState([])
  const [filteredHeroes, setFilteredHeroes] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadHeroes() {
      try {
        setLoading(true)
        const data = await getHeroes()
        setHeroes(data)
        setFilteredHeroes(data.slice(0, 30))
      } catch (err) {
        console.error(err)
        setError('Não foi possível carregar os heróis.')
      } finally {
        setLoading(false)
      }
    }

    loadHeroes()
  }, [])

  useEffect(() => {
    const filtered = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(search.toLowerCase())
    )

    setFilteredHeroes(filtered.slice(0, 30))
  }, [search, heroes])

  if (loading) {
    return <p className="center">Carregando heróis...</p>
  }

  if (error) {
    return <p className="center">{error}</p>
  }

  return (
    <div className="container">
      <h1>Catálogo de Super-Heróis</h1>

      <input
        type="text"
        placeholder="Pesquisar herói..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="grid">
        {filteredHeroes.length > 0 ? (
          filteredHeroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)
        ) : (
          <p className="center full-width">Nenhum herói encontrado.</p>
        )}
      </div>
    </div>
  )
}