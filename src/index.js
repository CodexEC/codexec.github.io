import React from "react";
import ReactDOM from "react-dom";
import "./codexec.css";
import App from "./App.codexec";
import registerServiceWorker from "./registerServiceWorker";

console.log("====================================");
console.log("> BETA.ini");
ReactDOM.render(<App />, document.getElementById("codexec"));
registerServiceWorker();
console.log("> BETA.fin");
console.log("====================================");
