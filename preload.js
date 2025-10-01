const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('version', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
});

contextBridge.exposeInMainWorld('electronAPI', {
  openPage2: () => ipcRenderer.send('open-page2'),
  openHomePage: () => ipcRenderer.send('open-home-page'),
  openPage3: () => ipcRenderer.send('open-page3'),
  openPage2: () => ipcRenderer.send('back-to-page2-from-page3'),
  openPage4: () => ipcRenderer.send('open-page4'),
  openPage3: () => ipcRenderer.send('back-to-page3-from-page4'),
  openPage5: () => ipcRenderer.send('open-page5'),
  openPage4: () => ipcRenderer.send('back-to-page4-from-page5'),
});