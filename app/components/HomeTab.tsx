'use client'

import { useState } from 'react'
import DownloadScreen from './DownloadScreen'
import styles from './styles/HomeTab.module.css'

export default function HomeTab() {
  const [showDownloadScreen, setShowDownloadScreen] = useState(false)
  const [videoUrl, setVideoUrl] = useState<string>('')

  const handlePasteAndSearch = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (text) {
        setVideoUrl(text)
        setShowDownloadScreen(true)
      }
    } catch (err) {
      console.error('Erro ao ler área de transferência:', err)
    }
  }

  const handleCloseDownloadScreen = () => {
    setShowDownloadScreen(false)
    setVideoUrl('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.pasteSection}>
        <div className={styles.pasteContent}>
          <button onClick={handlePasteAndSearch} className={styles.pasteButton}>
            <span className={styles.pasteIcon}>📋</span>
            Clique para colar a URL
          </button>
        </div>

        <div style={{ padding: '20px' }} />
        
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

      {/* Modal de Download */}
      <DownloadScreen 
        open={showDownloadScreen}
        onClose={handleCloseDownloadScreen}
        initialUrl={videoUrl}
      />
    </div>
  )
}