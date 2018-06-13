const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
    let mainWindow = new BrowserWindow();
    mainWindow.loadURL(`http://localhost:8080/`);
});

