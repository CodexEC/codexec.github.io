import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

import Clock from './Clock.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'August 25, 2019',
      newDeadline: '',
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (<div className="App">
      <h1>
        Countdown Clock</h1>
      <div id="Presentable Info">
        <div className="Countdown-desc" id = "CD">
          Countdown to {this.state.deadline}
        </div>
        <Clock
        deadline={this.state.deadline} />
        <Form inline id = "User-Input">
          <FormControl placeholder=" Enter New Date" onChange =  {event => this.setState({newDeadline: event.target.value})}/>
          <Button id = "Btn" onClick  = { () => this.changeDeadline() }>
            Change Date
          </Button>
        </Form>
        <p> Sample Date: January 01, 2029 </p>
      </div>
    </div>)
  }
}

export default App;
