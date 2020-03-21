import React from 'react';
import { HashRouter as ReactRouter, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Home from "../Home";
import About from "../About"

export default function Router({children}) {
  return (
    <ReactRouter>
      <Container>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {children}
      </Container>
    </ReactRouter>
  )
}
