require('dotenv').config();

const electron  = require('electron');
const { ipcMain: ipc }  = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const { app, BrowserWindow } = electron;

let mainWindow;

/**
 * create window and load ReactApp
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 600,
    icon: path.resolve(__dirname, '..', 'assets', 'icon.png'),
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

/**
 * removeing ipc default listeners
 */
ipc.removeAllListeners();
/**
 * configuring app window
 */
app.on('ready', () => createWindow());
app.on('window-all-closed', () => process.platform !== 'darwin' ? app.quit() : null);
app.on('activate', () => mainWindow === null ? createWindow() : null);
