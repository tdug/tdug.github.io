import React from "react";
import { Switch, Route } from "react-router-dom";

import Contact from "./Contact"
import CV from "./CV"

export default function Router({match}) {
  return (
    <Switch>
      <Route exact path={`${match.path}/contact`} component={Contact} />
      <Route exact path={`${match.path}/cv`} component={CV} />
    </Switch>
  );
}
