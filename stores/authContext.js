import { createContext, useEffect, useState } from "react"
import netlifyIdentity from "netlify-identity-widget"

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
})
// default val for auth

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    netlifyIdentity.init()
  },[])

  return (
    <AuthContext.Provider value={user}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext