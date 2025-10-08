'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './styles/DownloadScreen.module.css'

type DownloadOption = {
  resolution: string
  format: string
  size?: string
  quality?: string
}

type VideoInfo = {
  title: string
  duration: string
  platform: string
  thumbnail?: string
  channel: string
}

type DownloadScreenProps = {
  initialUrl?: string
  isPage?: boolean
  open?: boolean
  onClose?: () => void
}

// Novas opções separadas por formato e resolução
const videoResolutions = [
  { resolution: '1080p', size: '~250MB', quality: 'Full HD' },
  { resolution: '720p', size: '~150MB', quality: 'HD' },
  { resolution: '480p', size: '~80MB', quality: 'SD' },
  { resolution: '360p', size: '~50MB', quality: 'SD' },
  { resolution: '240p', size: '~30MB', quality: 'Low' },
  { resolution: '144p', size: '~15MB', quality: 'Low' }
]

const videoFormats = ['MP4', 'MKV', 'WEBM', 'AVI']

const audioOptions = [
  { resolution: '320kbps', format: 'MP3', size: '~15MB', quality: 'High' },
  { resolution: '256kbps', format: 'WAV', size: '~12MB', quality: 'Medium' },
  { resolution: '192kbps', format: 'AAC', size: '~10MB', quality: 'Standard' }
]

const imageOptions = [
  { resolution: 'Max Quality', format: 'JPG', size: '~5MB', quality: 'Original' },
  { resolution: 'High Quality', format: 'PNG', size: '~2MB', quality: 'HD' },
  { resolution: 'Medium Quality', format: 'WEBP', size: '~1MB', quality: 'SD' },
]

