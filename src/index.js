import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import i18Init from './config/i18n';

i18Init();

ReactDOM.render(<App />, document.getElementById("application"));