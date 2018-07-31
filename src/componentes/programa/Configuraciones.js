import React, { Component } from "react";
import PropTypes from "prop-types";

class configs extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <p>COMPONENTE CONFIGS {this.props.tema}</p>
      </div>
    );
  }
}

configs.propTypes = {
  tema: PropTypes.string
};

export default configs;
