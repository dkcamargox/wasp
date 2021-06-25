require("dotenv").config();

const electron = require("electron");
const { ipcMain: ipc } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const { app, BrowserWindow } = electron;
const { Builder, Capabilities, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

let mainWindow;
let driver = null;
let timeOut = 6500;

function getTimeOut() {
  return timeOut;
}
/**
 * create window and load ReactApp
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1050,
    height: 600,
    minWidth: 400,
    minHeight: 600,
    icon: path.resolve(__dirname, "..", "assets", "icon.png"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.resolve(__dirname, "..", "build", "index.html")}`
  );

  mainWindow.on("closed", () => {
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
app.on("ready", () => createWindow());
app.on("window-all-closed", () =>
  process.platform !== "darwin" ? app.quit() : null
);
app.on("activate", () => (mainWindow === null ? createWindow() : null));

/**
 * start creating browser and
 */
ipc.on("send-messages", async (event, clients, message, image) => {
  const waitFind = (locator) => {
    return driver.findElement(async () => {
      await driver.wait(until.elementLocated(locator));
      return driver.findElement(locator);
    });
  };
  const waitFindTimeOut = (locator, timeOut) => {
    return driver.findElement(async () => {
      await driver.wait(until.elementLocated(locator), timeOut);
      return driver.findElement(locator);
    });
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const timeOut = getTimeOut();
  try {
    for (const client of clients) {
      console.log(client);
      try {
        await (async function send(driver) {
          try {
            const sendMessage = async (client) => {
              // find the footer message input
              const inputMessage = await waitFind(By.className("_2A8P4"));

              // search for #name vars and change it for the name
              const messageWithVars = message.replace("#name", client.name);
              const messageWithVarAndLinebreaks = messageWithVars
                .split("\n")
                .join(Key.SHIFT + Key.ENTER + Key.SHIFT);

              // if theres an image to send
              if (image !== null) {
                // click on the attach image/file button
                const attachFile = await waitFind(
                  By.xpath(
                    "/html/body/div/div[1]/div[1]/div[4]/div[1]/footer/div[1]/div[1]/div[2]"
                  )
                );
                await attachFile.click();

                // find the image input and send the image
                await driver
                  .findElement(By.xpath("//input[@type='file']"))
                  .sendKeys(image);

                // loads the message input from the photo attach page
                const photoInputMessage = await waitFind(
                  By.className("_1JAUF")
                );
                photoInputMessage.sendKeys(messageWithVarAndLinebreaks);

                // find the send button and click
                const sendButton = await waitFind(By.className("_3doiV"));
                await sendButton.click();

                // wait message to send => images take double
                await delay(timeOut * 2);
              } else {
                // whatsapp input footer
                await waitFind(By.className("_2A8P4"));

                // click to focus
                await inputMessage.click();

                // send the message
                await inputMessage.sendKeys(
                  messageWithVarAndLinebreaks,
                  Key.RETURN
                );
                await delay(timeOut);
              }
            };
            // get to the chat
            await driver.get(
              `https://web.whatsapp.com/send?phone=${client.number}`
            );

            try {
              // find the footer message input
              await waitFindTimeOut(By.className("_2A8P4"), timeOut * 2);
              await sendMessage(client);
            } catch (error) {
              try {
                // trying to get the not found error message
                await driver.wait(
                  until.elementLocated(By.className("_3SRfO")),
                  5000
                );
                await driver.findElement(By.className("_3SRfO"));
                event.sender.send("send-messages-response", {
                  status: "error",
                  client
                });
                return;
              } catch {
                await sendMessage(client);
              }
            }
            event.sender.send("send-messages-response", {
              status: "ok",
              client
            });
          } catch (e) {
            console.log(e);
            event.sender.send("send-messages-response", {
              status: "error",
              client
            });
          }
        })(driver);
      } catch (e) {
        event.sender.send("send-messages-response", {
          status: "error",
          client
        });
      }
    }
  } catch (e) {
    event.sender.send("create-browser-response", { status: "error", error: e });
    return;
  } finally {
    driver.quit();
    driver = null;
    event.sender.send("finish-response");
    return;
  }
});

ipc.on("create-browser", async (event) => {
  chrome.setDefaultService(
    new chrome.ServiceBuilder(chromedriver.path).build()
  );
  const chromeCapabilities = Capabilities.chrome();
  chromeCapabilities.set("chromeOptions", {
    args: ["--headless", "start-minimized"]
  });
  try {
    driver = await new Builder().withCapabilities(chromeCapabilities).build();
    event.sender.send("create-browser-response", { status: "ok" });
  } catch (e) {
    event.sender.send("create-browser-response", { status: "error", error: e });
  }
});

ipc.on("get-time-out", (event) => {
  event.sender.send("get-time-out-response", { timeOut });
});

ipc.on("set-time-out", (event, newTimeOut) => {
  timeOut = newTimeOut;
});

/**
 * start creating browser and
 */
ipc.on("abort", (event) => {
  driver.quit();
  driver = null;
  event.sender.send("create-browser-response", { status: "aborted" });
});
