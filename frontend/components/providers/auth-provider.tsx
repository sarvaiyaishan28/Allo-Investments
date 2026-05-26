'use client'

import * as React from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  requireAuth: (redirectPath?: string) => boolean
  showLoginRequired: boolean
  setShowLoginRequired: (show: boolean) => void
  redirectPath: string | null
  setRedirectPath: (path: string | null) => void
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [showLoginRequired, setShowLoginRequired] = React.useState(false)
  const [redirectPath, setRedirectPath] = React.useState<string | null>(null)

  // Check for existing session on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('allo_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        localStorage.removeItem('allo_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock validation
    if (email === 'alex@allo.com' && password === 'password') {
      const userData: User = {
        id: '1',
        name: 'Alex',
        email: 'alex@allo.com',
      }
      setUser(userData)
      localStorage.setItem('allo_user', JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('allo_user')
    router.push('/')
  }

  const requireAuth = (customRedirectPath?: string): boolean => {
    if (user) return true
    
    // Set the redirect path to current page or custom path
    setRedirectPath(customRedirectPath || pathname)
    setShowLoginRequired(true)
    return false
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        requireAuth,
        showLoginRequired,
        setShowLoginRequired,
        redirectPath,
        setRedirectPath,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
