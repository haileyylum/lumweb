import React from "react";
import logo from "./logo.svg";
import "whatwg-fetch";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./Screens/Home/index";

function App() {
  return (
    <div className="App">
      <div className="site-name">
        <h3>Wai lum</h3>
      </div>
      <Router>
        <div>
          <Route path="/" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
