const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');

if (isDev) {
    require('devtron'); // Electron dev tools for debugging
    require('electron-react-devtools'); // Electron-react dev tools for debugging
    require(`${path.join(__dirname, 'server/server')}`);
} else {
    require(`${path.join(__dirname, 'build/server')}`);
}

const indexPageURL = isDev ? `http://localhost:8080/` : `file://${path.join(__dirname, 'build/index.html')}`

app.on('ready', () => {
    
    let mainWindow = new BrowserWindow(
        {
            width: 1024,
            height: 768
        }
    );
    mainWindow.loadURL(indexPageURL);
});

