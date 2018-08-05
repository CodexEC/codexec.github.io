import axios from "axios";

export class ClienteServicio {
  traerClientes(_this) {
    axios
      .get("seed/cat_clientes.json")
      .then(res => res.data.cat_clientes)
      .then(data => {
        console.log("<< Datos Cargados >>");
        _this.setState({ datosClientes: data });
        return data;
      });
  }
}
