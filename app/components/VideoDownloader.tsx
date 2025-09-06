'use client'

import { useState, useEffect } from 'react'

interface VideoInfo {
  title: string
  duration: number
  thumbnail: string
  available_formats: Array<{
    type: string
    quality: string
    size: number
    itag: string
  }>
}

interface DownloadStatus {
  task_id: string
  status: 'pending' | 'processing' | 'completed' | 'error'
  progress: number
  message: string
  download_url?: string
  file_size?: number
}

const API_BASE_URL = 'http://localhost:8000'

export default function VideoDownloader() {
  const [url, setUrl] = useState('')
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFormat, setSelectedFormat] = useState('')
  const [downloadStatus, setDownloadStatus] = useState<DownloadStatus | null>(null)
  const [polling, setPolling] = useState(false)

  // Função para obter informações do vídeo
  const getVideoInfo = async () => {
    if (!url.trim()) {
      setError('Por favor, insira uma URL válida')
      return
    }

    setLoading(true)
    setError(null)
    setVideoInfo(null)

    try {
      const response = await fetch(`${API_BASE_URL}/video/info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          format_type: 'video_with_audio'
        }),
      })

      if (!response.ok) {
        throw new Error('Erro ao carregar informações do vídeo')
      }

      const data = await response.json()
      setVideoInfo(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  // Função para iniciar download
  const startDownload = async () => {
    if (!selectedFormat || !videoInfo) return

    const format = videoInfo.available_formats.find(f => f.itag === selectedFormat)
    if (!format) return

    try {
      const response = await fetch(`${API_BASE_URL}/video/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          format_type: format.type,
          quality: format.quality
        }),
      })

      if (!response.ok) {
        throw new Error('Erro ao iniciar download')
      }

      const data = await response.json()
      setDownloadStatus({
        task_id: data.task_id,
        status: 'pending',
        progress: 0,
        message: 'Iniciando download...'
      })
      setPolling(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao iniciar download')
    }
  }

  // Polling para verificar status do download
  useEffect(() => {
    if (!polling || !downloadStatus) return

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/video/status/${downloadStatus.task_id}`)
        if (!response.ok) return

        const status = await response.json()
        setDownloadStatus(status)

        if (status.status === 'completed' || status.status === 'error') {
          setPolling(false)
        }
      } catch (err) {
        console.error('Erro ao verificar status:', err)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [polling, downloadStatus?.task_id])

  // Função para formatar duração
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  // Função para formatar tamanho do arquivo
  const formatFileSize = (bytes: number) => {
    if (bytes >= 1024 * 1024 * 1024) {
      return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
    } else if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
    }
    return `${(bytes / 1024).toFixed(2)} KB`
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Input URL */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Cole a URL do YouTube aqui..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={getVideoInfo}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
          >
            {loading ? 'Carregando...' : 'Buscar Vídeo'}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg">
            {error}
          </div>
        )}
      </div>

      {/* Informações do Vídeo */}
      {videoInfo && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={videoInfo.thumbnail}
                alt="Thumbnail"
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {videoInfo.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Duração: {formatDuration(videoInfo.duration)}
              </p>

              {/* Seleção de Formato */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Escolha o formato:
                </label>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Selecione um formato</option>
                  {videoInfo.available_formats.map((format, index) => (
                    <option key={format.itag} value={format.itag}>
                      {format.type === 'video_with_audio' && '🎥 Vídeo + Áudio'} 
                      {format.type === 'video_only' && '📹 Vídeo HD'} 
                      {format.type === 'audio_only' && '🎵 Apenas Áudio'} 
                      - {format.quality} ({format.size} MB)
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={startDownload}
                disabled={!selectedFormat || polling}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg font-medium transition-colors"
              >
                {polling ? 'Baixando...' : 'Iniciar Download'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status do Download */}
      {downloadStatus && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Status do Download
          </h3>

          {/* Barra de Progresso */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>{downloadStatus.message}</span>
              <span>{downloadStatus.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  downloadStatus.status === 'error' 
                    ? 'bg-red-500' 
                    : downloadStatus.status === 'completed'
                    ? 'bg-green-500'
                    : 'bg-blue-500'
                }`}
                style={{ width: `${downloadStatus.progress}%` }}
              />
            </div>
          </div>

          {/* Link de Download */}
          {downloadStatus.status === 'completed' && downloadStatus.download_url && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <p className="text-green-700 dark:text-green-400 font-medium mb-2">
                ✅ Download concluído!
              </p>
              {downloadStatus.file_size && (
                <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                  Tamanho: {formatFileSize(downloadStatus.file_size)}
                </p>
              )}
              <a
                href={`${API_BASE_URL}${downloadStatus.download_url}`}
                download
                className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                📥 Baixar Arquivo
              </a>
            </div>
          )}

          {/* Erro */}
          {downloadStatus.status === 'error' && (
            <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 rounded-lg">
              <p className="text-red-700 dark:text-red-400 font-medium">
                ❌ {downloadStatus.message}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
