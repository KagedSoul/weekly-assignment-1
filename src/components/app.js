import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavigationContainer />
        <h1>Kage Luger Sample Project</h1>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
