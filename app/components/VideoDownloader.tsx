'use client'

import { useState } from 'react'
import styles from './styles/VideoDownloader.module.css'

export default function VideoDownloader() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoInfo, setVideoInfo] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const getVideoInfo = async () => {
    if (!url) {
      setError('Por favor, insira uma URL válida')
      return
    }
    
    setLoading(true)
    setError(null)
    
    try {
      // Usar a API route do Next.js em vez do backend direto
      const response = await fetch('/api/video/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `Erro: ${response.status}`)
      }

      setVideoInfo(data)
      console.log('✅ Vídeo carregado:', data)
      
    } catch (error: any) {
      console.error('❌ Erro ao buscar vídeo:', error)
      setError(error.message || 'Erro ao processar o vídeo. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = (format: string) => {
    if (!videoInfo) return
    
    // Simulação de download
    const fileName = `${videoInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.${format.toLowerCase().includes('mp3') ? 'mp3' : 'mp4'}`
    alert(`✅ Download iniciado: ${fileName}`)
    
    console.log('📥 Download:', { url, format, videoInfo })
  }

  return (
    <div className={styles.container}>
      {/* Input URL */}
      <div className={styles.inputSection}>
        <h2 className={styles.sectionTitle}>📺 Baixar Vídeo do YouTube</h2>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Cole a URL do YouTube aqui... (ex: https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={styles.urlInput}
            onKeyPress={(e) => e.key === 'Enter' && !loading && getVideoInfo()}
          />
          <button
            onClick={getVideoInfo}
            disabled={loading}
            className={styles.analyzeButton}
          >
            {loading ? (
              <>
                <div className={styles.loadingSpinner}></div>
                <span>Analisando...</span>
              </>
            ) : (
              <>
                🔍 <span>Analisar Vídeo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className={styles.errorMessage}>
          <span>⚠️ {error}</span>
        </div>
      )}

      {/* Video Info */}
      {videoInfo && (
        <div className={styles.videoInfo}>
          <div className={styles.videoHeader}>
            <h3 className={styles.videoTitle}>{videoInfo.title}</h3>
            <div className={styles.videoMeta}>
              <span>📺 {videoInfo.channel}</span>
              <span>⏱️ {videoInfo.duration}</span>
              {videoInfo.views && <span>👁️ {videoInfo.views}</span>}
            </div>
          </div>

          {videoInfo.thumbnail && (
            <div className={styles.thumbnailContainer}>
              <img 
                src={videoInfo.thumbnail} 
                alt="Thumbnail do vídeo"
                className={styles.thumbnail}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDQ4MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMzYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjI0MCIgY3k9IjE4MCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIzMCAxNjBMMjYwIDE4MEwyMzAgMjAwVjE2MFoiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjI0MCIgeT0iMjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBM0FGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkVycm8gYW8gY2FycmVnYXIgaW1hZ2VtPC90ZXh0Pgo8L3N2Zz4K'
                }}
              />
            </div>
          )}
          
          <div className={styles.downloadSection}>
            <h4 className={styles.downloadTitle}>📥 Opções de Download</h4>
            
            <div className={styles.formatGrid}>
              <div className={styles.formatGroup}>
                <h5>🎬 Vídeo (MP4)</h5>
                <div className={styles.qualityButtons}>
                  {videoInfo.quality?.map((quality: string) => (
                    <button 
                      key={quality}
                      onClick={() => handleDownload(`mp4_${quality}`)}
                      className={styles.downloadButton}
                    >
                      {quality}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className={styles.formatGroup}>
                <h5>🎵 Áudio (MP3)</h5>
                <div className={styles.qualityButtons}>
                  <button 
                    onClick={() => handleDownload('mp3_320')}
                    className={styles.downloadButton}
                  >
                    320 kbps
                  </button>
                  <button 
                    onClick={() => handleDownload('mp3_128')}
                    className={styles.downloadButton}
                  >
                    128 kbps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}