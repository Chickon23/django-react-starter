import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>React Appdfdf</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
