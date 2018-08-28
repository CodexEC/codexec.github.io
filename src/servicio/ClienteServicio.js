import axios from "axios";

export class ClienteServicio {
  traerClientes(_this) {
    axios
      .get("seed/cat_clientes.json")
      .then(res => res.data)
      .then(data => {
        _this.setState({ datosClientes: data });
        return data;
      });
  }
  traerCodigos() {
    return axios.get("seed/cat_codigos.json").then(res => res.data);
  }
}
