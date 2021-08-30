import { React, useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import background from "../images/backgraundarqueo.jpg";
import Menu from "./Menu.js";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";

import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";

let apiconexion = "https://syscriptoapi.azurewebsites.net/api/";

function Salidas() {
  return (
    <div>
      <Menu />
      <Grid>
        <Grid item xs={12}>
          <Tabla />
        </Grid>
      </Grid>
    </div>
  );
}

function Tabla() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);

    setTimeout(
      function () {
        window.location.reload();
      },
      4000,
      "JavaScript"
    );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [Empresa, setempresa] = useState("");
  const [Sucursal, setsucursal] = useState("");

  const [valores, setvalores] = useState({
    v1: "",
    v2: "",
    v3: "",
    v4: "",
    v5: "",
    v6: "",
    v7: "",
    v8: "",
    v90: "",
    v11: "",
    v12: "",
    concepto: "",
    proyecto: "",
  });

  const [display, setdisplay] = useState(true);

  const handleChange = (event) => {
    setempresa(event.target.value);

    if (event.target.value === 4 || event.target.value === "4") {
      setdisplay(false);
    } else {
      setdisplay(true);
    }
  };

  const handleChangevalores = (event) => {
    setvalores({ ...valores, [event.target.name]: event.target.value });
  };

  const handleChangesucursal = (event) => {
    setsucursal(event.target.value);
  };
  const [moneda, setmoneda] = useState("");

  const handleChangemoneda = (event) => {
    setmoneda(event.target.value);
  };

  const [Empresas, setempresas] = useState([]);
  const [sucursales, setsucursales] = useState([]);

  const obtsucursales = () => {
    axios
      .get(apiconexion + "TbArqueoUnidades/Empresas")
      .then(function (response) {
        setempresas(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const obtempresas = () => {
    axios
      .get(apiconexion + "TbArqueoUnidades/Sucursales")
      .then(function (response) {
        setsucursales(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const postform = (idregistro) => {
    axios
      .post(apiconexion + "TbArqueoUnidades/Salida", [
        {
          intIdMoneda: moneda,
          intIdDenominacion: 1,
          dblCantidad: valores.v1,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 2,
          dblCantidad: valores.v2,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 3,
          dblCantidad: valores.v3,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 4,
          dblCantidad: valores.v4,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 5,
          dblCantidad: valores.v5,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 6,
          dblCantidad: valores.v6,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 7,
          dblCantidad: valores.v7,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 8,
          dblCantidad: valores.v8,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 9,
          dblCantidad: valores.v9,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 10,
          dblCantidad: valores.v10,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
        {
          intIdMoneda: moneda,
          intIdDenominacion: 11,
          dblCantidad: valores.v11,
          bolCongelar: true,
          lngIdRegistro: idregistro,
          lngIdEmpresa: Empresa,
          txtConcepto: valores.concepto,
          txtProyecto: valores.proyecto,
          intIdStatus: 0,
          lngIdSucursal: Sucursal,
        },
      ])
      .then(function (response) {
        if (response.status === 200) {
          handleClick();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const validarRegistro = (event) => {
    event.preventDefault();

    let user = window.sessionStorage.getItem("idusuario");
    axios
      .post(apiconexion + "RegistroArqueos/Validar?iduser=" + user + "")
      .then(function (respuesta) {
        if (respuesta.data !== "") {
          postform(respuesta.data.lngIdRegistro);
        }
      })
      .then(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    obtsucursales();
    obtempresas();
  }, []);
  return (
    <div>
      <form onSubmit={validarRegistro}>
        <div className="card bg-secondary">
          <div className="card-header row">
            <div className="col-sm-4">
              <h4 className="card-title">Salidas</h4>
            </div>
            <div className="col-sm-2">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Empresas</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Empresa}
                  onChange={handleChange}
                >
                  {Empresas.map((object, index) => (
                    <option value={object.intIdEmpresa}>
                      {object.txtEmpresa}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="col-sm-2">
              {display === false ? (
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Sucursal
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Sucursal}
                    onChange={handleChangesucursal}
                  >
                    {sucursales.map((object, index) => (
                      <option value={object.lngIdSucursal}>
                        {object.txtSucursal}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <TextField
                  id="proyecto"
                  name="proyecto"
                  onChange={handleChangevalores}
                  label="proyecto"
                />
              )}
            </div>

            <div className="col-sm-2">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Moneda</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={moneda}
                  onChange={handleChangemoneda}
                >
                  <MenuItem value={1}>USD </MenuItem>
                  <MenuItem value={2}>MXN </MenuItem>
                  <MenuItem value={3}>EU </MenuItem>
                  <MenuItem value={4}>DNS </MenuItem>
                  <MenuItem value={5}>LB </MenuItem>
                  <MenuItem value={6}>FS </MenuItem>
                  <MenuItem value={7}>RLS </MenuItem>
                  <MenuItem value={8}>AUS </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="card-body">
            <table
              style={{ width: "30%", marginLeft: "30rem" }}
              className="table table-sm"
            >
              <thead>
                <tr>
                  <th>Denomination</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1000</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v1"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>500</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v2"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>200</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v3"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>100</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v4"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>50</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v5"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>20</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v6"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>10</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v7"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v8"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v9"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>1</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v10"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>0.50</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="v11"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>Concepto</th>
                  <th>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      name="concepto"
                      defaultValue="0"
                      onChange={handleChangevalores}
                    />{" "}
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card-footer">
            <Button
              style={{ marginLeft: "30rem" }}
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
            >
              Registrar
            </Button>
          </div>
        </div>
      </form>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert variant="filled" severity="success">
          Los datos han sido guardados
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Salidas;
