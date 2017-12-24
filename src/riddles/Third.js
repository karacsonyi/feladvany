import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Row } from 'react-flexbox-grid';
import { fourth } from '../routes';
import Riddle from '../Riddle';

class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSnackbarOpened: false,
      word: '',
    };
  }

  checkSolution() {
    const { word } = this.state;
    if (word.toLowerCase().trim() === 'egyszerű') {
      this.props.history.push(`/${fourth}`);
    } else {
      this.setState({ ...this.state, isSnackbarOpened: true });
    }
  }

  render() {
    return (
      <Riddle title="Nem nehéz" isSnackbarOpened={this.state.isSnackbarOpened} color="#f39c12">
        <Row center="xs">
          Ha átnézel rajta, megoldásra lelsz.
        </Row>
        <Row center="xs">
          <img alt="ce" src="assets/3rd.png" style={{ height: '200px' }} />
        </Row>
        <Row center="xs">
          <TextField hintText="Írd be a szót" onChange={(event, value) => this.setState({ ...this.state, word: value, isSnackbarOpened: false })} />
        </Row>
        <Row center="xs">
          <RaisedButton primary={true} label="Ellenőrzés" onClick={this.checkSolution.bind(this)} />
        </Row>
      </Riddle>
    );
  }
}

export default withRouter(Third);