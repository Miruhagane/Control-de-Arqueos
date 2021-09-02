import { React, useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";

function Arquecentenas(props) {
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

  let lngIdRegistro = props.lngregistro;
  let status = props.status;

  const [usdarray, setarray] = useState([]);
  const [mxnarray, setvalmxn] = useState([]);
  const [euarray, setvaleu] = useState([]);
  const [dnsarray, setvaldns] = useState([]);
  const [lbarray, setvallb] = useState([]);
  const [fsarray, setvalfs] = useState([]);
  const [rlsarray, setvalrls] = useState([]);
  const [ausarray, setvalaus] = useState([]);
  const [totales, settotales] = useState({
    usd: "",
    Mxn: "",
    eu: "",
    dns: "",
    lb: "",
    fs: "",
    rls: "",
    aus: "",
  });

  const [usd, setusd] = useState({
    D1: "",
    D2: "",
    D3: "",
    D4: "",
    D5: "",
    D6: "",
    D8: "",
    D9: "",
    D10: "",
    D11: "",
  });

  const [mxn, setmxn] = useState({
    M1: "",
    M2: "",
    M3: "",
    M4: "",
    M5: "",
    M6: "",
    M8: "",
    M9: "",
    M10: "",
    M11: "",
  });

  const [eu, seteu] = useState({
    E1: "",
    E2: "",
    E3: "",
    E4: "",
    E5: "",
    E6: "",
    E8: "",
    E9: "",
    E10: "",
    E11: "",
  });

  const [dns, setdns] = useState({
    C1: "",
    C2: "",
    C3: "",
    C4: "",
    C5: "",
    C6: "",
    C8: "",
    C9: "",
    C10: "",
    C11: "",
  });

  const [lb, setlb] = useState({
    L1: "",
    L2: "",
    L3: "",
    L4: "",
    L5: "",
    L6: "",
    L8: "",
    L9: "",
    L10: "",
    L11: "",
  });

  const [fs, setfs] = useState({
    F1: "",
    F2: "",
    F3: "",
    F4: "",
    F5: "",
    F6: "",
    F8: "",
    F9: "",
    F10: "",
    F11: "",
  });

  const [rls, setrls] = useState({
    R1: "",
    R2: "",
    R3: "",
    R4: "",
    R5: "",
    R6: "",
    R8: "",
    R9: "",
    R10: "",
    R11: "",
  });

  const [aus, setaus] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    A5: "",
    A6: "",
    A7: "",
    A8: "",
    A9: "",
    A10: "",
    A11: "",
  });

  const [registro, setregistro] = useState(0);

  const forms = (event) => {
    setusd({ ...usd, [event.target.name]: event.target.value });
    setmxn({ ...mxn, [event.target.name]: event.target.value });
    seteu({ ...eu, [event.target.name]: event.target.value });
    setdns({ ...dns, [event.target.name]: event.target.value });
    setlb({ ...lb, [event.target.name]: event.target.value });
    setfs({ ...fs, [event.target.name]: event.target.value });
    setrls({ ...rls, [event.target.name]: event.target.value });
    setaus({ ...aus, [event.target.name]: event.target.value });
  };

  let fecha = new Date();

  const postusd = [
    {
      lngIdArqueoUnidades: usd.id1,
      intIdMoneda: 1,
      intIdDenominacion: 1,
      dblCantidad: usd.D1,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id2,
      intIdMoneda: 1,
      intIdDenominacion: 2,
      dblCantidad: usd.D2,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id3,
      intIdMoneda: 1,
      intIdDenominacion: 3,
      dblCantidad: usd.D3,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id4,
      intIdMoneda: 1,
      intIdDenominacion: 4,
      dblCantidad: usd.D4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id5,
      intIdMoneda: 1,
      intIdDenominacion: 5,
      dblCantidad: usd.D5,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id6,
      intIdMoneda: 1,
      intIdDenominacion: 6,
      dblCantidad: usd.D6,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id7,
      intIdMoneda: 1,
      intIdDenominacion: 7,
      dblCantidad: usd.D7,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id8,
      intIdMoneda: 1,
      intIdDenominacion: 8,
      dblCantidad: usd.D8,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id9,
      intIdMoneda: 1,
      intIdDenominacion: 9,
      dblCantidad: usd.D9,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id10,
      intIdMoneda: 1,
      intIdDenominacion: 10,
      dblCantidad: usd.D10,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: usd.id11,
      intIdMoneda: 1,
      intIdDenominacion: 11,
      dblCantidad: usd.D11,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
  ];

  const postmxn = [
    {
      lngIdArqueoUnidades: mxn.id1,
      intIdMoneda: 2,
      intIdDenominacion: 1,
      dblCantidad: mxn.M1,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id2,
      intIdMoneda: 2,
      intIdDenominacion: 2,
      dblCantidad: mxn.M2,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id3,
      intIdMoneda: 2,
      intIdDenominacion: 3,
      dblCantidad: mxn.M3,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id4,
      intIdMoneda: 2,
      intIdDenominacion: 4,
      dblCantidad: mxn.M4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id5,
      intIdMoneda: 2,
      intIdDenominacion: 5,
      dblCantidad: mxn.M5,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id6,
      intIdMoneda: 2,
      intIdDenominacion: 6,
      dblCantidad: usd.D6,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id7,
      intIdMoneda: 2,
      intIdDenominacion: 7,
      dblCantidad: mxn.M7,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id8,
      intIdMoneda: 2,
      intIdDenominacion: 8,
      dblCantidad: mxn.M8,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id9,
      intIdMoneda: 2,
      intIdDenominacion: 9,
      dblCantidad: mxn.M9,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id10,
      intIdMoneda: 2,
      intIdDenominacion: 10,
      dblCantidad: mxn.M10,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: mxn.id11,
      intIdMoneda: 2,
      intIdDenominacion: 11,
      dblCantidad: mxn.M11,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
  ];

  const posteu = [
    {
      lngIdArqueoUnidades: eu.id1,
      intIdMoneda: 3,
      intIdDenominacion: 1,
      dblCantidad: eu.E1,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id2,
      intIdMoneda: 3,
      intIdDenominacion: 2,
      dblCantidad: eu.E2,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id3,
      intIdMoneda: 3,
      intIdDenominacion: 3,
      dblCantidad: eu.E3,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id4,
      intIdMoneda: 3,
      intIdDenominacion: 4,
      dblCantidad: eu.E4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id5,
      intIdMoneda: 3,
      intIdDenominacion: 5,
      dblCantidad: eu.E5,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id6,
      intIdMoneda: 3,
      intIdDenominacion: 6,
      dblCantidad: eu.E6,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id7,
      intIdMoneda: 3,
      intIdDenominacion: 7,
      dblCantidad: eu.E7,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id8,
      intIdMoneda: 3,
      intIdDenominacion: 8,
      dblCantidad: eu.E8,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id9,
      intIdMoneda: 3,
      intIdDenominacion: 9,
      dblCantidad: eu.E9,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id10,
      intIdMoneda: 3,
      intIdDenominacion: 10,
      dblCantidad: eu.E10,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: eu.id11,
      intIdMoneda: 3,
      intIdDenominacion: 11,
      dblCantidad: eu.E11,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
  ];

  const postdns = [
    {
      lngIdArqueoUnidades: dns.id1,
      intIdMoneda: 4,
      intIdDenominacion: 1,
      dblCantidad: dns.C1,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id2,
      intIdMoneda: 4,
      intIdDenominacion: 2,
      dblCantidad: dns.C2,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id3,
      intIdMoneda: 4,
      intIdDenominacion: 3,
      dblCantidad: dns.C3,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id4,
      intIdMoneda: 4,
      intIdDenominacion: 4,
      dblCantidad: dns.C4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id5,
      intIdMoneda: 4,
      intIdDenominacion: 5,
      dblCantidad: dns.C5,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id6,
      intIdMoneda: 4,
      intIdDenominacion: 6,
      dblCantidad: dns.C6,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id7,
      intIdMoneda: 4,
      intIdDenominacion: 7,
      dblCantidad: dns.C7,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id8,
      intIdMoneda: 4,
      intIdDenominacion: 8,
      dblCantidad: dns.C8,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id9,
      intIdMoneda: 4,
      intIdDenominacion: 9,
      dblCantidad: dns.C9,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id10,
      intIdMoneda: 4,
      intIdDenominacion: 10,
      dblCantidad: dns.C10,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: dns.id11,
      intIdMoneda: 4,
      intIdDenominacion: 11,
      dblCantidad: dns.C11,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
  ];

  const postlb = [
    {
      lngIdArqueoUnidades: lb.id1,
      intIdMoneda: 5,
      intIdDenominacion: 1,
      dblCantidad: lb.L1,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id2,
      intIdMoneda: 5,
      intIdDenominacion: 2,
      dblCantidad: lb.L2,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id3,
      intIdMoneda: 5,
      intIdDenominacion: 3,
      dblCantidad: lb.L3,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id4,
      intIdMoneda: 5,
      intIdDenominacion: 4,
      dblCantidad: lb.L4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id5,
      intIdMoneda: 5,
      intIdDenominacion: 5,
      dblCantidad: lb.L5,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id6,
      intIdMoneda: 5,
      intIdDenominacion: 6,
      dblCantidad: lb.L6,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id7,
      intIdMoneda: 5,
      intIdDenominacion: 7,
      dblCantidad: lb.L7,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id8,
      intIdMoneda: 5,
      intIdDenominacion: 8,
      dblCantidad: lb.L8,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id9,
      intIdMoneda: 5,
      intIdDenominacion: 9,
      dblCantidad: lb.L9,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id10,
      intIdMoneda: 5,
      intIdDenominacion: 10,
      dblCantidad: lb.L10,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: lb.id11,
      intIdMoneda: 5,
      intIdDenominacion: 11,
      dblCantidad: lb.L11,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
  ];

  const postfs = [
    {
      lngIdArqueoUnidades: fs.id1,
      intIdMoneda: 6,
      intIdDenominacion: 1,
      dblCantidad: fs.F1,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id2,
      intIdMoneda: 6,
      intIdDenominacion: 2,
      dblCantidad: fs.F2,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id3,
      intIdMoneda: 6,
      intIdDenominacion: 3,
      dblCantidad: fs.F3,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id4,
      intIdMoneda: 6,
      intIdDenominacion: 4,
      dblCantidad: fs.F4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id5,
      intIdMoneda: 6,
      intIdDenominacion: 5,
      dblCantidad: fs.F5,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id6,
      intIdMoneda: 6,
      intIdDenominacion: 6,
      dblCantidad: fs.F6,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id7,
      intIdMoneda: 6,
      intIdDenominacion: 7,
      dblCantidad: fs.F7,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id8,
      intIdMoneda: 6,
      intIdDenominacion: 8,
      dblCantidad: fs.F8,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id9,
      intIdMoneda: 6,
      intIdDenominacion: 9,
      dblCantidad: fs.F9,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id10,
      intIdMoneda: 6,
      intIdDenominacion: 10,
      dblCantidad: fs.F10,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: fs.id11,
      intIdMoneda: 6,
      intIdDenominacion: 11,
      dblCantidad: fs.F11,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
  ];

  const postrls = [
    {
      lngIdArqueoUnidades: rls.id1,
      intIdMoneda: 7,
      intIdDenominacion: 1,
      dblCantidad: rls.R1,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id2,
      intIdMoneda: 7,
      intIdDenominacion: 2,
      dblCantidad: rls.R2,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id3,
      intIdMoneda: 7,
      intIdDenominacion: 3,
      dblCantidad: rls.R3,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id4,
      intIdMoneda: 7,
      intIdDenominacion: 4,
      dblCantidad: rls.R4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id5,
      intIdMoneda: 7,
      intIdDenominacion: 5,
      dblCantidad: rls.R5,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id6,
      intIdMoneda: 7,
      intIdDenominacion: 6,
      dblCantidad: rls.R6,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id7,
      intIdMoneda: 7,
      intIdDenominacion: 7,
      dblCantidad: fs.F7,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id8,
      intIdMoneda: 7,
      intIdDenominacion: 8,
      dblCantidad: rls.R8,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id9,
      intIdMoneda: 7,
      intIdDenominacion: 9,
      dblCantidad: rls.R9,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id10,
      intIdMoneda: 7,
      intIdDenominacion: 10,
      dblCantidad: rls.R10,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: rls.id11,
      intIdMoneda: 7,
      intIdDenominacion: 11,
      dblCantidad: rls.R11,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
  ];

  const postaus = [
    {
      lngIdArqueoUnidades: aus.id1,
      intIdMoneda: 8,
      intIdDenominacion: 1,
      dblCantidad: aus.A1,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id2,
      intIdMoneda: 8,
      intIdDenominacion: 2,
      dblCantidad: aus.A3,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id3,
      intIdMoneda: 8,
      intIdDenominacion: 3,
      dblCantidad: aus.A4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id4,
      intIdMoneda: 8,
      intIdDenominacion: 4,
      dblCantidad: aus.A4,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id5,
      intIdMoneda: 8,
      intIdDenominacion: 5,
      dblCantidad: aus.A5,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id6,
      intIdMoneda: 8,
      intIdDenominacion: 6,
      dblCantidad: aus.A6,
      fecDia: fecha.toLocaleDlngIdRegistrog,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id7,
      intIdMoneda: 8,
      intIdDenominacion: 7,
      dblCantidad: aus.A7,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id8,
      intIdMoneda: 8,
      intIdDenominacion: 8,
      dblCantidad: aus.A8,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id9,
      intIdMoneda: 8,
      intIdDenominacion: 9,
      dblCantidad: aus.A9,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id10,
      intIdMoneda: 8,
      intIdDenominacion: 10,
      dblCantidad: aus.A10,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
    {
      lngIdArqueoUnidades: aus.id11,
      intIdMoneda: 8,
      intIdDenominacion: 11,
      dblCantidad: aus.A11,
      fecDia: fecha.toLocaleDateString,
      bolCongelar: false,
      intIdStatus: 0,
      lngIdRegistro: lngIdRegistro,
    },
  ];

  const obtregistro = () => {
    if (status === 2) {
      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Editar",
          [
            {
              LngIdArqueoCentenas: usdarray[0].id,
              intIdMoneda: 1,
              intIdDenominacion: 1,
              DblCantidad: usd.D1 == null ? usdarray[0].value : usd.D1,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[1].id,
              intIdMoneda: 1,
              intIdDenominacion: 2,
              DblCantidad: usd.D2 == null ? usdarray[1].value : usd.D2,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[2].id,
              intIdMoneda: 1,
              intIdDenominacion: 3,
              DblCantidad: usd.D3 == null ? usdarray[2].value : usd.D3,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[3].id,
              intIdMoneda: 1,
              intIdDenominacion: 4,
              DblCantidad: usd.D4 == null ? usdarray[3].value : usd.D4,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[4].id,
              intIdMoneda: 1,
              intIdDenominacion: 5,
              DblCantidad: usd.D5 == null ? usdarray[4].value : usd.D5,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[5].id,
              intIdMoneda: 1,
              intIdDenominacion: 6,
              DblCantidad: usd.D6 == null ? usdarray[5].value : usd.D6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[6].id,
              intIdMoneda: 1,
              intIdDenominacion: 7,
              DblCantidad: usd.D7 == null ? usdarray[6].value : usd.D7,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[7].id,
              intIdMoneda: 1,
              intIdDenominacion: 8,
              DblCantidad: usd.D8 == null ? usdarray[7].value : usd.D8,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[8].id,
              intIdMoneda: 1,
              intIdDenominacion: 9,
              DblCantidad: usd.D9 == null ? usdarray[8].value : usd.D9,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[9].id,
              intIdMoneda: 1,
              intIdDenominacion: 10,
              DblCantidad: usd.D10 == null ? usdarray[9].value : usd.D10,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: usdarray[10].id,
              intIdMoneda: 1,
              intIdDenominacion: 11,
              DblCantidad: usd.D11 == null ? usdarray[10].value : usd.D11,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
          ]
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Editar",
          [
            {
              LngIdArqueoCentenas: mxnarray[0].id,
              intIdMoneda: 2,
              intIdDenominacion: 1,
              DblCantidad: mxn.M1 == null ? mxnarray[0].value : mxn.M1,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[1].id,
              intIdMoneda: 2,
              intIdDenominacion: 2,
              DblCantidad: mxn.M2 == null ? mxnarray[1].value : mxn.M2,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[2].id,
              intIdMoneda: 2,
              intIdDenominacion: 3,
              DblCantidad: mxn.M3 == null ? mxnarray[2].value : mxn.M3,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[3].id,
              intIdMoneda: 2,
              intIdDenominacion: 4,
              DblCantidad: mxn.M4 == null ? mxnarray[3].value : mxn.M4,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[4].id,
              intIdMoneda: 2,
              intIdDenominacion: 5,
              DblCantidad: mxn.M5 == null ? mxnarray[4].value : mxn.M5,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[5].id,
              intIdMoneda: 2,
              intIdDenominacion: 6,
              DblCantidad: mxn.M6 == null ? mxnarray[5].value : mxn.M6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[6].id,
              intIdMoneda: 2,
              intIdDenominacion: 7,
              DblCantidad: mxn.M7 == null ? mxnarray[6].value : mxn.M7,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[7].id,
              intIdMoneda: 2,
              intIdDenominacion: 8,
              DblCantidad: mxn.M8 == null ? mxnarray[7].value : mxn.M8,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[8].id,
              intIdMoneda: 2,
              intIdDenominacion: 9,
              DblCantidad: mxn.M9 == null ? mxnarray[8].value : mxn.M9,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[9].id,
              intIdMoneda: 2,
              intIdDenominacion: 10,
              DblCantidad: mxn.M10 == null ? mxnarray[9].value : mxn.M10,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: mxnarray[10].id,
              intIdMoneda: 2,
              intIdDenominacion: 11,
              DblCantidad: mxn.M11 == null ? mxnarray[10].value : mxn.M11,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
          ]
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Editar",
          [
            {
              LngIdArqueoCentenas: euarray[0].id,
              intIdMoneda: 3,
              intIdDenominacion: 1,
              DblCantidad: eu.E1 == null ? euarray[0].value : eu.E1,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[1].id,
              intIdMoneda: 3,
              intIdDenominacion: 2,
              DblCantidad: eu.E2 == null ? euarray[1].value : eu.E2,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[2].id,
              intIdMoneda: 3,
              intIdDenominacion: 3,
              DblCantidad: eu.E3 == null ? euarray[2].value : eu.E3,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[3].id,
              intIdMoneda: 3,
              intIdDenominacion: 4,
              DblCantidad: eu.E4 == null ? euarray[3].value : eu.E4,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[4].id,
              intIdMoneda: 3,
              intIdDenominacion: 5,
              DblCantidad: eu.E5 == null ? euarray[4].value : eu.E5,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[5].id,
              intIdMoneda: 3,
              intIdDenominacion: 6,
              DblCantidad: eu.E6 == null ? euarray[5].value : eu.E6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[6].id,
              intIdMoneda: 3,
              intIdDenominacion: 7,
              DblCantidad: eu.E7 == null ? euarray[6].value : eu.E7,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[7].id,
              intIdMoneda: 3,
              intIdDenominacion: 8,
              DblCantidad: eu.E8 == null ? euarray[7].value : eu.E8,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[8].id,
              intIdMoneda: 3,
              intIdDenominacion: 9,
              DblCantidad: eu.E9 == null ? euarray[8].value : eu.E9,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[9].id,
              intIdMoneda: 3,
              intIdDenominacion: 10,
              DblCantidad: eu.E10 == null ? euarray[9].value : eu.E10,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: euarray[10].id,
              intIdMoneda: 3,
              intIdDenominacion: 11,
              DblCantidad: eu.E11 == null ? euarray[10].value : eu.E11,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
          ]
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Editar",
          [
            {
              LngIdArqueoCentenas: dnsarray[0].id,
              intIdMoneda: 4,
              intIdDenominacion: 1,
              DblCantidad: dns.C1 == null ? dnsarray[0].value : dns.C1,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[1].id,
              intIdMoneda: 4,
              intIdDenominacion: 2,
              DblCantidad: dns.C2 == null ? dnsarray[1].value : dns.C2,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[2].id,
              intIdMoneda: 4,
              intIdDenominacion: 3,
              DblCantidad: dns.C3 == null ? dnsarray[2].value : dns.C3,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[3].id,
              intIdMoneda: 4,
              intIdDenominacion: 4,
              DblCantidad: dns.C4 == null ? dnsarray[3].value : dns.C4,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[4].id,
              intIdMoneda: 4,
              intIdDenominacion: 5,
              DblCantidad: dns.C5 == null ? dnsarray[4].value : dns.C5,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[5].id,
              intIdMoneda: 4,
              intIdDenominacion: 6,
              DblCantidad: dns.C6 == null ? dnsarray[5].value : dns.C6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[6].id,
              intIdMoneda: 4,
              intIdDenominacion: 7,
              DblCantidad: dns.C7 == null ? dnsarray[6].value : dns.C6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[7].id,
              intIdMoneda: 4,
              intIdDenominacion: 8,
              DblCantidad: dns.C8 == null ? dnsarray[7].value : dns.C8,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[8].id,
              intIdMoneda: 4,
              intIdDenominacion: 9,
              DblCantidad: dns.C9 == null ? dnsarray[8].value : dns.C9,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[9].id,
              intIdMoneda: 4,
              intIdDenominacion: 10,
              DblCantidad: dns.C10 == null ? dnsarray[9].value : dns.C10,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: dnsarray[10].id,
              intIdMoneda: 4,
              intIdDenominacion: 11,
              DblCantidad: dns.C11 == null ? dnsarray[10].value : dns.C11,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
          ]
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Editar",
          [
            {
              LngIdArqueoCentenas: lbarray[0].id,
              intIdMoneda: 5,
              intIdDenominacion: 1,
              DblCantidad: lb.L1 == null ? lbarray[0].value : lb.L1,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[1].id,
              intIdMoneda: 5,
              intIdDenominacion: 2,
              DblCantidad: lb.L2 == null ? lbarray[1].value : lb.L2,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[2].id,
              intIdMoneda: 5,
              intIdDenominacion: 3,
              DblCantidad: lb.L3 == null ? lbarray[2].value : lb.L3,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[3].id,
              intIdMoneda: 5,
              intIdDenominacion: 4,
              DblCantidad: lb.L4 == null ? lbarray[3].value : lb.L4,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[4].id,
              intIdMoneda: 5,
              intIdDenominacion: 5,
              DblCantidad: lb.L5 == null ? lbarray[4].value : lb.L5,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[5].id,
              intIdMoneda: 5,
              intIdDenominacion: 6,
              DblCantidad: lb.L6 == null ? lbarray[5].value : lb.L6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[6].id,
              intIdMoneda: 5,
              intIdDenominacion: 7,
              DblCantidad: lb.L7 == null ? lbarray[6].value : lb.L7,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[7].id,
              intIdMoneda: 5,
              intIdDenominacion: 8,
              DblCantidad: lb.L8 == null ? lbarray[7].value : lb.L8,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[8].id,
              intIdMoneda: 5,
              intIdDenominacion: 9,
              DblCantidad: lb.L9 == null ? lbarray[8].value : lb.L9,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[9].id,
              intIdMoneda: 5,
              intIdDenominacion: 10,
              DblCantidad: lb.L10 == null ? lbarray[9].value : lb.L10,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: lbarray[10].id,
              intIdMoneda: 5,
              intIdDenominacion: 11,
              DblCantidad: lb.L11 == null ? lbarray[10].value : lb.L11,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
          ]
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Editar",
          [
            {
              LngIdArqueoCentenas: fsarray[0].id,
              intIdMoneda: 6,
              intIdDenominacion: 1,
              DblCantidad: fs.F1 == null ? fsarray[0].value : fs.F1,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[1].id,
              intIdMoneda: 6,
              intIdDenominacion: 2,
              DblCantidad: fs.F2 == null ? fsarray[1].value : fs.F2,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[2].id,
              intIdMoneda: 6,
              intIdDenominacion: 3,
              DblCantidad: fs.F3 == null ? fsarray[2].value : fs.F3,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[3].id,
              intIdMoneda: 6,
              intIdDenominacion: 4,
              DblCantidad: fs.F4 == null ? fsarray[3].value : fs.F4,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[4].id,
              intIdMoneda: 6,
              intIdDenominacion: 5,
              DblCantidad: fs.F5 == null ? fsarray[4].value : fs.F5,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[5].id,
              intIdMoneda: 6,
              intIdDenominacion: 6,
              DblCantidad: fs.F6 == null ? fsarray[5].value : fs.F6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[6].id,
              intIdMoneda: 6,
              intIdDenominacion: 7,
              DblCantidad: fs.F7 == null ? fsarray[6].value : fs.F7,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[7].id,
              intIdMoneda: 6,
              intIdDenominacion: 8,
              DblCantidad: fs.F8 == null ? fsarray[7].value : fs.F8,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[8].id,
              intIdMoneda: 6,
              intIdDenominacion: 9,
              DblCantidad: fs.F9 == null ? fsarray[8].value : fs.F9,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[9].id,
              intIdMoneda: 6,
              intIdDenominacion: 10,
              DblCantidad: fs.F10 == null ? fsarray[9].value : fs.F10,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: fsarray[10].id,
              intIdMoneda: 6,
              intIdDenominacion: 11,
              DblCantidad: fs.F11 == null ? fsarray[10].value : fs.F11,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
          ]
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Editar",
          [
            {
              LngIdArqueoCentenas: rlsarray[0].id,
              intIdMoneda: 7,
              intIdDenominacion: 1,
              DblCantidad: rls.R1 == null ? rlsarray[0].value : rls.R1,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[1].id,
              intIdMoneda: 7,
              intIdDenominacion: 2,
              DblCantidad: rls.R2 == null ? rlsarray[1].value : rls.R2,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[2].id,
              intIdMoneda: 7,
              intIdDenominacion: 3,
              DblCantidad: rls.R3 == null ? rlsarray[2].value : rls.R3,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[3].id,
              intIdMoneda: 7,
              intIdDenominacion: 4,
              DblCantidad: rls.R4 == null ? rlsarray[3].value : rls.R4,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[4].id,
              intIdMoneda: 7,
              intIdDenominacion: 5,
              DblCantidad: rls.R5 == null ? rlsarray[4].value : rls.R5,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[5].id,
              intIdMoneda: 7,
              intIdDenominacion: 6,
              DblCantidad: rls.R6 == null ? rlsarray[5].value : rls.R6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[6].id,
              intIdMoneda: 7,
              intIdDenominacion: 7,
              DblCantidad: rls.R7 == null ? rlsarray[6].value : rls.R7,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[7].id,
              intIdMoneda: 7,
              intIdDenominacion: 8,
              DblCantidad: rls.R8 == null ? rlsarray[7].value : rls.R8,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[8].id,
              intIdMoneda: 7,
              intIdDenominacion: 9,
              DblCantidad: rls.R9 == null ? rlsarray[8].value : rls.R9,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[9].id,
              intIdMoneda: 7,
              intIdDenominacion: 10,
              DblCantidad: rls.R10 == null ? rlsarray[9].value : rls.R10,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: rlsarray[10].id,
              intIdMoneda: 7,
              intIdDenominacion: 11,
              DblCantidad: rls.R11 == null ? rlsarray[10].value : rls.R11,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
          ]
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Editar",
          [
            {
              LngIdArqueoCentenas: ausarray[0].id,
              intIdMoneda: 8,
              intIdDenominacion: 1,
              DblCantidad: aus.A1 == null ? ausarray[0].value : aus.A1,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[1].id,
              intIdMoneda: 8,
              intIdDenominacion: 2,
              DblCantidad: aus.A2 == null ? ausarray[1].value : aus.A2,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[2].id,
              intIdMoneda: 8,
              intIdDenominacion: 3,
              DblCantidad: aus.A3 == null ? ausarray[2].value : aus.A3,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[3].id,
              intIdMoneda: 8,
              intIdDenominacion: 4,
              DblCantidad: aus.A4 == null ? ausarray[3].value : aus.A4,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[4].id,
              intIdMoneda: 8,
              intIdDenominacion: 5,
              DblCantidad: aus.A5 == null ? ausarray[4].value : aus.A5,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[5].id,
              intIdMoneda: 8,
              intIdDenominacion: 6,
              DblCantidad: aus.A6 == null ? ausarray[5].value : aus.A6,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[6].id,
              intIdMoneda: 8,
              intIdDenominacion: 7,
              DblCantidad: aus.A7 == null ? ausarray[6].value : aus.A7,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[7].id,
              intIdMoneda: 8,
              intIdDenominacion: 8,
              DblCantidad: aus.A8 == null ? ausarray[7].value : aus.A8,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[8].id,
              intIdMoneda: 8,
              intIdDenominacion: 9,
              DblCantidad: aus.A9 == null ? ausarray[8].value : aus.A9,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[9].id,
              intIdMoneda: 8,
              intIdDenominacion: 10,
              DblCantidad: aus.A10 == null ? ausarray[9].value : aus.A10,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
            {
              LngIdArqueoCentenas: ausarray[10].id,
              intIdMoneda: 8,
              intIdDenominacion: 11,
              DblCantidad: aus.A11 == null ? ausarray[10].value : aus.A11,
              fecDia: fecha.toLocaleDateString,
              bolCongelar: false,
              intIdStatus: 0,
              lngIdRegistro: lngIdRegistro,
            },
          ]
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });
      handleClick();
    } else {
      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Crear",
          postusd
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Crear",
          postmxn
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Crear",
          posteu
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Crear",
          postdns
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Crear",
          postlb
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post("https://localhost:44346/api/TbArqueoCentenas/Crear", postfs)
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Crear",
          postrls
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Crear",
          postaus
        )
        .then(function (respuesta) {
          console.log(respuesta);
        })
        .then(function (error) {
          console.log(error);
        });
    }
  };

  const postform = (event) => {
    event.preventDefault();

    if (status === 2) {
      obtregistro();
    } else {
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
            setregistro(respuesta.data.data.lngIdRegistro);
            obtregistro();
          }
        })
        .then(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (status === 2) {
      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Sumatoria?lngidregistro=" +
            lngIdRegistro +
            ""
        )
        .then(function (response) {
          drt(response.data);
        })
        .then(function (error) {
          console.log(error);
        });

      axios
        .post(
          "https://syscriptoapi.azurewebsites.net/api/TbArqueoCentenas/Totales?lngidregistro=" +
            lngIdRegistro +
            ""
        )
        .then(function (response) {
          valuetotales(response.data);
        })
        .then(function (error) {
          console.log(error);
        });
    }
  }, [lngIdRegistro, status]);

  const drt = (lista) => {
    lista.forEach((element) => {
      if (element.intIdMoneda === 1) {
        if (element.intIdDenominacion === 1) {
          setusd({ D1: element.dblCantidad });

          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          setusd({ D2: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          setusd({ D3: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          setusd({ D4: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          setusd({ D5: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          setusd({ D6: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          setusd({ D7: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          setusd({ D8: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          setusd({ D9: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          setusd({ D10: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          setusd({ D11: element.dblCantidad });
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 2) {
        if (element.intIdDenominacion === 1) {
          setmxn({ M1: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          setmxn({ M2: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          setmxn({ M3: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          setmxn({ M4: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          setmxn({ M5: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          setmxn({ M6: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          setmxn({ M7: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          setmxn({ M8: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          setmxn({ M9: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          setmxn({ M10: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          setmxn({ M11: element.dblCantidad });
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 3) {
        if (element.intIdDenominacion === 1) {
          seteu({ E1: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          seteu({ E2: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          seteu({ E3: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          seteu({ E4: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          seteu({ E5: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          seteu({ E6: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          seteu({ E7: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          seteu({ E8: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          seteu({ E9: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          seteu({ E10: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          seteu({ E11: element.dblCantidad });
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 4) {
        if (element.intIdDenominacion === 1) {
          setdns({ C1: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          setdns({ C2: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          setdns({ C3: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          setdns({ C4: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          setdns({ C5: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          setdns({ C6: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          setdns({ C7: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          setdns({ C8: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          setdns({ C9: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          setdns({ C10: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          setdns({ C11: element.dblCantidad });
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 5) {
        if (element.intIdDenominacion === 1) {
          setlb({ L1: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          setlb({ L2: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          setlb({ L3: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          setlb({ L4: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          setlb({ L5: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          setlb({ L6: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          setlb({ L7: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          setlb({ L8: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          setlb({ L9: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          setlb({ L10: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          setlb({ L11: element.dblCantidad });
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 6) {
        if (element.intIdDenominacion === 1) {
          setfs({ F1: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          setfs({ F2: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          setfs({ F3: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          setfs({ F4: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          setfs({ F5: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          setfs({ F6: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          setfs({ F7: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          setfs({ F8: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          setfs({ F9: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          setfs({ F10: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          setfs({ F11: element.dblCantidad });
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 7) {
        if (element.intIdDenominacion === 1) {
          setrls({ R1: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          setrls({ R2: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          setrls({ R3: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          setrls({ R4: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          setrls({ R5: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          setrls({ R6: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          setrls({ R7: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          setrls({ R8: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          setrls({ R9: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          setrls({ R10: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          setrls({ R11: element.dblCantidad });
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 8) {
        if (element.intIdDenominacion === 1) {
          setaus({ A1: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          setaus({ A2: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          setaus({ A3: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          setaus({ A4: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          setaus({ A5: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          setaus({ A6: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          setaus({ A7: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          setaus({ A8: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          setaus({ A9: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          setaus({ A10: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          setaus({ A11: element.dblCantidad });
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }
    });
  };

  const valuetotales = (data) => {
    data.forEach((item) => {
      if (item.idMoneda === 1) {
        settotales({ usd: item.valor });
      } else if (item.idMoneda === 2) {
        settotales({ Mxn: item.valor });
      } else if (item.idMoneda === 3) {
        settotales({ eu: item.valor });
      } else if (item.idMoneda === 4) {
        settotales({ dns: item.valor });
      } else if (item.idMoneda === 5) {
        settotales({ lb: item.valor });
      } else if (item.idMoneda === 6) {
        settotales({ fs: item.valor });
      } else if (item.idMoneda === 7) {
        settotales({ rls: item.valor });
      } else if (item.idMoneda === 8) {
        settotales({ aus: item.valor });
      }
    });
  };
  return (
    <div>
      <div className="card">
        <div className="card-header">Arqueo por Centenas</div>
        <div className="card-body">
          <form onSubmit={postform} noValidate autoComplete="off">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Den</th>
                  <th scope="col">USD</th>
                  <th scope="col">MXN</th>
                  <th scope="col">EU</th>
                  <th scope="col">DNS</th>
                  <th scope="col">LB</th>
                  <th scope="col">FS</th>
                  <th scope="col">RLS</th>
                  <th scope="col">AUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1000</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D1"
                      onChange={forms}
                      value={usd.D1}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M1"
                      onChange={forms}
                      value={mxn.M1}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E1"
                      onChange={forms}
                      value={eu.E1}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C1"
                      onChange={forms}
                      value={dns.C1}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L1"
                      onChange={forms}
                      value={lb.L1}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F1"
                      onChange={forms}
                      value={fs.F1}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R1"
                      onChange={forms}
                      value={rls.R1}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A1"
                      onChange={forms}
                      value={aus.A1}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>500</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D2"
                      onChange={forms}
                      value={usd.D2}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M2"
                      onChange={forms}
                      value={mxn.M2}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E2"
                      onChange={forms}
                      value={eu.E2}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C2"
                      onChange={forms}
                      value={dns.C2}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L2"
                      onChange={forms}
                      value={lb.L2}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F2"
                      onChange={forms}
                      value={fs.F2}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R2"
                      onChange={forms}
                      value={rls.R2}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A2"
                      onChange={forms}
                      value={aus.A2}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>200</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D3"
                      onChange={forms}
                      value={usd.D3}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M3"
                      onChange={forms}
                      value={mxn.M3}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E3"
                      onChange={forms}
                      value={eu.E3}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C3"
                      onChange={forms}
                      value={dns.C3}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L3"
                      onChange={forms}
                      value={lb.L3}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F3"
                      onChange={forms}
                      value={fs.F3}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R3"
                      onChange={forms}
                      value={rls.R3}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A3"
                      onChange={forms}
                      value={aus.A3}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>100</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D4"
                      onChange={forms}
                      value={usd.D4}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M4"
                      onChange={forms}
                      value={mxn.M4}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E4"
                      value={lb.L4}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C4"
                      value={dns.C4}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L4"
                      value={lb.L4}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F4"
                      value={fs.F4}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R4"
                      value={rls.R4}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A4"
                      value={aus.A4}
                      onChange={forms}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>50</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D5"
                      value={usd.D5}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M5"
                      value={mxn.M5}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E5"
                      value={eu.E5}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C5"
                      value={dns.C5}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L5"
                      value={lb.L5}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F5"
                      value={fs.F5}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R5"
                      value={rls.R5}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A5"
                      value={aus.A5}
                      onChange={forms}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>20</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D6"
                      value={usd.D6}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M6"
                      value={mxn.M6}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E6"
                      value={eu.E6}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C6"
                      value={dns.C6}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L6"
                      value={lb.L6}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F6"
                      value={fs.F6}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R6"
                      value={rls.R6}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A6"
                      value={aus.A6}
                      onChange={forms}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>10</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D7"
                      value={usd.D7}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M7"
                      value={mxn.M7}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E7"
                      value={eu.E7}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C7"
                      value={dns.C7}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L7"
                      value={lb.L7}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F7"
                      value={fs.F7}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R7"
                      value={rls.R7}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A7"
                      value={aus.A7}
                      onChange={forms}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D8"
                      value={usd.D8}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M8"
                      value={mxn.M8}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E8"
                      value={eu.E8}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C8"
                      value={dns.C8}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L8"
                      value={lb.L8}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F8"
                      value={fs.F8}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R8"
                      value={rls.R8}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A8"
                      value={aus.A8}
                      onChange={forms}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D9"
                      value={usd.D9}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M9"
                      value={mxn.M9}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E9"
                      value={eu.E9}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C9"
                      value={dns.C9}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L9"
                      value={lb.L9}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F9"
                      value={fs.F9}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R9"
                      value={rls.R9}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A9"
                      value={aus.A9}
                      onChange={forms}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>1</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D10"
                      value={usd.D10}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M10"
                      value={mxn.M10}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E10"
                      value={eu.E10}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C10"
                      value={dns.C10}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L10"
                      value={lb.L10}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F10"
                      value={fs.F10}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R10"
                      value={rls.R10}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A10"
                      value={aus.A10}
                      onChange={forms}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>0.50</th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="D11"
                      value={usd.D11}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="M11"
                      value={mxn.M11}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="E11"
                      value={eu.E11}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="C11"
                      value={dns.C11}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="L11"
                      value={lb.L11}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="F11"
                      value={fs.F11}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="R11"
                      value={rls.R11}
                      onChange={forms}
                    />{" "}
                  </th>
                  <th>
                    {" "}
                    <input
                      className="form-control form-control-sm"
                      name="A11"
                      value={aus.A11}
                      onChange={forms}
                    />{" "}
                  </th>
                </tr>
                <tr>
                  <th>Totales</th>

                  <TextField
                    id="standard-basic"
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={totales.usd}
                  />
                  <th>
                    <TextField
                      id="standard-basic"
                      size="small"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={totales.Mxn}
                    />
                  </th>
                  <th>
                    <TextField
                      id="standard-basic"
                      size="small"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={totales.eu}
                    />
                  </th>
                  <th>
                    {" "}
                    <TextField
                      id="standard-basic"
                      size="small"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={totales.dns}
                    />{" "}
                  </th>
                  <th>
                    <TextField
                      id="standard-basic"
                      size="small"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={totales.lb}
                    />
                  </th>
                  <th>
                    <TextField
                      id="standard-basic"
                      size="small"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={totales.fs}
                    />
                  </th>
                  <th>
                    <TextField
                      id="standard-basic"
                      size="small"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={totales.rls}
                    />
                  </th>
                  <th>
                    <TextField
                      id="standard-basic"
                      size="small"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={totales.aus}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
            <Button variant="contained" type="submit" color="secondary">
              Actualizar
            </Button>
          </form>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert variant="filled" severity="success">
          Los datos han sido guardados
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Arquecentenas;