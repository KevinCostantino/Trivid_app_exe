module.exports = [
"[project]/.next-internal/server/app/api/video/info/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/video/info/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const body = await request.json();
        const { url } = body;
        // Validação básica
        if (!url) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'URL é obrigatória'
            }, {
                status: 400
            });
        }
        if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'URL deve ser do YouTube'
            }, {
                status: 400
            });
        }
        // Extrair ID do vídeo
        const videoId = extractVideoId(url);
        if (!videoId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'URL do YouTube inválida'
            }, {
                status: 400
            });
        }
        // Tentar obter informações reais do vídeo
        let videoInfo;
        try {
            videoInfo = await getVideoInfo(videoId);
        } catch (error) {
            console.log('❌ Erro ao obter dados reais, usando fallback');
            // Fallback com dados básicos usando videoId
            videoInfo = {
                id: videoId,
                title: 'Vídeo do YouTube',
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                duration: 'N/A',
                channel: 'Canal do YouTube',
                views: 'N/A',
                uploadDate: new Date().toISOString().split('T')[0],
                quality: [
                    '1080p',
                    '720p',
                    '480p',
                    '360p'
                ],
                formats: [
                    'MP4',
                    'MP3'
                ],
                description: 'Vídeo obtido do YouTube'
            };
        }
        console.log('✅ API route processou:', {
            url,
            videoId,
            title: videoInfo.title
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(videoInfo);
    } catch (error) {
        console.error('❌ Erro na API route:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Erro interno do servidor'
        }, {
            status: 500
        });
    }
}
async function getVideoInfo(videoId) {
    // Método 1: Tentar yt-dlp através de uma API pública
    try {
        const response = await fetch(`https://api.youtube.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            const video = data.items?.[0];
            if (video) {
                return {
                    id: videoId,
                    title: video.snippet.title,
                    thumbnail: video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                    duration: formatDuration(video.contentDetails.duration),
                    channel: video.snippet.channelTitle,
                    views: formatViews(video.statistics.viewCount),
                    uploadDate: video.snippet.publishedAt.split('T')[0],
                    quality: [
                        '1080p',
                        '720p',
                        '480p',
                        '360p'
                    ],
                    formats: [
                        'MP4',
                        'MP3'
                    ],
                    description: video.snippet.description?.substring(0, 200) + '...' || 'Sem descrição disponível'
                };
            }
        }
    } catch (error) {
        console.log('YouTube API não disponível, tentando método alternativo...');
    }
    // Método 2: Scraping simples do título
    try {
        const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        if (response.ok) {
            const html = await response.text();
            // Extrair título
            const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
            const title = titleMatch ? titleMatch[1] : 'Vídeo do YouTube';
            // Extrair canal
            const channelMatch = html.match(/<meta property="og:site_name" content="([^"]+)"/) || html.match(/"ownerChannelName":"([^"]+)"/);
            const channel = channelMatch ? channelMatch[1] : 'Canal do YouTube';
            // Extrair duração
            const durationMatch = html.match(/"lengthSeconds":"(\d+)"/);
            const duration = durationMatch ? formatSeconds(parseInt(durationMatch[1])) : 'N/A';
            // Extrair views
            const viewsMatch = html.match(/"viewCount":"(\d+)"/);
            const views = viewsMatch ? formatViews(viewsMatch[1]) : 'N/A';
            return {
                id: videoId,
                title: decodeHTMLEntities(title),
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                duration,
                channel: decodeHTMLEntities(channel),
                views,
                uploadDate: new Date().toISOString().split('T')[0],
                quality: [
                    '1080p',
                    '720p',
                    '480p',
                    '360p'
                ],
                formats: [
                    'MP4',
                    'MP3'
                ],
                description: 'Informações obtidas do YouTube'
            };
        }
    } catch (error) {
        console.log('Scraping falhou, usando dados básicos...');
    }
    // Fallback final
    throw new Error('Não foi possível obter informações do vídeo');
}
// Utilitários
function extractVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
function formatDuration(isoDuration) {
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 'N/A';
    const hours = parseInt(match[1] || '0');
    const minutes = parseInt(match[2] || '0');
    const seconds = parseInt(match[3] || '0');
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
function formatSeconds(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
function formatViews(viewCount) {
    const count = parseInt(viewCount);
    if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M visualizações`;
    } else if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}K visualizações`;
    }
    return `${count} visualizações`;
}
function decodeHTMLEntities(text) {
    const entities = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&apos;': "'"
    };
    return text.replace(/&[#\w]+;/g, (entity)=>{
        return entities[entity] || entity;
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__700e588f._.js.map