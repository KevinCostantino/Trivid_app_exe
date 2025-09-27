# YouTube Downloader - SaaS

Sistema completo para download de vídeos do YouTube com interface web moderna.

## 🏗️ Arquitetura

- **Backend**: FastAPI + Python
- **Frontend**: Next.js + React + TypeScript + Tailwind CSS
- **Download**: pytubefix + ffmpeg

## 🚀 Como Executar

### Execução Rápida (Windows)
```bash
start.bat
npx electron .
```

### Execução Rápida (Linux/Mac)
```bash
chmod +x start.sh
./start.sh
```

### Execução Manual

#### Backend (FastAPI)
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

#### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

## 📍 URLs

- 🌐 **Frontend**: http://localhost:3000
- 🔧 **Backend API**: http://localhost:8000
- 📚 **Documentação**: http://localhost:8000/docs

## 🔧 Pré-requisitos

- Python 3.8+
- Node.js 18+
- FFmpeg (para mesclagem de vídeo/áudio)

### Instalando FFmpeg

#### Windows
1. Baixe do site oficial: https://ffmpeg.org/download.html
2. Extraia para `C:\ffmpeg`
3. Adicione `C:\ffmpeg\bin` ao PATH

#### Linux/Mac
```bash
# Ubuntu/Debian
sudo apt install ffmpeg

# MacOS
brew install ffmpeg
```

## 📁 Estrutura do Projeto

```
├── backend/
│   ├── main.py              # API FastAPI principal
│   ├── requirements.txt     # Dependências Python
│   └── downloads/           # Arquivos baixados
│       ├── videos/
│       └── audios/
├── frontend/
│   ├── app/
│   │   ├── page.tsx         # Página principal
│   │   ├── layout.tsx       # Layout base
│   │   └── components/
│   │       └── VideoDownloader.tsx
│   ├── package.json
│   └── ...
├── start.bat               # Script Windows
├── start.sh                # Script Linux/Mac
└── README.md
```

## 🎯 Funcionalidades

### Implementadas
- ✅ Interface web responsiva
- ✅ Busca de informações do vídeo
- ✅ Download de vídeo + áudio (até 720p)
- ✅ Download de vídeo HD + áudio (mesclado)
- ✅ Download apenas áudio
- ✅ Barra de progresso em tempo real
- ✅ API REST documentada
- ✅ Gerenciamento de tarefas assíncronas

### Em Desenvolvimento
- 🔄 Sistema de autenticação
- 🔄 Histórico de downloads
- 🔄 Rate limiting
- 🔄 Armazenamento em nuvem
- 🔄 Notificações push

## 🔌 API Endpoints

### GET /
- Informações da API

### POST /video/info
- Obtém informações do vídeo
- Body: `{"url": "youtube_url"}`

### POST /video/download
- Inicia download
- Body: `{"url": "youtube_url", "format_type": "video_with_audio", "quality": "best"}`

### GET /video/status/{task_id}
- Verifica status do download

### GET /downloads/{folder}/{filename}
- Download do arquivo

### DELETE /video/cleanup/{task_id}
- Remove arquivo e limpa dados

## 🧪 Testes

```bash
# Backend
cd backend
pytest

# Frontend  
cd frontend
npm test
```

## 📦 Deploy

### Backend (Docker)
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Frontend (Vercel)
```bash
npm run build
vercel --prod
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

MIT License - veja LICENSE para detalhes.
