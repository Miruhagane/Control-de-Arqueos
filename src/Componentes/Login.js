import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Logo from "../images/systrackLogo.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";

let api = "https://syscriptoapi.azurewebsites.net/api/";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  Image: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  inputform: {
    width: "100%",
    marginTop: "2rem",
  },
  Avatar: {
    marginLeft: "45%",
    marginTop: "5rem",
  },
  titulo: {
    marginLeft: "14%",
    marginTop: "2rem",
  },
});

function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} item xs={12}>
      <Grid className={classes.Image} item xs={8}></Grid>

      <Grid item xs={4}>
        {" "}
        <Formulario />{" "}
      </Grid>
    </Grid>
  );
}

function Formulario() {
  const classes = useStyles();
  let redirrecionar = useHistory();

  const [user, setuser] = useState({
    correo: "",
    password: "",
  });

  const handlechecks = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };

  const validacion = (event) => {
    event.preventDefault();
    axios
      .post(api + "Login/Login2", {
        correo: user.correo,
        password: user.password,
      })
      .then(function (respuesta) {
        let point = respuesta.data.respuesta;

        if (point !== 500) {
          window.sessionStorage.setItem("nombre", respuesta.data.txtUser);
          window.sessionStorage.setItem("empresa", respuesta.data.txt_empresas);
          window.sessionStorage.setItem("plaza", respuesta.data.txtplaza);
          window.sessionStorage.setItem("mail", respuesta.data.txtEmail);
          window.sessionStorage.setItem(
            "idempresa",
            respuesta.data.intIdEmpresa
          );
          window.sessionStorage.setItem("idplaza", respuesta.data.intIdPlaza);
          window.sessionStorage.setItem(
            "idusuario",
            respuesta.data.lngIdUsuario
          );

          redirrecionar.push("/Home");
        } else {
          alert("Usuario no encontrado");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={validacion} autoComplete="on">
      <Card>
        <CardContent>
          <Grid item xs={12}>
            <Avatar className={classes.Avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.titulo} component="h1" variant="h5">
              Sistema De Control De Arqueos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handlechecks}
              name="correo"
              type="email"
              label="Correo Electronico"
              margin="normal"
              required
              fullWidth
              autoFocus
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={handlechecks}
              name="password"
              type="password"
              label="Contraseña"
              margin="normal"
              required
              fullWidth
              autoFocus
            />
          </Grid>
        </CardContent>

        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            endIcon={<Icon />}
          >
            Ingresar
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default Login;
