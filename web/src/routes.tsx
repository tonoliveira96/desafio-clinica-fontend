import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={Details} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
