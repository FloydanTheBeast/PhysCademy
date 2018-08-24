const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');

if (isDev) {
    /* 
        The command below automatically requires devtron and electron-react-devtools:
            require('devtron').install(); // Electron dev tools
            require('electron-react-devtools').install(); // Electron-react dev tools
    */
    require('electron-debug')(
        { devToolsMode: 'right' }
    );
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

