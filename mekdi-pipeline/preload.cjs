const { contextBridge, ipcRenderer } = require("electron");

// contextBridge.exposeInMainWorld("electronAPI", {
//   isResizable: () => ipcRenderer.invoke("isResizable"),
// });

contextBridge.exposeInMainWorld("electronAPI", {
  minimize: () => ipcRenderer.send("minimize-window"), // ✅ Sends event to main process
  close: () => ipcRenderer.send("close-window"), // ✅ Sends event to main process
});
