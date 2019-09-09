import React from 'react';
import logo from './logo/logo.png';
import './App.css';
// importing react-router 
import { BrowserRouter, Route, Switch } from "react-router-dom";

// importing the the components 
import Home from "./component/Home"
import Navi from "./component/nav"
import CurCun from "./component/Currency"
import Win from "./component/Win"

function App() {
  return (
    // making a div for the app
    <div className="App">
      <header className="App-header">
        {/* header and name for the app */}
        <h1 className="Name">Shuriken Converter</h1>
        {/* logo for the app */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* a function for the router */}
        <BrowserRouter>
        <div>
          <br/>
          {/* dropdown for the app */}
        <Navi/>
        <br/>
        <Switch>
          {/*for when clicked on dropdown it will go to the page */}
        <Route path="/" component={Home} exact />
        <Route path="/Currency" component={CurCun}/>
        <Route path="/win" component={Win}/>
        </Switch>
        </div>
        </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
