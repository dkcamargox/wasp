require('dotenv').config();

const electron  = require('electron');
const { ipcMain: ipc }  = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const { app, BrowserWindow } = electron;
const {Builder, Capabilities, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const { convertCompilerOptionsFromJson } = require('typescript');

let mainWindow;
let driver;

/**
 * create window and load ReactApp
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1050,
    height: 600,
    minWidth: 400,
    minHeight: 600,
    icon: path.resolve(__dirname, '..', 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
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

/**
 * start creating browser and
 */
ipc.on('send-messages', async (event, clients, message, image) => {
  // const client = clients[0];
  try {
    clients.forEach(async (client) => {
    try {
      (async function send(driver) {
        try{
          await driver.get(`https://web.whatsapp.com/send?phone=${client.number}`)
        } catch (e) {
          console.log(e);
          event.sender.send('send-messages-response', {status: 'error', client});
        }
        // await driver.wait(until.elementLocated(By.xpath('/html/body/div/div[1]/div[1]/div[4]/div[1]/footer')), 60000)
        // await driver.findElement(By.xpath('/html/body/div/div[1]/div[1]/div[4]/div[1]/footer/div[1]/div[2]')).click()
        // await driver.findElement(By.xpath('/html/body/div/div[1]/div[1]/div[4]/div[1]/footer/div[1]/div[2]')).sendKeys(message, Key.RETURN)
        // event.sender.send('send-messages-response', {status: 'ok', client});s
      })(driver)  
    } catch (e) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      event.sender.send('send-messages-response', {status: 'error', client});
    }
    });
  } catch (e) {
    event.sender.send('create-browser-response', {status: 'error', error: e});
  } finally {
    driver.quit();
  }
});

ipc.on('create-browser', async (event) => {
  chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
  const chromeCapabilities = Capabilities.chrome();
  chromeCapabilities.set('chromeOptions', {args: ['--headless']}); 
  // let driver = new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
  try {
    driver = await  new Builder().withCapabilities(chromeCapabilities).build();
    event.sender.send('create-browser-response', {status: 'ok'}); 
  } catch (e) {
    event.sender.send('create-browser-response', {status: 'error', error: e});
  }
});

/**
 * start creating browser and
 */
ipc.on('abort', (event) => {
  driver.quit();
  event.sender.send('create-browser-response', { status: 'aborted'});
});