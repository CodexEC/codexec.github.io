import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";


import BienvenidoPagina from "./contenedores/bienvenido";
// import ConciertosPagina from "./contenedores/conciertos";
import NoEncontradoPagina from "./contenedores/404";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route component={BienvenidoPagina} exact={true} path="/" />
        <Route component={NoEncontradoPagina} />
      </Switch>
    );
  }
}

export default App;
/* <Route component={ConciertosPagina} exact={true} path="/conciertos" />
<Route component={NoEncontradoPagina} /> */
