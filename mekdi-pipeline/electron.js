import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { ipcMain } from "electron";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 520,
    resizable: false, 
    fullscreenable: false,
    maximizable: false,
    minimizable: true,
    useContentSize: true,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.cjs"), // 👈 Load the Preload Script
    },
  });

  const isDev = process.env.NODE_ENV !== "production"; // Ensure this is correct

  if (isDev) {
    console.log("🚀 Forcing Electron to load from Vite Dev Server: http://localhost:5173");
    mainWindow.loadURL("http://localhost:5173");
  } else {
    const indexPath = `file://${path.join(__dirname, "dist", "index.html")}`;
    console.log(`📂 Loading built React app from: ${indexPath}`);
    mainWindow.loadURL(indexPath);
  }
  
  // ✅ Prevent resizing at runtime
  mainWindow.on("resize", () => {
    console.log("⚠️ Resize detected! Resetting to fixed size.");
    mainWindow.setSize(640, 520);
  });

  mainWindow.webContents.openDevTools();
});

ipcMain.on("minimize-window", () => {
  mainWindow.minimize();
});

ipcMain.on("close-window", () => {
  mainWindow.close();
});

// Prevent Electron from quitting
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
