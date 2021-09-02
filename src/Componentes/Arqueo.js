import { React, useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import background from "../images/backgraundarqueo.jpg";
import Menu from "./Menu.js";

import Arquecentenas from "./Arqueocentenas.js";

import Arqueoxmoendaxcentena from "./ArqueoXlistacentas.js";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  Image: {
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  item1: { marginLeft: "50%" },
});

function Arqueo() {
  const classes = useStyles();
  const [lngregistro, setlngregistro] = useState(0);
  const [intstatus, setstatus] = useState(0);

  useEffect(() => {
    let user = window.sessionStorage.getItem("idusuario");
    axios
      .post(
        "https://syscriptoapi.azurewebsites.net/api/RegistroArqueos/Validar?iduser=" +
          user +
          ""
      )
      .then(function (respuesta) {
        if (respuesta.data !== "") {
          setlngregistro(respuesta.data.lngIdRegistro);
          setstatus(2);
        } else {
          sinregistro();
        }
      })
      .then(function (error) {
        console.log(error);
      });
  }, [intstatus, lngregistro]);

  const sinregistro = () => {
    axios
      .post(
        "https://syscriptoapi.azurewebsites.net/api/RegistroArqueos/Crear",
        {
          txtRegistro: "registro11",
          intIdEmpresa: window.sessionStorage.getItem("idempresa"),
          intIdPlaza: window.sessionStorage.getItem("idplaza"),
          intIdUsuario: window.sessionStorage.getItem("idusuario"),
        }
      )
      .then(function (respuesta) {
        if (respuesta !== null) {
          setlngregistro(respuesta.data.lngIdRegistro);
          setstatus(1);
        }
      })
      .then(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Menu />
      <Grid container className={classes.Image}>
        <Grid item xs={12}>
          <Arquecentenas lngregistro={lngregistro} status={intstatus} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Arqueo;


