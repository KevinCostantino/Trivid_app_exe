'use client'

import { useState } from 'react'
import styles from './styles/HomeTab.module.css'
import VideoDownloader from './VideoDownloader' // Verificar se está correto

export default function HomeTab() {
  const [message, setMessage] = useState<string | null>(null)

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (!text) {
        setMessage('Nenhum texto encontrado na área de transferência')
        return
      }
      setMessage(`Link detectado: ${text}`)
    } catch {
      setMessage('Erro ao acessar área de transferência')
    }
  }

  return (
    <div className={styles.container}>
      {/* Seção Cole URL */}
      <div className={styles.pasteSection}>
        <div className={styles.pasteContent}>
          <h2 className={styles.pasteTitle}>Cole sua URL aqui</h2>
          <button onClick={handlePaste} className={styles.pasteButton}>
            <span className={styles.pasteIcon}>📋</span>
            Colar da Área de Transferência
          </button>
          {message && (
            <div className={styles.messageBox}>
              <span className={styles.messageText}>{message}</span>
            </div>
          )}
        </div>
      </div>

      {/* Video Downloader */}
      <VideoDownloader />
      
      {/* Features Section */}
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Plataformas Suportadas</h2>
        <div className={styles.featuresGrid}>
          <div className={`${styles.featureCard} ${styles.youtubeCard}`}>
            <div className={styles.featureIcon}>📺</div>
            <h3 className={styles.featureTitle}>YouTube</h3>
            <p className={styles.featureDescription}>
              Baixe vídeos e áudios em alta qualidade
            </p>
          </div>
          
          <div className={`${styles.featureCard} ${styles.twitchCard}`}>
            <div className={styles.featureIcon}>🎮</div>
            <h3 className={styles.featureTitle}>Twitch</h3>
            <p className={styles.featureDescription}>
              Downloads de streams e clipes
            </p>
          </div>
          
          <div className={`${styles.featureCard} ${styles.spotifyCard}`}>
            <div className={styles.featureIcon}>🎵</div>
            <h3 className={styles.featureTitle}>Spotify</h3>
            <p className={styles.featureDescription}>
              Extraia áudios de playlists
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}