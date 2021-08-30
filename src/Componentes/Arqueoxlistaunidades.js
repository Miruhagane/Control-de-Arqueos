import { React, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";

let api = "https://syscriptoapi.azurewebsites.net/api/";

function Arqueoxlistaunidades(props) {
  let lngIdRegistro = props.lngregistro;

  const [usdarray, setarray] = useState([]);
  const [mxnarray, setvalmxn] = useState([]);
  const [euarray, setvaleu] = useState([]);
  const [dnsarray, setvaldns] = useState([]);
  const [lbarray, setvallb] = useState([]);
  const [fsarray, setvalfs] = useState([]);
  const [rlsarray, setvalrls] = useState([]);
  const [ausarray, setvalaus] = useState([]);

  const [ids, setids] = useState({
    id1: "",
    id2: "",
    id3: "",
    id4: "",
    id5: "",
    id6: "",
    id7: "",
    id8: "",
    id9: "",
    id10: "",
    id11: "",
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    value9: "",
    value10: "",
    value11: "",
  });

  const [valores, setvalores] = useState({
    valor1: "",
    valor2: "",
    valor3: "",
    valor4: "",
    valor5: "",
    valor6: "",
    valor7: "",
    valor8: "",
    valor9: "",
    valor10: "",
    valor11: "",
  });

  const actualizar = () => {
    if (moneda === 1) {
      setids({
        ...ids,
        id1: usdarray[0].id,
        id2: usdarray[1].id,
        id3: usdarray[2].id,
        id4: usdarray[3].id,
        id5: usdarray[4].id,
        id6: usdarray[5].id,
        id7: usdarray[6].id,
        id8: usdarray[7].id,
        id9: usdarray[8].id,
        id10: usdarray[9].id,
        id11: usdarray[10].id,
        value1: usdarray[0].value + parseInt(valores.valor1),
        value2: usdarray[1].value + parseInt(valores.valor2),
        value3: usdarray[2].value + parseInt(valores.valor3),
        value4: usdarray[3].value + parseInt(valores.valor4),
        value5: usdarray[4].value + parseInt(valores.valor5),
        value6: usdarray[5].value + parseInt(valores.valor6),
        value7: usdarray[6].value + parseInt(valores.valor7),
        value8: usdarray[7].value + parseInt(valores.valor8),
        value9: usdarray[8].value + parseInt(valores.valor9),
        value10: usdarray[9].value + parseInt(valores.valor10),
        value11: usdarray[10].value + parseInt(valores.valor11),
      });
    } else if (moneda === 2) {
      setids({
        ...ids,
        id1: mxnarray[0].id,
        id2: mxnarray[1].id,
        id3: mxnarray[2].id,
        id4: mxnarray[3].id,
        id5: mxnarray[4].id,
        id6: mxnarray[5].id,
        id7: mxnarray[6].id,
        id8: mxnarray[7].id,
        id9: mxnarray[8].id,
        id10: mxnarray[9].id,
        id11: mxnarray[10].id,
        value2: mxnarray[1].value + parseInt(valores.valor2),
        value3: mxnarray[2].value + parseInt(valores.valor3),
        value1: mxnarray[0].value + parseInt(valores.valor1),
        value4: mxnarray[3].value + parseInt(valores.valor4),
        value5: mxnarray[4].value + parseInt(valores.valor5),
        value6: mxnarray[5].value + parseInt(valores.valor6),
        value7: mxnarray[6].value + parseInt(valores.valor7),
        value8: mxnarray[7].value + parseInt(valores.valor8),
        value9: mxnarray[8].value + parseInt(valores.valor9),
        value10: mxnarray[9].value + parseInt(valores.valor10),
        value11: mxnarray[10].value + parseInt(valores.valor11),
      });
    } else if (moneda === 3) {
      setids({
        ...ids,
        id1: euarray[0].id,
        id2: euarray[1].id,
        id3: euarray[2].id,
        id4: euarray[3].id,
        id5: euarray[4].id,
        id6: euarray[5].id,
        id7: euarray[6].id,
        id8: euarray[7].id,
        id9: euarray[8].id,
        id10: euarray[9].id,
        id11: euarray[10].id,
        value2: euarray[1].value + parseInt(valores.valor2),
        value3: euarray[2].value + parseInt(valores.valor3),
        value1: euarray[0].value + parseInt(valores.valor1),
        value4: euarray[3].value + parseInt(valores.valor4),
        value5: euarray[4].value + parseInt(valores.valor5),
        value6: euarray[5].value + parseInt(valores.valor6),
        value7: euarray[6].value + parseInt(valores.valor7),
        value8: euarray[7].value + parseInt(valores.valor8),
        value9: euarray[8].value + parseInt(valores.valor9),
        value10: euarray[9].value + parseInt(valores.valor10),
        value11: euarray[10].value + parseInt(valores.valor11),
      });
    } else if (moneda === 4) {
      setids({
        ...ids,
        id2: dnsarray[1].id,
        id3: dnsarray[2].id,
        id4: dnsarray[3].id,
        id5: dnsarray[4].id,
        id6: dnsarray[5].id,
        id7: dnsarray[6].id,
        id8: dnsarray[7].id,
        id9: dnsarray[8].id,
        id1: dnsarray[0].id,
        id10: dnsarray[9].id,
        id11: dnsarray[10].id,
        value2: dnsarray[1].value + parseInt(valores.valor2),
        value3: dnsarray[2].value + parseInt(valores.valor3),
        value1: dnsarray[0].value + parseInt(valores.valor1),
        value4: dnsarray[3].value + parseInt(valores.valor4),
        value5: dnsarray[4].value + parseInt(valores.valor5),
        value6: dnsarray[5].value + parseInt(valores.valor6),
        value7: dnsarray[6].value + parseInt(valores.valor7),
        value8: dnsarray[7].value + parseInt(valores.valor8),
        value9: dnsarray[8].value + parseInt(valores.valor9),
        value10: dnsarray[9].value + parseInt(valores.valor10),
        value11: dnsarray[10].value + parseInt(valores.valor11),
      });
    } else if (moneda === 5) {
      setids({
        ...ids,
        id1: lbarray[0].id,
        id2: lbarray[1].id,
        id3: lbarray[2].id,
        id4: lbarray[3].id,
        id5: lbarray[4].id,
        id6: lbarray[5].id,
        id7: lbarray[6].id,
        id8: lbarray[7].id,
        id9: lbarray[8].id,
        id10: lbarray[9].id,
        id11: lbarray[10].id,
        value2: lbarray[1].value + parseInt(valores.valor2),
        value3: lbarray[2].value + parseInt(valores.valor3),
        value1: lbarray[0].value + parseInt(valores.valor1),
        value4: lbarray[3].value + parseInt(valores.valor4),
        value5: lbarray[4].value + parseInt(valores.valor5),
        value6: lbarray[5].value + parseInt(valores.valor6),
        value7: lbarray[6].value + parseInt(valores.valor7),
        value8: lbarray[7].value + parseInt(valores.valor8),
        value9: lbarray[8].value + parseInt(valores.valor9),
        value10: lbarray[9].value + parseInt(valores.valor10),
        value11: lbarray[10].value + parseInt(valores.valor11),
      });
    } else if (moneda === 6) {
      setids({
        ...ids,
        id1: fsarray[0].id,
        id2: fsarray[1].id,
        id3: fsarray[2].id,
        id4: fsarray[3].id,
        id5: fsarray[4].id,
        id6: fsarray[5].id,
        id7: fsarray[6].id,
        id8: fsarray[7].id,
        id9: fsarray[8].id,
        id10: fsarray[9].id,
        id11: fsarray[10].id,
        value2: fsarray[1].value + parseInt(valores.valor2),
        value3: fsarray[2].value + parseInt(valores.valor3),
        value1: fsarray[0].value + parseInt(valores.valor1),
        value4: fsarray[3].value + parseInt(valores.valor4),
        value5: fsarray[4].value + parseInt(valores.valor5),
        value6: fsarray[5].value + parseInt(valores.valor6),
        value7: fsarray[6].value + parseInt(valores.valor7),
        value8: fsarray[7].value + parseInt(valores.valor8),
        value9: fsarray[8].value + parseInt(valores.valor9),
        value10: fsarray[9].value + parseInt(valores.valor10),
        value11: fsarray[10].value + parseInt(valores.valor11),
      });
    } else if (moneda === 7) {
      setids({
        ...ids,
        id1: rlsarray[0].id,
        id2: rlsarray[1].id,
        id3: rlsarray[2].id,
        id4: rlsarray[3].id,
        id5: rlsarray[4].id,
        id6: rlsarray[5].id,
        id7: rlsarray[6].id,
        id8: rlsarray[7].id,
        id9: rlsarray[8].id,
        id10: rlsarray[9].id,
        id11: rlsarray[10].id,
      });
    } else if (moneda === 8) {
      setids({
        ...ids,
        id1: ausarray[0].id,
        id2: ausarray[1].id,
        id3: ausarray[2].id,
        id4: ausarray[3].id,
        id5: ausarray[4].id,
        id6: ausarray[5].id,
        id7: ausarray[6].id,
        id8: ausarray[7].id,
        id9: ausarray[8].id,
        id10: ausarray[9].id,
        id11: ausarray[10].id,
        value2: ausarray[1].value + parseInt(valores.valor2),
        value3: ausarray[2].value + parseInt(valores.valor3),
        value1: ausarray[0].value + parseInt(valores.valor1),
        value4: ausarray[3].value + parseInt(valores.valor4),
        value5: ausarray[4].value + parseInt(valores.valor5),
        value6: ausarray[5].value + parseInt(valores.valor6),
        value7: ausarray[6].value + parseInt(valores.valor7),
        value8: ausarray[7].value + parseInt(valores.valor8),
        value9: ausarray[8].value + parseInt(valores.valor9),
        value10: ausarray[9].value + parseInt(valores.valor10),
        value11: ausarray[10].value + parseInt(valores.valor11),
      });
    }
  };

  const [moneda, setmoneda] = useState("");

  const handleChange = (event) => {
    setmoneda(event.target.value);
    actualizar();
  };

  const changevalores = (event) => {
    setvalores({ ...valores, [event.target.name]: event.target.value });
    actualizar();
  };

  const postformulario = () => {
    axios
      .post(api + "TbArqueoUnidades/Editar", [
        {
          lngIdArqueoUnidades: ids.id1,
          intIdMoneda: moneda,
          intIdDenominacion: 1,
          DblCantidad: ids.value1,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id2,
          intIdMoneda: moneda,
          intIdDenominacion: 2,
          DblCantidad: ids.value2,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id3,
          intIdMoneda: moneda,
          intIdDenominacion: 3,
          DblCantidad: ids.value3,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id4,
          intIdMoneda: moneda,
          intIdDenominacion: 4,
          DblCantidad: ids.value4,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id5,
          intIdMoneda: moneda,
          intIdDenominacion: 5,
          DblCantidad: ids.value5,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id6,
          intIdMoneda: moneda,
          intIdDenominacion: 6,
          DblCantidad: ids.value6,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id7,
          intIdMoneda: moneda,
          intIdDenominacion: 7,
          DblCantidad: ids.value7,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id8,
          intIdMoneda: moneda,
          intIdDenominacion: 8,
          DblCantidad: ids.value8,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id9,
          intIdMoneda: moneda,
          intIdDenominacion: 9,
          DblCantidad: ids.value9,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id10,
          intIdMoneda: moneda,
          intIdDenominacion: 10,
          DblCantidad: ids.value10,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
        {
          lngIdArqueoUnidades: ids.id11,
          intIdMoneda: moneda,
          intIdDenominacion: 11,
          DblCantidad: ids.value11,

          bolCongelar: false,
          intIdStatus: 0,
          lngIdRegistro: lngIdRegistro,
        },
      ])
      .then(function (respuesta) {
        console.log(respuesta);
      })
      .then(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .post(
        api +
          "TbArqueoUnidades/Obtenervalores?lngidregistro=" +
          lngIdRegistro +
          ""
      )
      .then(function (response) {
        drt(response.data);
      })
      .then(function (error) {
        console.log(error);
      });
  }, [lngIdRegistro]);

  const drt = (lista) => {
    lista.forEach((element) => {
      if (element.intIdMoneda === 1) {
        if (element.intIdDenominacion === 1) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          usdarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 2) {
        if (element.intIdDenominacion === 1) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          mxnarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 3) {
        if (element.intIdDenominacion === 1) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          euarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 4) {
        if (element.intIdDenominacion === 1) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          dnsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 5) {
        if (element.intIdDenominacion === 1) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          lbarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 6) {
        if (element.intIdDenominacion === 1) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          fsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 7) {
        if (element.intIdDenominacion === 1) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          rlsarray.push({
            id: element.lngIdArqueoUnidadess,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          rlsarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }

      if (element.intIdMoneda === 8) {
        if (element.intIdDenominacion === 1) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 2) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 3) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 4) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 5) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 6) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 7) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 8) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 9) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 10) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }

        if (element.intIdDenominacion === 11) {
          ausarray.push({
            id: element.lngIdArqueoCentenas,
            value: element.dblCantidad,
          });
        }
      }
    });
  };

  return (
    <div>
      <form onSubmit={postformulario}>
        <div className="card">
          <div className="card-header row">
            <div className="col-sm-8">Por Moneda</div>
            <div className="col-sm-4">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Moneda</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={moneda}
                  onChange={handleChange}
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
            <table className="table table-sm">
              <thead>
                <tr>
                  <th> Valor </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <input
                      name="valor1"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor2"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor3"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor4"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor5"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor6"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor7"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor8"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor9"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor10"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      name="valor11"
                      onChange={changevalores}
                      className="form-control form-control-sm"
                    ></input>
                  </th>
                </tr>
              </tbody>
            </table>
            <Button variant="contained" type="submit" color="secondary">
              Actualizar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Arqueoxlistaunidades;
