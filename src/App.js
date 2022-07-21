import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from './VendingMachine';
import NavBar from './Navbar';
import Drink from './Drink';
import Eat from './Eat';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
        <Route exact path="/drink">
          <Drink />
        </Route>
        <Route exact path="/eat">
          <Eat />
        </Route>
        <Route exact path="/">
        <VendingMachine />
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
