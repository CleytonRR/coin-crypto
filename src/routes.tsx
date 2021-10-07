import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "utils/animation-routes/animation.module.css";

import Home from "pages/Home";
import List from "pages/List";
import Detail from "pages/Detail";

export default function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={3000} classNames="fade">
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
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}
