import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BienvenidoPagina from "./contenedores/bienvenido";
import NoEncontradoPagina from "./contenedores/404";
import TerminosPagina from "./contenedores/TerminosPagina";
import PrivacidadPagina from "./contenedores/PrivacidadPagina";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route component={BienvenidoPagina} exact={true} path="/" />
            <Route component={NoEncontradoPagina} exact path="/404" />
            <Route component={TerminosPagina} exact path="/terminos" />
            <Route component={PrivacidadPagina} exact path="/privacidad" />
            <Route component={NoEncontradoPagina} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
