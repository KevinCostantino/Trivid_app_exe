'use client'

import { useState } from 'react'
import styles from './styles/HistoryPanel.module.css'

type HistoryPanelProps = {
  open: boolean
  onToggle: () => void
}

export default function HistoryPanel({ open, onToggle }: HistoryPanelProps) {
  const [isTwoColumns, setIsTwoColumns] = useState(true)

  const mockHistoryData = [
    {
      id: 1,
      title: "Como programar em Python - Tutorial Completo",
      type: "MP4",
      quality: "1080p",
      duration: "15:30",
      size: "245MB",
      date: "2024-01-15",
      platform: "youtube"
    },
    {
      id: 2,
      title: "Tutorial Next.js - Aprenda do Zero",
      type: "MP3",
      quality: "320kbps",
      duration: "08:45",
      size: "12MB",
      date: "2024-01-14",
      platform: "youtube"
    },
    {
      id: 3,
      title: "Live Gaming Session - Apex Legends",
      type: "MP4",
      quality: "720p",
      duration: "2:15:30",
      size: "1.2GB",
      date: "2024-01-13",
      platform: "twitch"
    },
    {
      id: 4,
      title: "Música Relaxante para Estudar",
      type: "MP3",
      quality: "256kbps",
      duration: "1:30:00",
      size: "82MB",
      date: "2024-01-12",
      platform: "spotify"
    }
  ]

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'youtube': return styles.youtubePlatform
      case 'twitch': return styles.twitchPlatform
      case 'spotify': return styles.spotifyPlatform
      default: return styles.defaultPlatform
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube': return '🎥'
      case 'twitch': return '🎮'
      case 'spotify': return '🎵'
      default: return '📹'
    }
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>
          History
        </h3>
        
        <div className={styles.controls}>
          {/* Toggle Columns Button */}
          <button
            onClick={() => setIsTwoColumns(!isTwoColumns)}
            className={styles.controlButton}
            title={isTwoColumns ? "Uma coluna" : "Duas colunas"}
          >
            {isTwoColumns ? (
              <svg className={styles.controlIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className={styles.controlIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h7M4 12h7M4 18h7M15 6h5M15 12h5M15 18h5" />
              </svg>
            )}
          </button>
          
          {/* Toggle Panel Button */}
          <button
            onClick={onToggle}
            className={styles.controlButton}
            title={open ? "Recolher" : "Expandir"}
          >
            <svg 
              className={`${styles.toggleIcon} ${open ? styles.toggleIconOpen : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Content */}
      {open && (
        <div className={styles.content}>
          <div className={`${styles.grid} ${isTwoColumns ? styles.gridTwoColumns : styles.gridOneColumn}`}>
            {mockHistoryData.map((item) => (
              <div
                key={item.id}
                className={styles.historyItem}
              >
                {/* Platform Icon */}
                <div className={`${styles.platformIcon} ${getPlatformColor(item.platform)}`}>
                  <span className={styles.iconEmoji}>{getPlatformIcon(item.platform)}</span>
                </div>
                
                {/* File Info */}
                <div className={styles.fileInfo}>
                  <h4 className={styles.fileTitle}>
                    {item.title}
                  </h4>
                  <div className={styles.fileDetails}>
                    <span>{item.type} - {item.quality}</span>
                    <span>Time: {item.duration}</span>
                    <span>Size: {item.size}</span>
                  </div>
                  <div className={styles.fileDate}>
                    {item.date}
                  </div>
                </div>
                
                {/* Actions */}
                <div className={styles.actions}>
                  <button 
                    className={`${styles.actionButton} ${styles.downloadButton} group`}
                    title="Baixar novamente"
                  >
                    <svg className={`${styles.actionIcon} ${styles.downloadIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  
                  <button 
                    className={`${styles.actionButton} ${styles.deleteButton} group`}
                    title="Deletar"
                  >
                    <svg className={`${styles.actionIcon} ${styles.deleteIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {mockHistoryData.length === 0 && (
            <div className={styles.emptyState}>
              <p>Nenhum download no histórico</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}