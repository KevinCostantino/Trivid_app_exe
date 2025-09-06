'use client'

import { useState } from 'react'
import VideoDownloader from './VideoDownloader'
import styles from './styles/HomeTab.module.css'

export default function HomeTab() {
  const [message, setMessage] = useState<string | null>(null)

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (!text) {
        setMessage('Nenhum link encontrado na área de transferência.')
        return
      }
      setMessage(`Link detectado: ${text}`)
      // Aqui você pode chamar uma função para detectar a plataforma
    } catch {
      setMessage('Não foi possível acessar a área de transferência.')
    }
  }

  return (
    <div className={styles.container}>
      {/* Seção Principal - Paste Here */}
      <div className={styles.pasteSection}>
        <div className={styles.pasteContent}>
          <h2 className={styles.pasteTitle}>
            Click and paste the link here
          </h2>
          
          <button
            onClick={handlePaste}
            className={styles.pasteButton}
          >
            <svg className={styles.pasteIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Paste Here
          </button>
          
          {message && (
            <div className={styles.messageBox}>
              <p className={styles.messageText}>{message}</p>
            </div>
          )}
        </div>
      </div>

      {/* Seção de Download */}
      <VideoDownloader />
      
      {/* Seção de Recursos */}
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>
          Recursos Disponíveis
        </h2>
        
        <div className={styles.featuresGrid}>
          <div className={`${styles.featureCard} ${styles.youtubeCard}`}>
            <div className={styles.featureIcon}>🎥</div>
            <h3 className={styles.featureTitle}>YouTube</h3>
            <p className={styles.featureDescription}>Downloads até 4K</p>
          </div>
          
          <div className={`${styles.featureCard} ${styles.twitchCard}`}>
            <div className={styles.featureIcon}>🎮</div>
            <h3 className={styles.featureTitle}>Twitch</h3>
            <p className={styles.featureDescription}>VODs e streams</p>
          </div>
          
          <div className={`${styles.featureCard} ${styles.spotifyCard}`}>
            <div className={styles.featureIcon}>🎵</div>
            <h3 className={styles.featureTitle}>Spotify</h3>
            <p className={styles.featureDescription}>Áudio de alta qualidade</p>
          </div>
        </div>
      </div>
    </div>
  )
}