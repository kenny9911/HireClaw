import { GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function GoogleSignIn({ label = 'Sign in with Google' }: { label?: string }) {
  const { loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  return (
    <>
      {error && (
        <div className="mt-4 rounded-lg border border-red-500/50 bg-red-500/20 p-3 text-sm text-red-400">
          {error}
        </div>
      )}
      <div className="mt-6 flex justify-center">
        <GoogleLogin
          text={label === 'Sign up with Google' ? 'signup_with' : 'signin_with'}
          theme="filled_black"
          size="large"
          width="400"
          onSuccess={async (response) => {
            try {
              setError('')
              if (!response.credential) {
                setError('No credential received from Google')
                return
              }
              await loginWithGoogle(response.credential)
              navigate('/dashboard')
            } catch (err: any) {
              setError(err.response?.data?.error || 'Google sign-in failed')
            }
          }}
          onError={() => {
            setError('Google sign-in was cancelled')
          }}
        />
      </div>
    </>
  )
}
