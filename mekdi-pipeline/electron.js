import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";

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
    frame: false, // ✅ Hides default Electron frame for custom buttons
    titleBarStyle: "hidden", // ✅ Ensures macOS styling works correctly
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, // ✅ Securely expose APIs to renderer
      preload: path.join(__dirname, "preload.cjs"), // ✅ Load the correct Preload Script
    },
  });

  const isDev = process.env.NODE_ENV !== "production";

  if (isDev) {
    console.log("🚀 Loading from Vite Dev Server: http://localhost:5173");
    mainWindow.loadURL("http://localhost:5173");
  } else {
    const indexPath = `file://${path.join(__dirname, "dist", "index.html")}`;
    console.log(`📂 Loading built React app from: ${indexPath}`);
    mainWindow.loadURL(indexPath);
  }
  
  // Prevent resizing beyond fixed limits
  mainWindow.on("resize", () => {
    console.log("⚠️ Resize detected! Resetting to fixed size.");
    mainWindow.setSize(640, 520);
  });

  // ✅ Minimize & Close handlers
  ipcMain.on("minimize-window", () => {
    if (mainWindow) mainWindow.minimize();
  });

  ipcMain.on("close-window", () => {
    if (mainWindow) mainWindow.close();
  });

  mainWindow.webContents.openDevTools();
});

// Ensure the app quits properly (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
