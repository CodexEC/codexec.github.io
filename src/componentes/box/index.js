// Copyright 2004-present Facebook. All Rights Reserved.

import React from "react";
import PropTypes from "prop-types";

export default class CheckboxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};

    // bind manually because React class components don't auto-bind
    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <div>
        <input
          checked={this.state.isChecked}
          onChange={this.onChange}
          type="checkbox"
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </div>
    );
  }
}
CheckboxWithLabel.propTypes = {
  labelOn: PropTypes.string,
  labelOff: PropTypes.string

};
