const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  isResizable: () => ipcRenderer.invoke("isResizable"),
});
