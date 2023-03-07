const { app, BrowserWindow } = require('electron')
const path = require('path')

let scale = 1;

function createWindow () {
  const win = new BrowserWindow({
    width: 232 * scale,
    height: 324 * scale,
    titleBarStyle: 'hidden',
    roundedCorners: 10,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    resizable: false
  });

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
