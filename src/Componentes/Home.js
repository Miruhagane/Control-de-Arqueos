import { React, useState, useEffect } from "react";
import axios from "axios";

import Menu from "./Menu.js";

let api = "https://syscriptoapi.azurewebsites.net/api/";

function Home() {
  const postregistro = (idregistro) => {
    axios
      .post("https://localhost:44346/api/TbArqueoUnidades/Crear", [
        {
          intIdMoneda: 1,
          intIdDenominacion: 1,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 2,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 3,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 4,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 5,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 6,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 7,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 8,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 9,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 10,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 1,
          intIdDenominacion: 11,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          LngIdRegistro: idregistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });

    axios
      .post("https://localhost:44346/api/TbArqueoUnidades/Crear", [
        {
          intIdMoneda: 2,
          intIdDenominacion: 1,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 2,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 3,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 4,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 5,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 6,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 7,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 8,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 9,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 10,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 2,
          intIdDenominacion: 11,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });

    axios
      .post("https://localhost:44346/api/TbArqueoUnidades/Crear", [
        {
          intIdMoneda: 3,
          intIdDenominacion: 1,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 2,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 3,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 4,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 5,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 6,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 7,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 8,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 9,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 10,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 3,
          intIdDenominacion: 11,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });

    axios
      .post("https://localhost:44346/api/TbArqueoUnidades/Crear", [
        {
          intIdMoneda: 4,
          intIdDenominacion: 1,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 2,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 3,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 4,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 5,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 6,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 7,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 8,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 9,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 10,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 4,
          intIdDenominacion: 11,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });

    axios
      .post("https://localhost:44346/api/TbArqueoUnidades/Crear", [
        {
          intIdMoneda: 5,
          intIdDenominacion: 1,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 2,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 3,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 4,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 5,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 6,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 7,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 8,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 9,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 10,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 5,
          intIdDenominacion: 11,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });

    axios
      .post("https://localhost:44346/api/TbArqueoUnidades/Crear", [
        {
          intIdMoneda: 6,
          intIdDenominacion: 1,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 2,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 3,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 4,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 5,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 6,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 7,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 8,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 9,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 10,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 6,
          intIdDenominacion: 11,
          dblCantidad: 0,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });

    axios
      .post("https://localhost:44346/api/TbArqueoUnidades/Crear", [
        {
          intIdMoneda: 7,
          intIdDenominacion: 1,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 2,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 3,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 4,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 5,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 6,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 7,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 8,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 9,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 10,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 7,
          intIdDenominacion: 11,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });

    axios
      .post("https://localhost:44346/api/TbArqueoUnidades/Crear", [
        {
          intIdMoneda: 8,
          intIdDenominacion: 1,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 2,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 3,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 4,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 5,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 6,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 7,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 8,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 9,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 10,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
        {
          intIdMoneda: 8,
          intIdDenominacion: 11,
          dblCantidad: 0,
          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: idregistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });
  };

  const sinregistro = () => {
    axios
      .post(api + "RegistroArqueos/Crear", {
        txtRegistro: "registro11",
        intIdEmpresa: window.sessionStorage.getItem("idempresa"),
        intIdPlaza: window.sessionStorage.getItem("idplaza"),
        intIdUsuario: window.sessionStorage.getItem("idusuario"),
      })
      .then(function (respuesta) {
        if (respuesta !== null) {
          postregistro(respuesta.data.data.lngIdRegistro);
        }
      })
      .then(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    let user = window.sessionStorage.getItem("idusuario");
    axios
      .post(api + "RegistroArqueos/Validar?iduser=" + user + "")
      .then(function (respuesta) {
        if (respuesta.data === "") {
          sinregistro();
        }
      })
      .then(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {" "}
      <Menu />{" "}
    </div>
  );
}

export default Home;
