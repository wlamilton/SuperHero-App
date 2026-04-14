const BASE_URL = 'https://akabab.github.io/superhero-api/api'

export async function getHeroes() {
  const response = await fetch(`${BASE_URL}/all.json`)

  if (!response.ok) {
    throw new Error('Erro ao buscar heróis')
  }

  return response.json()
}

export async function getHeroById(id) {
  const response = await fetch(`${BASE_URL}/id/${id}.json`)

  if (!response.ok) {
    throw new Error('Erro ao buscar detalhes do herói')
  }

  return response.json()
}