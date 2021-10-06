import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Saved from "./pages/Saved";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}
