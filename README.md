# TriviD - Video Downloader

Sistema completo para download de vídeos com interface web moderna e recursos avançados.

## 🏗️ Arquitetura

- **Backend**: FastAPI + Python
- **Frontend**: Next.js 14 + React + TypeScript + Tailwind CSS
- **Download**: pytubefix + ffmpeg
- **Autenticação**: Sistema de contas e assinaturas
- **Storage**: Sistema de armazenamento local/nuvem
- **Interface**: Electron para versão desktop

## 🚀 Como Executar

### Execução Rápida (Windows)
```bash
start.bat
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
#### Electron
```bash
cd frontend
npx electron .
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
- ✅ Interface web responsiva e moderna
- ✅ Busca de informações do vídeo
- ✅ Download de vídeo + áudio (até 4K)
- ✅ Download de vídeo HD + áudio (mesclado)
- ✅ Download apenas áudio (MP3, WAV, AAC)
- ✅ Barra de progresso em tempo real
- ✅ API REST documentada
- ✅ Gerenciamento de tarefas assíncronas
- ✅ Sistema de contas de usuário
- ✅ Interface desktop com Electron
- ✅ Histórico de downloads
- ✅ Suporte a múltiplas plataformas (YouTube, Twitch, Spotify)

### Em Desenvolvimento
- 🔄 Sistema de assinaturas Premium
- 🔄 Downloads em lote
- 🔄 Rate limiting inteligente
- 🔄 Armazenamento em nuvem
- 🔄 Notificações push
- 🔄 Integração com Google Drive/Dropbox
- 🔄 Conversão para formatos personalizados
- 🔄 Sincronização entre dispositivos

## 🔌 API Endpoints

### Vídeos e Downloads
```json
GET /api
- Informações da API e status do serviço

POST /api/video/info
- Obtém informações do vídeo
- Body: {
  "url": "video_url",
  "platform": "youtube|twitch|spotify"
}

POST /api/video/download
- Inicia download
- Body: {
  "url": "video_url",
  "format_type": "video|audio|both",
  "quality": "4k|1080p|720p|480p|best",
  "audio_format": "mp3|wav|aac",
}

GET /api/video/status/{task_id}
- Verifica status do download
- Response: {
  "status": "pending|processing|completed|error",
  "progress": 0-100,
  "estimated_time": "mm:ss",
  "download_url": "string"
}

DELETE /api/video/cleanup/{task_id}
- Remove arquivo e limpa dados
```

### Usuários e Contas
```json
POST /api/auth/register
- Registro de novo usuário
- Body: {
  "username": "string",
  "email": "string",
  "password": "string"
}

POST /api/auth/login
- Login de usuário
- Body: {
  "email": "string",
  "password": "string"
}

GET /api/user/downloads
- Lista histórico de downloads

POST /api/user/preferences
- Atualiza preferências do usuário
```

## 🧪 Testes e Qualidade

### Testes Automatizados
```bash
# Backend (FastAPI)
cd backend
pytest               # Testes unitários
pytest --cov        # Cobertura de código
pytest --integration # Testes de integração

# Frontend (Next.js)
cd frontend
npm test            # Testes unitários
npm run test:e2e    # Testes E2E com Cypress
npm run test:watch  # Modo watch
```

### Qualidade de Código
```bash
# Backend
flake8              # Linting
black .             # Formatação
mypy .              # Type checking

# Frontend
npm run lint        # ESLint
npm run format      # Prettier
npm run type-check  # TypeScript
```

## 📦 Deploy

### Backend (Docker)
```dockerfile
# Base image
FROM python:3.11-slim

# Install ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Create app directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

# Expose port
EXPOSE 8000

# Run application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Frontend (Vercel/Docker)
```bash
# Build para produção
npm run build

# Deploy no Vercel
vercel --prod

# Ou build Docker
docker build -t trivid-frontend .
docker run -p 3000:3000 trivid-frontend
```

### Desktop App (Electron)
```bash
# Build para Windows
npm run build:win

# Build para MacOS
npm run build:mac

# Build para Linux
npm run build:linux
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

MIT License - veja LICENSE para detalhes.
