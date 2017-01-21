# Yellow Friday Pandas
## Getting Started
0. Have WebStorm, [Node.JS](https://nodejs.org/en/download/)
1. Open WebStorm, and ```git clone``` this project.
2. In the root directory of this project, run the node package manager to install any dependencies listed in the ```package.json```.
```
npm install
```
3. Run the program using the following line from the boilerplate's README.md.
```
npm run dev
```
## Technologies Used
### Electron
#### Setup
* npm: https://www.npmjs.com/
* npm install -g electron --save-dev
(possible improvements)
    * menubar: https://github.com/maxogden/menubar
    * awesome electron: https://github.com/sindresorhus/awesome-electron

#### Quick Start
* Main Process
    * package.json's main --> the main process
    * script that runs in main proccess can display GUI via web pages
* Renderer Process
    * uses chromium
    * each web page in Electron runs in its own process (the renderer process)
    * use Node.js APIs in web pages to interact with OS
    
* Main vs. Renderer Processes
    * Main process creates pages by creating `BrowserWindow` instances
        * each `BrowserWindow` instance runs web page in its own renderer process
        * When `BrowserWindow` instance destroyed, renderer process also terminated
        * main process manages all web pages + corresponding renderer processes
        * render processes only care about page its running on
    * GUI related APIs in web pages not allowed (leak resources)
        * GUI operations on web page performed by renderer process communicating with main process
        * renderer process requests main process performs desired action
    * Communication between main process and renderer processes
        * `ipcRenderer` and `ipcMain` (inter-process communication) modules for sending messages
        * remote module for RPC (?) style communication

#### Write your First Electron App
* Structure
    your-app/
    ├── package.json
    ├── main.js
    └── index.html
    * package.json format exactly same as Node's modules
        * if main field is not present in package.json, attempts to load index.js
    * script in main field -> startup script of app runs main process
        * main.js creates windows and handle system events
    * index.js is the web page to be showed
* keep a global reference of window obj, otherwise window will be closed when js garbage collected




## Reference
* https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
* http://processingjs.org/
* https://github.com/karan
   * Search for "brain" or "sound" or something
* http://sonic-pi.net/
* Boilerplate
   * https://github.com/mxstbr/react-boilerplate/issues/889
   * http://stackoverflow.com/questions/5377960/whats-the-best-practice-to-git-clone-into-an-existing-folder
