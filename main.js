const { ipcMain, BrowserWindow, app, dialog, Tray, Menu } = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 400,
        height: 450,
        webPreferences: {
            nodeIntegration: true
        },
        icon: 'assets/homescreen512.png'

    })

    win.setMenuBarVisibility(false)
    win.loadFile('launch.html')

}

ipcMain.on('input-broadcast', function(event, input, output, port) {
    const midi = require('./app');
    if (midi.connectOutport(input, output, port) == 1) {
        dialog.showErrorBox("Midi Error", "Unable to open selected midi device. Attempting to open default device. Please try again later.");
    }
});

process.on("uncaughtException", (err) => {
    dialog.showErrorBox("Error", "Something failed. Please try again later.");
});
app.whenReady().then(createWindow)