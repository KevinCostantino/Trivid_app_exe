const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
let pyProc = null;


function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false, // Remove a titlebar nativa
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: __dirname + '/preload.js',
    }
  });
  win.loadURL('http://localhost:3002');
}

app.whenReady().then(() => {
  // Inicia o backend Python (ajuste o caminho se necessário)
  pyProc = spawn('python', ['../backend/main.py'], { stdio: 'inherit' });
  createWindow();
});

app.on('will-quit', () => {
  if (pyProc) pyProc.kill();
});

// IPC listeners para os controles da titlebar customizada
ipcMain.on('window-close', (event) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.close();
});
ipcMain.on('window-minimize', (event) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.minimize();
});
ipcMain.on('window-maximize', (event) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  }
});
