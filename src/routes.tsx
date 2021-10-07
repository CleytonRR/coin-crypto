import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import List from "pages/List";
import Detail from "pages/Detail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/list" exact>
          <List />
        </Route>
        <Route path="/detail/:coinname">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}