export default function DownloadScreen({ 
  initialUrl = '', 
  isPage = false,
  open = true,
  onClose 
}: DownloadScreenProps) {
  const router = useRouter()
  const searchParams = isPage ? useSearchParams() : null
  
  const urlFromParams = searchParams?.get('url')
  const decodedUrl = urlFromParams ? decodeURIComponent(urlFromParams) : ''
  
  const [videoUrl, setVideoUrl] = useState<string>(initialUrl || decodedUrl)
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [selectedOption, setSelectedOption] = useState<string>('video')
  const [selectedResolution, setSelectedResolution] = useState<string>('')
  const [selectedVideoFormat, setSelectedVideoFormat] = useState<string>('')
  const [selectedAudioFormat, setSelectedAudioFormat] = useState<string>('')
  const [selectedImageFormat, setSelectedImageFormat] = useState<string>('')
  const [destinationFolder, setDestinationFolder] = useState<string>('C:\\Users\\Kevin\\Downloads')
  const [isLoading, setIsLoading] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [error, setError] = useState<string>('')
  const [isResolutionDropdownOpen, setIsResolutionDropdownOpen] = useState(false)
  const [isFormatDropdownOpen, setIsFormatDropdownOpen] = useState(false)

  useEffect(() => {
    if (decodedUrl) {
      setVideoUrl(decodedUrl)
      loadVideoInfo(decodedUrl)
    } else if (initialUrl) {
      setVideoUrl(initialUrl)
      loadVideoInfo(initialUrl)
    }
  }, [decodedUrl, initialUrl])

  // ... (mantenha as funções extractVideoId, loadVideoInfo, loadVideoDuration, handlePasteUrl, handleSearch iguais)

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/,
      /youtube\.com\/watch\?.*v=([^&]+)/,
      /youtu\.be\/([^?]+)/
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }
    
    return null
  }

  const loadVideoInfo = async (url: string) => {
    setIsLoading(true)
    setError('')
    setVideoInfo(null)

    try {
      const videoId = extractVideoId(url)
      
      if (!videoId) {
        throw new Error('URL do YouTube inválida')
      }

      const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
      
      const response = await fetch(oembedUrl)
      
      if (!response.ok) {
        throw new Error('Não foi possível carregar informações do vídeo')
      }

      const data = await response.json()

      const videoInfoData: VideoInfo = {
        title: data.title,
        channel: data.author_name,
        duration: 'Carregando...',
        platform: 'YouTube',
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      }

      setVideoInfo(videoInfoData)

      try {
        await loadVideoDuration(videoId, videoInfoData)
      } catch (durationError) {
        console.warn('Não foi possível carregar a duração:', durationError)
      }

    } catch (err) {
      console.error('Erro ao carregar informações:', err)
      setError(err instanceof Error ? err.message : 'Erro ao carregar informações do vídeo')
    } finally {
      setIsLoading(false)
    }
  }

  const loadVideoDuration = async (videoId: string, currentVideoInfo: VideoInfo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const simulatedDuration = '15:30'
        
        setVideoInfo(prev => prev ? {
          ...prev,
          duration: simulatedDuration
        } : null)
        
        resolve(simulatedDuration)
      }, 1000)
    })
  }

  const handlePasteUrl = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (text) {
        setVideoUrl(text)
        loadVideoInfo(text)
      }
    } catch (err) {
      console.error('Erro ao ler área de transferência:', err)
      const manualUrl = prompt('Cole a URL do vídeo:')
      if (manualUrl) {
        setVideoUrl(manualUrl)
        loadVideoInfo(manualUrl)
      }
    }
  }

  const handleSearch = () => {
    if (videoUrl) {
      loadVideoInfo(videoUrl)
    }
  }

  const handleContentTypeChange = (type: string) => {
    setSelectedOption(type)
    setSelectedResolution('')
    setSelectedVideoFormat('')
    setSelectedAudioFormat('')
    setSelectedImageFormat('')
    setIsResolutionDropdownOpen(false)
    setIsFormatDropdownOpen(false)
  }

  const handleResolutionSelect = (resolution: string) => {
    setSelectedResolution(resolution)
    setIsResolutionDropdownOpen(false)
  }

  const handleVideoFormatSelect = (format: string) => {
    setSelectedVideoFormat(format)
    setIsFormatDropdownOpen(false)
  }

  const handleAudioFormatSelect = (option: any) => {
    setSelectedResolution(option.resolution)
    setSelectedAudioFormat(option.format)
  }

  const handleImageFormatSelect = (option: any) => {
    setSelectedResolution(option.resolution)
    setSelectedImageFormat(option.format)
  }

  const getSelectedFormat = () => {
    if (selectedOption === 'video') {
      return selectedResolution && selectedVideoFormat ? `${selectedResolution} - ${selectedVideoFormat}` : ''
    } else if (selectedOption === 'audio') {
      return selectedAudioFormat ? `${selectedResolution} - ${selectedAudioFormat}` : ''
    } else if (selectedOption === 'image') {
      return selectedImageFormat ? `${selectedResolution} - ${selectedImageFormat}` : ''
    }
    return ''
  }

  const handleBrowseFolder = () => {
    const newFolder = prompt('Digite o caminho da pasta:', destinationFolder)
    if (newFolder) {
      setDestinationFolder(newFolder)
    }
  }

  const handleDownload = async () => {
    const selectedFormat = getSelectedFormat()
    if (!selectedFormat) return
    
    setIsDownloading(true)
    
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    alert(`Download concluído!\nArquivo salvo em: ${destinationFolder}`)
    setIsDownloading(false)
    
    if (!isPage && onClose) {
      onClose()
    }
  }

  const handleCancel = () => {
    if (isPage) {
      router.push('/')
    } else if (onClose) {
      onClose()
    }
  }

  // Se for modal e não estiver aberto, não renderiza
  if (!isPage && !open) return null

  // Conteúdo principal
  const content = (
    <div className={`${styles.container} ${isPage ? styles.pageContainer : ''}`}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>TriviD - YouTube Downloader</h1>
        <div className={styles.divider}></div>
      </div>

      {/* URL Input Section */}
      <div className={styles.urlSection}>
        <div className={styles.urlInputContainer}>
          <input
            type="text"
            placeholder="Cole a URL do vídeo aqui..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className={styles.urlInput}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handlePasteUrl} className={styles.pasteButton}>
            📋 Colar
          </button>
          <button onClick={handleSearch} className={styles.searchButton}>
            🔍 Buscar
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className={styles.error}>
          <p>❌ {error}</p>
        </div>
      )}

      {/* Video Info */}
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Carregando informações do vídeo...</p>
        </div>
      ) : videoInfo && (
        <div className={styles.videoInfo}>
          {videoInfo.thumbnail && (
            <img 
              src={videoInfo.thumbnail} 
              alt="Thumbnail" 
              className={styles.thumbnail}
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${extractVideoId(videoUrl)}/hqdefault.jpg`
              }}
            />
          )}
          <div className={styles.videoDetails}>
            <h2 className={styles.videoTitle}>{videoInfo.title}</h2>
            <div className={styles.videoMeta}>
              <span className={styles.channel}>{videoInfo.channel}</span>
              <span className={styles.duration}>Duração: {videoInfo.duration}</span>
              <span className={styles.platform}>Plataforma: {videoInfo.platform}</span>
            </div>
          </div>
        </div>
      )}

      {/* Download Options - VERSÃO COM DOIS SELECTORES SEPARADOS */}
      {videoInfo && !isLoading && (
        <div className={styles.downloadOptions}>
          <h3 className={styles.sectionTitle}>Opções de Download:</h3>
          
          {/* Tipo de Conteúdo */}
          <div className={styles.contentTypeSelector}>
            <button
              className={`${styles.contentTypeButton} ${selectedOption === 'video' ? styles.active : ''}`}
              onClick={() => handleContentTypeChange('video')}
            >
              📹 Vídeo
            </button>
            <button
              className={`${styles.contentTypeButton} ${selectedOption === 'audio' ? styles.active : ''}`}
              onClick={() => handleContentTypeChange('audio')}
            >
              🎵 Áudio
            </button>
            <button
              className={`${styles.contentTypeButton} ${selectedOption === 'image' ? styles.active : ''}`}
              onClick={() => handleContentTypeChange('image')}
            >
              🖼️ Imagem
            </button>
          </div>

          {/* Seletores separados para Vídeo */}
          {selectedOption === 'video' && (
            <div className={styles.videoSelectors}>
              <div className={styles.selectorRow}>
                {/* Seletor de Resolução */}
                <div className={styles.selectorContainer}>
                  <label className={styles.selectorLabel}>Resolução:</label>
                  <div className={styles.dropdownWrapper}>
                    <button
                      className={`${styles.dropdownTrigger} ${isResolutionDropdownOpen ? styles.open : ''}`}
                      onClick={() => setIsResolutionDropdownOpen(!isResolutionDropdownOpen)}
                    >
                      {selectedResolution ? (
                        <div className={styles.selectedPreview}>
                          <span className={styles.selectedText}>{selectedResolution}</span>
                        </div>
                      ) : (
                        <span className={styles.placeholder}>Selecione a resolução...</span>
                      )}
                      <span className={styles.dropdownArrow}>▼</span>
                    </button>

                    {isResolutionDropdownOpen && (
                      <div className={styles.dropdownMenu}>
                        <div className={styles.formatsGrid}>
                          {videoResolutions.map((option, index) => (
                            <div
                              key={index}
                              className={`${styles.optionItem} ${
                                selectedResolution === option.resolution ? styles.selected : ''
                              }`}
                              onClick={() => handleResolutionSelect(option.resolution)}
                            >
                              <div className={styles.optionMain}>
                                <span className={styles.optionTitle}>{option.resolution}</span>
                              </div>
                              <div className={styles.optionDetails}>
                                <span className={styles.optionSize}>{option.size}</span>
                                <span className={styles.optionQuality}>{option.quality}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Seletor de Formato */}
                <div className={styles.selectorContainer}>
                  <label className={styles.selectorLabel}>Formato:</label>
                  <div className={styles.dropdownWrapper}>
                    <button
                      className={`${styles.dropdownTrigger} ${isFormatDropdownOpen ? styles.open : ''}`}
                      onClick={() => setIsFormatDropdownOpen(!isFormatDropdownOpen)}
                    >
                      {selectedVideoFormat ? (
                        <div className={styles.selectedPreview}>
                          <span className={styles.selectedText}>{selectedVideoFormat}</span>
                        </div>
                      ) : (
                        <span className={styles.placeholder}>Selecione o formato...</span>
                      )}
                      <span className={styles.dropdownArrow}>▼</span>
                    </button>

                    {isFormatDropdownOpen && (
                      <div className={styles.dropdownMenu}>
                        <div className={styles.formatsGrid}>
                          {videoFormats.map((format, index) => (
                            <div
                              key={index}
                              className={`${styles.formatOption} ${
                                selectedVideoFormat === format ? styles.selected : ''
                              }`}
                              onClick={() => handleVideoFormatSelect(format)}
                            >
                              <span className={styles.formatText}>{format}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Opções para Áudio (dropdown único) */}
          {selectedOption === 'audio' && (
            <div className={styles.audioSelector}>
              <div className={styles.selectorContainer}>
                <label className={styles.selectorLabel}>Qualidade de Áudio:</label>
                <div className={styles.dropdownWrapper}>
                  <button
                    className={`${styles.dropdownTrigger} ${isFormatDropdownOpen ? styles.open : ''}`}
                    onClick={() => setIsFormatDropdownOpen(!isFormatDropdownOpen)}
                  >
                    {selectedAudioFormat ? (
                      <div className={styles.selectedPreview}>
                        <span className={styles.selectedText}>{selectedResolution} - {selectedAudioFormat}</span>
                      </div>
                    ) : (
                      <span className={styles.placeholder}>Selecione a qualidade...</span>
                    )}
                    <span className={styles.dropdownArrow}>▼</span>
                  </button>

                  {isFormatDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      <div className={styles.formatsGrid}>
                        {audioOptions.map((option, index) => (
                          <div
                            key={index}
                            className={`${styles.optionItem} ${
                              selectedAudioFormat === option.format ? styles.selected : ''
                            }`}
                            onClick={() => handleAudioFormatSelect(option)}
                          >
                            <div className={styles.optionMain}>
                              <span className={styles.optionTitle}>{option.resolution}</span>
                              <span className={styles.optionFormat}>{option.format}</span>
                            </div>
                            <div className={styles.optionDetails}>
                              <span className={styles.optionSize}>{option.size}</span>
                              <span className={styles.optionQuality}>{option.quality}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Opções para Imagem (dropdown único) */}
          {selectedOption === 'image' && (
            <div className={styles.imageSelector}>
              <div className={styles.selectorContainer}>
                <label className={styles.selectorLabel}>Qualidade da Imagem:</label>
                <div className={styles.dropdownWrapper}>
                  <button
                    className={`${styles.dropdownTrigger} ${isFormatDropdownOpen ? styles.open : ''}`}
                    onClick={() => setIsFormatDropdownOpen(!isFormatDropdownOpen)}
                  >
                    {selectedImageFormat ? (
                      <div className={styles.selectedPreview}>
                        <span className={styles.selectedText}>{selectedResolution} - {selectedImageFormat}</span>
                      </div>
                    ) : (
                      <span className={styles.placeholder}>Selecione a qualidade...</span>
                    )}
                    <span className={styles.dropdownArrow}>▼</span>
                  </button>

                  {isFormatDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      <div className={styles.formatsGrid}>
                        {imageOptions.map((option, index) => (
                          <div
                            key={index}
                            className={`${styles.optionItem} ${
                              selectedImageFormat === option.format ? styles.selected : ''
                            }`}
                            onClick={() => handleImageFormatSelect(option)}
                          >
                            <div className={styles.optionMain}>
                              <span className={styles.optionTitle}>{option.resolution}</span>
                              <span className={styles.optionFormat}>{option.format}</span>
                            </div>
                            <div className={styles.optionDetails}>
                              <span className={styles.optionSize}>{option.size}</span>
                              <span className={styles.optionQuality}>{option.quality}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Destination Folder */}
          <div className={styles.destinationSection}>
            <h3 className={styles.sectionTitle}>Pasta de Destino</h3>
            <div className={styles.folderSelector}>
              <input
                type="text"
                value={destinationFolder}
                onChange={(e) => setDestinationFolder(e.target.value)}
                className={styles.folderInput}
              />
              <button onClick={handleBrowseFolder} className={styles.browseButton}>
                Procurar
              </button>
            </div>
          </div>

          {/* Selected Format Display */}
          {getSelectedFormat() && (
            <div className={styles.selectedFormatDisplay}>
              <strong>Formato selecionado:</strong> 
              <span className={styles.selectedFormatText}>{getSelectedFormat()}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button 
              onClick={handleCancel}
              className={styles.cancelButton}
              disabled={isDownloading}
            >
              {isPage ? 'Voltar para Home' : 'Cancelar'}
            </button>
            <button 
              onClick={handleDownload}
              className={styles.downloadButton}
              disabled={!getSelectedFormat() || isDownloading}
            >
              {isDownloading ? (
                <>
                  <div className={styles.downloadSpinner}></div>
                  Baixando...
                </>
              ) : (
                'Download'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )

  // Se for página, retorna o conteúdo diretamente
  if (isPage) {
    return content
  }

  // Se for modal, retorna com overlay
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>
          ✕
        </button>
        {content}
      </div>
    </div>
  )
}