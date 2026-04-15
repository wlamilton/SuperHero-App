import { createContext, useState } from 'react'

export const AuthContext = createContext({
  user: null,
  signIn: () => {},
  signOut: () => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('superheroAuthUser')
    return savedUser ? JSON.parse(savedUser) : null
  })

  function signIn(name) {
    const nextUser = { name }
    setUser(nextUser)
    localStorage.setItem('superheroAuthUser', JSON.stringify(nextUser))
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('superheroAuthUser')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
