import React, { Component } from "react";

import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0
    };
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const secs = Math.floor((time / 1000) % 60);
    const mins = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({ days: days, hours: hours, mins: mins, secs: secs });
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leadingzero(num) {
    return num < 10 ? "0" + num : num;
  }

  render() {
    return (
      <div>
        <div className="Countdown-days">
          {this.leadingzero(this.state.days)}
          &nbsp; Days
        </div>
        <div className="Countdown-hours">
          {this.leadingzero(this.state.hours)}
          &nbsp; Hours
        </div>
        {/* <div className="Countdown-mins">
        {this.leadingzero(this.state.mins)}
        &nbsp; Minutes
        </div> */}
        <div className="Countdown-secs">
          {this.leadingzero(this.state.secs)}
          &nbsp; Seconds
        </div>
      </div>
    );
  }
}

export default Clock;
