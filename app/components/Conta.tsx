'use client'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import styles from './styles/Conta.module.css'

type ContaProps = {
  open: boolean
  onClose: () => void
}

type ViewType = 'login' | 'signup' | 'forgotPassword'

export default function Conta({ open, onClose }: ContaProps) {
  const [currentView, setCurrentView] = useState<ViewType>('login')
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  if (!open) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Login com email OU username
    const { email, password } = formData
    alert(`Login realizado com: ${email} e senha: ${password}`)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    const { email, username, password, confirmPassword } = formData
    
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!')
      return
    }
    
    alert(`Cadastro realizado!\nEmail: ${email}\nUsername: ${username}`)
  }

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    const { email } = formData
    
    if (!email) {
      alert('Por favor, digite seu email para redefinir a senha')
      return
    }
    
    alert(`Link de redefinição enviado para: ${email}`)
  }

  const resetForm = () => {
    setFormData({
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    })
  }

  const renderLoginForm = () => (
    <form onSubmit={handleLogin} className={styles.form}>
      <input
        type="text"
        name="email"
        placeholder="Email ou Nome de Usuário"
        value={formData.email}
        onChange={handleInputChange}
        className={styles.input}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleInputChange}
        className={styles.input}
        required
      />
      
      <div className={styles.linksContainer}>
        <button
          type="button"
          className={styles.forgotPassword}
          onClick={() => {
            resetForm()
            setCurrentView('forgotPassword')
          }}
        >
          Esqueci a senha
        </button>
      </div>

      <button type="submit" className={styles.submitButton}>
        Entrar
      </button>
    </form>
  )

  const renderSignupForm = () => (
    <form onSubmit={handleSignup} className={styles.form}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className={styles.input}
        required
      />
      <input
        type="text"
        name="username"
        placeholder="Nome de Usuário"
        value={formData.username}
        onChange={handleInputChange}
        className={styles.input}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleInputChange}
        className={styles.input}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar Senha"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        className={styles.input}
        required
      />

      <button type="submit" className={styles.submitButton}>
        Criar Conta
      </button>
    </form>
  )

  const renderForgotPasswordForm = () => (
    <form onSubmit={handleForgotPassword} className={styles.form}>
      <p className={styles.signupText}>
        Digite seu email para receber um link de redefinição de senha:
      </p>
      
      <input
        type="email"
        name="email"
        placeholder="Seu email"
        value={formData.email}
        onChange={handleInputChange}
        className={styles.input}
        required
      />

      <button type="submit" className={styles.submitButton}>
        Enviar Link de Redefinição
      </button>

      <button
        type="button"
        className={styles.forgotPassword}
        onClick={() => {
          resetForm()
          setCurrentView('login')
        }}
        style={{ marginTop: '1rem', textAlign: 'center', width: '100%' }}
      >
        ← Voltar para o Login
      </button>
    </form>
  )

  const getTitle = () => {
    switch (currentView) {
      case 'login': return 'Login'
      case 'signup': return 'Criar Conta'
      case 'forgotPassword': return 'Redefinir Senha'
      default: return 'Login'
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>

        <h2 className={styles.title}>{getTitle()}</h2>

        {/* Tabs apenas para Login/Cadastro */}
        {(currentView === 'login' || currentView === 'signup') && (
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${currentView === 'login' ? styles.tabActive : ''}`}
              onClick={() => {
                resetForm()
                setCurrentView('login')
              }}
            >
              Login
            </button>
            <button
              className={`${styles.tab} ${currentView === 'signup' ? styles.tabActive : ''}`}
              onClick={() => {
                resetForm()
                setCurrentView('signup')
              }}
            >
              Cadastro
            </button>
          </div>
        )}

        {/* Formulários */}
        {currentView === 'login' && renderLoginForm()}
        {currentView === 'signup' && renderSignupForm()}
        {currentView === 'forgotPassword' && renderForgotPasswordForm()}

        {/* Divisor e Google apenas no Login/Cadastro */}
        {(currentView === 'login' || currentView === 'signup') && (
          <>
            <div className={styles.divider}>
              <hr className={styles.dividerLine} />
              <span className={styles.dividerText}>ou</span>
              <hr className={styles.dividerLine} />
            </div>

            <button
              onClick={() => alert('Login com Google (implementar auth)')}
              className={styles.googleButton}
            >
              <FcGoogle className={styles.googleIcon} />
              <span className={styles.googleText}>
                {currentView === 'login' ? 'Entrar' : 'Cadastrar'} com Google
              </span>
            </button>

            {/* Link de alternância */}
            <p className={styles.signupText}>
              {currentView === 'login' ? 'Não tem uma conta? ' : 'Já tem uma conta? '}
              <button
                className={styles.signupLink}
                onClick={() => {
                  resetForm()
                  setCurrentView(currentView === 'login' ? 'signup' : 'login')
                }}
              >
                {currentView === 'login' ? 'Cadastre-se' : 'Fazer Login'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}