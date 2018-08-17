const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
require(`${path.join(__dirname, 'build/server')}`);

app.on('ready', () => {
    let mainWindow = new BrowserWindow({width: 1024, height: 768});
    mainWindow.loadURL(`file://${path.join(__dirname, 'build/index.html')}`);
});

