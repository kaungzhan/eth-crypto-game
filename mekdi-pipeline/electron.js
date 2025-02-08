import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 520,
    resizable: false,  // 👈 Prevent resizing
    fullscreenable: false, // 👈 Prevent full screen
    maximizable: false,  // 👈 Disable maximize button
    minimizable: false, // 👈 Optional: disable minimize
    useContentSize: true, // 👈 Ensures the content fits the window size
    frame: true, // 👈 Keeps window decorations (title bar, etc.)
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"), // 👈 Load the Preload Script
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
  

  // Handle `isResizable` check from Renderer
  ipcMain.handle("isResizable", () => mainWindow.isResizable());
  mainWindow.webContents.openDevTools();
});

// Prevent Electron from quitting
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
