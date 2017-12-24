import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { Row } from 'react-flexbox-grid';
import Riddle from '../Riddle';
import { second } from '../routes';

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSnackbarOpened: false,
      pickedHour: undefined,
      pickedMinute: undefined,
    };
  }

  handleTimeChange(event, date) {
    this.setState({ isSnackbarOpened: false, pickedHour: date.getHours(), pickedMinute: date.getMinutes() });
  }

  checkSolution() {
    const { pickedHour, pickedMinute } = this.state;
    if (pickedHour === 4 && pickedMinute === 0) {
      this.props.history.push(`/${second}`);
    } else {
      this.setState({ ...this.state, isSnackbarOpened: true });
    }
  }

  render() {
    return (
      <Riddle title="Ki korán kel..." isSnackbarOpened={this.state.isSnackbarOpened} color="#2ecc71">
        <Row center="xs">
          <p>
            Mikor korán reggel szól az óra,
            <br/>
            Mama konyhájában elindul a móka.
          </p>
        </Row>
        <Row center="xs">
          <TimePicker
            format="24hr"
            hintText="Adj meg egy lehetséges időt"
            onChange={this.handleTimeChange.bind(this)}
            cancelLabel="Mégse"
          />
        </Row>
        <Row center="xs">
          <RaisedButton primary={true} label="Ellenőrzés" onClick={this.checkSolution.bind(this)} />
        </Row>
      </Riddle>
    );
  }
}

export default withRouter(First);