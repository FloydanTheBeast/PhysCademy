const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')
const isDev = require('electron-is-dev')
const { ipcMain } = electron
const Store = require('electron-store')
const store = new Store()

if (isDev) {
    /* 
        The command below automatically requires devtron and electron-react-devtools:
            require('devtron').install() // Electron dev tools
            require('electron-react-devtools').install() // Electron-react dev tools
    */
    require('electron-debug')(
        { devToolsMode: 'right' }
    )
    require(`${path.join(__dirname, 'server/server')}`)
} else {
    require(`${path.join(__dirname, 'build/server/server')}`)
}

const indexPageURL = isDev ? `http://localhost:8080/` : `file://${path.join(__dirname, 'build/index.html')}`

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow(
        {
            width: 1024,
            height: 768,
            // titleBarStyle: 'hidden'
        }
    )
    mainWindow.loadURL(indexPageURL)
})

ipcMain.on('settings:save', (event, settings) => {
    store.set('settings', settings)
})

ipcMain.on('settings:load', event => {
    mainWindow.webContents.send('settings:loaded',
        store.has('settings') ? store.get('settings') : null)
})
