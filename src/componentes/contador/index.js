import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ count: prevState.count + 1 })),
      100
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <p className="hora">Tiempo es: {this.state.count}</p>
      </div>
    );
  }
}

export default Contador;
