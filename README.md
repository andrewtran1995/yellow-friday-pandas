# Yellow Friday Pandas
## Getting Started
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


#### Electron-React-Boilerplate
* [GitHub Repo of Boilerplate](https://github.com/chentsulin/electron-react-boilerplate)

###React
* React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

####Dependencies
* [NPM/Node](https://nodejs.org/en/download/)

####Components
* [Components](https://facebook.github.io/react/docs/react-component.html)
	* Components are independent, reusable pieces in the DOM (Document Object Model)
	* Mounting
	   * Methods that are called when component is created and inserted into DOM:
		  * constructor()
		  * componentWillMount()
		  * render()
		  * componentDidMount()
	* Updating
	   * Methods called when component is re-rendered:
		  * componentWillRecieveProps()
		  * shouldComponentUpdate()
		  * componentWillUpdate()
		  * render()
		  * componentDidUpdate()
	* Unmounting
	   * Method called when component is removed from DOM:
		  * componentWillUnmount()
* [Containers](https://medium.com/@learnreact/container-components-c0e67432e005#.gqel9v3ha)
    * Responsible for fetching data and rendering a corresponding sub-component

* **Props** (properties) are parameters given to a component.

* **Render** returns a *react element* using JSX (thing that translates code to be readable).

####Redux
* [**Reducer**](http://redux.js.org/docs/basics/Reducers.html)
   * Given a (previous) state and action, returns the next state
   * Should be "pure" -- "Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation."

####Libraries
* [Redux](http://redux.js.org/)
   * Container for JavaScript apps that helps it run consistently in different environments (client, server, native)
* [Immutable](https://facebook.github.io/immutable-js/)
   * Library that lets you create data that can't be changed. Useful for things like: List, Stack, Map, OrderedMap, Set, OrderedSet, and Record
* [Webpack](https://webpack.js.org/)
   * Packages modules into static assets
* [Babel](https://babeljs.io/)
   * JavaScript compiler to allow for prettier JavaScript code

## Reference
* https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
* http://processingjs.org/
* https://github.com/karan
   * Search for "brain" or "sound" or something
* http://sonic-pi.net/
* Boilerplate
   * https://github.com/mxstbr/react-boilerplate/issues/889
   * http://stackoverflow.com/questions/5377960/whats-the-best-practice-to-git-clone-into-an-existing-folder
