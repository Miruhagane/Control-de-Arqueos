import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login";
import Entradas from "../Entradas.js";
import Unidades from "../Padreunidades";
import Salidas from "../Salidas.js";
import Home from "../Home";
import Centenas from "../Arqueo";
import EntradasC from "../Entradascentenas.js";
import SalidasC from "../Salidascentenas.js";

import React from "react";

function Rutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />

        <Route exact path="/Entrada_unidades" component={Entradas} />
        <Route exact path="/arqueo_Unidades" component={Unidades} />
        <Route exact path="/Salida_unidades" component={Salidas} />

        <Route exact path="/Entrada_Centenas" component={EntradasC} />
        <Route exact path="/arqueo_centenas" component={Centenas} />
        <Route exact path="/Salida_Centenas" component={SalidasC} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rutes;
