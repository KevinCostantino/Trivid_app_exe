import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url } = body

    // Validação básica
    if (!url) {
      return NextResponse.json(
        { error: 'URL é obrigatória' },
        { status: 400 }
      )
    }

    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
      return NextResponse.json(
        { error: 'URL deve ser do YouTube' },
        { status: 400 }
      )
    }

    // Extrair ID do vídeo
    const videoId = extractVideoId(url)
    
    if (!videoId) {
      return NextResponse.json(
        { error: 'URL do YouTube inválida' },
        { status: 400 }
      )
    }

    // Tentar obter informações reais do vídeo
    let videoInfo
    
    try {
      videoInfo = await getVideoInfo(videoId)
    } catch (error) {
      console.log('❌ Erro ao obter dados reais, usando fallback')
      
      // Fallback com dados básicos usando videoId
      videoInfo = {
        id: videoId,
        title: 'Vídeo do YouTube',
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        duration: 'N/A',
        channel: 'Canal do YouTube',
        views: 'N/A',
        uploadDate: new Date().toISOString().split('T')[0],
        quality: ['1080p', '720p', '480p', '360p'],
        formats: ['MP4', 'MP3'],
        description: 'Vídeo obtido do YouTube'
      }
    }

    console.log('✅ API route processou:', { url, videoId, title: videoInfo.title })

    return NextResponse.json(videoInfo)

  } catch (error) {
    console.error('❌ Erro na API route:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

async function getVideoInfo(videoId: string) {
  // Método 1: Tentar yt-dlp através de uma API pública
  try {
    const response = await fetch(`https://api.youtube.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics`, {
      headers: {
        'Accept': 'application/json',
      }
    })

    if (response.ok) {
      const data = await response.json()
      const video = data.items?.[0]
      
      if (video) {
        return {
          id: videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          duration: formatDuration(video.contentDetails.duration),
          channel: video.snippet.channelTitle,
          views: formatViews(video.statistics.viewCount),
          uploadDate: video.snippet.publishedAt.split('T')[0],
          quality: ['1080p', '720p', '480p', '360p'],
          formats: ['MP4', 'MP3'],
          description: video.snippet.description?.substring(0, 200) + '...' || 'Sem descrição disponível'
        }
      }
    }
  } catch (error) {
    console.log('YouTube API não disponível, tentando método alternativo...')
  }

  // Método 2: Scraping simples do título
  try {
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })

    if (response.ok) {
      const html = await response.text()
      
      // Extrair título
      const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/)
      const title = titleMatch ? titleMatch[1] : 'Vídeo do YouTube'
      
      // Extrair canal
      const channelMatch = html.match(/<meta property="og:site_name" content="([^"]+)"/) || 
                          html.match(/"ownerChannelName":"([^"]+)"/)
      const channel = channelMatch ? channelMatch[1] : 'Canal do YouTube'
      
      // Extrair duração
      const durationMatch = html.match(/"lengthSeconds":"(\d+)"/)
      const duration = durationMatch ? formatSeconds(parseInt(durationMatch[1])) : 'N/A'
      
      // Extrair views
      const viewsMatch = html.match(/"viewCount":"(\d+)"/)
      const views = viewsMatch ? formatViews(viewsMatch[1]) : 'N/A'

      return {
        id: videoId,
        title: decodeHTMLEntities(title),
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        duration,
        channel: decodeHTMLEntities(channel),
        views,
        uploadDate: new Date().toISOString().split('T')[0],
        quality: ['1080p', '720p', '480p', '360p'],
        formats: ['MP4', 'MP3'],
        description: 'Informações obtidas do YouTube'
      }
    }
  } catch (error) {
    console.log('Scraping falhou, usando dados básicos...')
  }

  // Fallback final
  throw new Error('Não foi possível obter informações do vídeo')
}

// Utilitários
function extractVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return 'N/A'
  
  const hours = parseInt(match[1] || '0')
  const minutes = parseInt(match[2] || '0')
  const seconds = parseInt(match[3] || '0')
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function formatSeconds(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function formatViews(viewCount: string): string {
  const count = parseInt(viewCount)
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M visualizações`
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K visualizações`
  }
  return `${count} visualizações`
}

function decodeHTMLEntities(text: string): string {
  const entities: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
  }
  
  return text.replace(/&[#\w]+;/g, (entity) => {
    return entities[entity] || entity
  })
}