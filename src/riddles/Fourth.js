import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { Row } from 'react-flexbox-grid';
import { fifth } from '../routes';
import Riddle from '../Riddle';

class Fourth extends Component {
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

  checkSolution() {
    const { pickedYear, pickedMonth, pickedDay } = this.state;
    if (pickedYear === 2018 && pickedMonth === 1 && pickedDay === 26) {
      this.props.history.push(`/${fifth}`);
    } else {
      this.setState({ ...this.state, isSnackbarOpened: true });
    }
  }

  render() {
    return (
      <Riddle title="Finomság" isSnackbarOpened={this.state.isSnackbarOpened} color="#9b59b6">
        <Row center="xs">
          Nagykanállal vagy ujjal éve,
          <br/>
          Ez itt Máténk kedvenc étke.
        </Row>
        <br/>
        <Row center="xs">
          Vizsgáljátok kívül belül,
          <br/>
          Ez segít majd tovább nekünk.
        </Row>
        <Row center="xs">
          <DatePicker hintText="Írd be a szükséges dátumot" onChange={(nil, date) => this.setDate(date)} cancelLabel="Mégse" />
        </Row>
        <Row center="xs">
          <RaisedButton primary={true} label="Ellenőrzés" onClick={this.checkSolution.bind(this)} />
        </Row>
      </Riddle>
    );
  }
}

export default withRouter(Fourth);