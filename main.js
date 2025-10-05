const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

try {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  });
} catch (_) {}

let mainWindow;
let musicWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 630,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });
  mainWindow.loadFile('index.html');
};

function createMusicWindow() {
  musicWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  musicWindow.loadFile('music.html');
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  createWindow();
  createMusicWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.on('open-page2', () => mainWindow.loadFile('page2.html'));
ipcMain.on('open-home-page', () => mainWindow.loadFile('index.html'));
ipcMain.on('open-page3', () => mainWindow.loadFile('page3.html'));
ipcMain.on('back-to-page2-from-page3', () => mainWindow.loadFile('page2.html'));
ipcMain.on('open-page4', () => mainWindow.loadFile('page4.html'));
ipcMain.on('back-to-page3-from-page4', () => mainWindow.loadFile('page3.html'));
ipcMain.on('open-page5', () => mainWindow.loadFile('page5.html'));
ipcMain.on('back-to-page4-from-page5', () => mainWindow.loadFile('page4.html'));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});