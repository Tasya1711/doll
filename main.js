const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

try {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  });
} catch (_) {}

let mainWindow;

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

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.on('open-page2', () => {
  if (mainWindow) {
    mainWindow.loadFile('page2.html');
  }
});

ipcMain.on('open-home-page', () => {
  if (mainWindow) {
    mainWindow.loadFile('index.html');
  }
});

ipcMain.on('open-page3', () => {
  if (mainWindow) {
    mainWindow.loadFile('page3.html');
  }
});

ipcMain.on('back-to-page2-from-page3', () => {
  if (mainWindow) {
    mainWindow.loadFile('page2.html');
  }
});

ipcMain.on('open-page4', () => {
  if (mainWindow) {
    mainWindow.loadFile('page4.html');
  }
});

ipcMain.on('back-to-page3-from-page4', () => {
  if (mainWindow) {
    mainWindow.loadFile('page3.html');
  }
});

ipcMain.on('open-page5', () => {
  if (mainWindow) {
    mainWindow.loadFile('page5.html');
  }
});

ipcMain.on('back-to-page4-from-page5', () => {
  if (mainWindow) {
    mainWindow.loadFile('page4.html');
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});