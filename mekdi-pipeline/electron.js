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
    resizable: false,
    fullscreenable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      sandbox: false, // Prevents DBus issues in WSL
    },
  });

  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    console.log("🚀 Loading from Vite Dev Server: http://localhost:5173");
    mainWindow.loadURL("http://localhost:5173");
  } else {
    const indexPath = path.join(__dirname, "dist", "index.html");
    console.log(`📂 Loading built React app from: file://${indexPath}`);

    mainWindow.loadURL(`file://${indexPath}`).catch((err) => {
      console.error("❌ Failed to load index.html:", err);
    });
  }

  mainWindow.webContents.openDevTools();
});

// Keep Electron app open
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
