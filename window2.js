var address, os = require('os'),
    ifaces = os.networkInterfaces();
const { ipcMain, BrowserWindow, app, dialog } = require('electron')

for (var dev in ifaces) {

    var iface = ifaces[dev].filter(function(details) {
        return details.family === 'IPv4' && details.internal === false;
    });

    if (iface.length > 0) address = iface[0].address;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const port = urlParams.get('port')

var remoteControl = address + ":" + port;

$("#address-output").val(remoteControl);

document.getElementById('openButton').addEventListener('click', (evt) => {
    createBrowserWindow();
});

function createBrowserWindow() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;
    const win = new BrowserWindow({
        height: 576,
        width: 1024,
        minHeight: 450,
        minWidth: 900,
        webPreferences: { devTools: false },
        icon: 'assets/homescreen512.png'
    });
    win.setMenuBarVisibility(false)

    win.loadURL('http://' + remoteControl);
}