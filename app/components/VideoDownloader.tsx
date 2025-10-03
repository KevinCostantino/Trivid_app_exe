'use client'

import { useState, useEffect } from 'react'
import styles from './styles/VideoDownloader.module.css'

type Props = {
  initialUrl: string
}

const VideoDownloader = ({ initialUrl }: Props) => {
  const [url, setUrl] = useState(initialUrl)
  const [loading, setLoading] = useState(false)
  const [videoInfo, setVideoInfo] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  // Sempre que initialUrl mudar → busca imediatamente
  useEffect(() => {
    if (initialUrl) {
      setUrl(initialUrl)
      getVideoInfo(initialUrl)
    }
  }, [initialUrl])

  const getVideoInfo = async (finalUrl: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/video/info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: finalUrl,
          format_type: 'video_with_audio',
          quality: 'best'
        }),
      })
      if (!response.ok) throw new Error(`Erro: ${response.status}`)
      const data = await response.json()
      setVideoInfo(data)
    } catch (error) {
      console.error('Erro ao buscar vídeo:', error)
      setError('Erro ao buscar informações do vídeo. Verifique se o backend está rodando.')
      setVideoInfo({
        title: 'Vídeo de Exemplo (Simulado)',
        thumbnail: '',
        duration: '5:30',
        channel: 'Canal Exemplo'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      {loading && <p>⏳ Buscando informações do vídeo...</p>}
      {error && <div className={styles.errorMessage}><span>⚠️ {error}</span></div>}
      {videoInfo && (
        <div className={styles.videoInfo}>
          <h3 className={styles.videoTitle}>{videoInfo.title}</h3>
          <div className={styles.videoMeta}>
            <span>📺 Canal: {videoInfo.channel}</span>
            <span>⏱️ Duração: {videoInfo.duration}</span>
          </div>
          {videoInfo.thumbnail && (
            <div className={styles.thumbnailContainer}>
              <img 
                src={videoInfo.thumbnail} 
                alt="Thumbnail do vídeo"
                className={styles.thumbnail}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDcuNSA2Ny41TDE3Mi41IDgyLjVMMTQ3LjUgOTcuNVY2Ny41WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
                }}
              />
            </div>
          )}

          <div className={styles.downloadSection}>
            <button className={styles.downloadButton}>
              📥 Download MP4
            </button>
            <button className={styles.downloadButton}>
              🎵 Download MP3
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoDownloader
