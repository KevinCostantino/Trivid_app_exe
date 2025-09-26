const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
let pyProc = null;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { nodeIntegration: true }
  });
  win.loadURL('http://localhost:3002'); // ajuste para a porta do seu frontend
}

app.whenReady().then(() => {
  // Inicia o backend Python (ajuste o caminho se necessário)
  pyProc = spawn('python', ['../backend/main.py'], { stdio: 'inherit' });
  createWindow();
});

app.on('will-quit', () => {
  if (pyProc) pyProc.kill();
});
