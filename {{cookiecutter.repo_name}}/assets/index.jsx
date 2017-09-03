import React from "react";
import { render } from "react-dom";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{{ cookiecutter.project_name }}</h1>
        <div className="content">
          It works!
        </div>
      </div>
    );
  }
}

function startApp() {
  render(<App />, document.getElementById("react-app"));
}

window.onload = startApp;
