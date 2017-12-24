import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from 'react-flexbox-grid';
import Riddle from '../Riddle';

class Fifth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSnackbarOpened: false,
      pickedDay: undefined,
      pickedMonth: undefined,
      pickedYear: undefined,
    };
  }

  setDate(date) {
    this.setState({
      ...this.state,
      pickedYear: date.getFullYear(),
      pickedMonth: date.getMonth() + 1,
      pickedDay: date.getDate(),
      isSnackbarOpened: false,
    });
  }

  render() {
    return (
      <Riddle title="Siker!" isSnackbarOpened={this.state.isSnackbarOpened} color="#e74c3c">
        <Row center="xs">
          Gratulálok! A rejtvényt teljesítettétek. Az ajándékotokat a mikró alól tudjátok elővenni.
        </Row>
        <br/>
        <Row center="xs">
          Boldog karácsonyt!
        </Row>
      </Riddle>
    );
  }
}

export default withRouter(Fifth);