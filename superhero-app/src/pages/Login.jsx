import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

export default function Login() {
  const { user, signIn } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (!username.trim()) {
      setError('Por favor, informe um nome de usuário.')
      return
    }

    signIn(username.trim())
    navigate('/', { replace: true })
  }

  if (user) {
    return (
      <div className="container login-page">
        <h1>Você já está conectado</h1>
        <p className="welcome">Olá, {user.name}.</p>
        <button className="btn" type="button" onClick={() => navigate('/')}>Visitar catálogo</button>
      </div>
    )
  }

  return (
    <div className="container login-page">
      <h1>Entrar</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Nome de usuário</label>
        <input
          id="username"
          type="text"
          placeholder="Digite seu nome"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {error && <p className="form-error">{error}</p>}
        <button className="btn" type="submit">Entrar</button>
      </form>
    </div>
  )
}
