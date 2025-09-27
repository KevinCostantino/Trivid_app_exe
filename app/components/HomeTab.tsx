'use client'


import { useRef } from 'react'
import styles from './styles/HomeTab.module.css'
import VideoDownloader from './VideoDownloader'


export default function HomeTab() {
  const videoDownloaderRef = useRef<any>(null)

  const handlePasteAndSearch = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (!text) return
      if (videoDownloaderRef.current) {
        videoDownloaderRef.current.pasteAndSearch(text)
      }
    } catch {}
  }

  return (
    <div className={styles.container}>
      {/* Seção Colar e Buscar */}
      <div className={styles.pasteSection}>
        <div className={styles.pasteContent}>
          <h2 className={styles.pasteTitle}>Cole ou busque seu vídeo</h2>
          <button onClick={handlePasteAndSearch} className={styles.pasteButton}>
            <span className={styles.pasteIcon}>📋</span>
            Colar da Área de Transferência e Buscar
          </button>
        </div>
      </div>

      {/* Video Downloader */}
      <VideoDownloader ref={videoDownloaderRef} />

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