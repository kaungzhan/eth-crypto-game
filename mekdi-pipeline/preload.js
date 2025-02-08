import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  isResizable: () => ipcRenderer.invoke("isResizable"),
});
