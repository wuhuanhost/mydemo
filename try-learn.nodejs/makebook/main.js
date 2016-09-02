const electron = require('electron');
// 控制应用生命周期的模块。
const { app } = electron;
// 创建原生浏览器窗口的模块。
const { BrowserWindow } = electron;

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let mainWindow;

function createWindow() {
    // 创建浏览器窗口。
    mainWindow = new BrowserWindow({ width: 1280, height: 800, autoHideMenuBar: false });

    // 加载应用的 index.html。
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // 启用开发工具。
    mainWindow.webContents.openDevTools();


    // 当 window 被关闭，这个事件会被触发。
    mainWindow.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});



//主进程和渲染进程通信
const ipcMain = require('electron').ipcMain;
//文件对话框进程，只能在主进程中使用
const dialog = require('electron').dialog;
/**
 **接收同步消息
 **/
ipcMain.on('synchronous-message', function(event, arg) {
    var fileName = "";
    try {
        if (arg === "open-file") {
            fileName = dialog.showOpenDialog({ properties: ['openFile'] });
        } else if (arg === "open-directory") {
            fileName = dialog.showOpenDialog({ properties: ['openDirectory'] });
        } else if (arg === "debug") {
            mainWindow.webContents.openDevTools();
        }
        event.returnValue = fileName;
    } catch (e) {
        event.returnValue = e.message;
    }
});
