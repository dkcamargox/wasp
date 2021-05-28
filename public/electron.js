require('dotenv').config();

const electron  = require('electron');
const { ipcMain: ipc }  = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const { app, BrowserWindow } = electron;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`,
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}


ipc.removeAllListeners();

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow(productionServer, mainWindow)
  }
});

