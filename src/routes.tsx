import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/create" component={Create} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
