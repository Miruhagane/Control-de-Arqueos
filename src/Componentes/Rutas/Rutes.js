import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login";
import Entradas from "../Entradas.js";
import Unidades from "../Padreunidades";
import Salidas from "../Salidas.js";
import Home from "../Home";

import React from "react";

function Rutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Entradas" component={Entradas} />
        <Route exact path="/Unidades" component={Unidades} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Salidas" component={Salidas} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rutes;
