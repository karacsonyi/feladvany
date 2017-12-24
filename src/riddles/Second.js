import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Row } from 'react-flexbox-grid';
import Riddle from '../Riddle';
import { third as thirdRoute } from '../routes';
import './Second.css';

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSnackbarOpened: false,
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
    };
  }

  checkSolution() {
    const { first, second, third, fourth } = this.state;
    if (first === 1 && second === 5 && third === 8 && fourth === 8) {
      this.props.history.push(`/${thirdRoute}`);
    } else {
      this.setState({ ...this.state, isSnackbarOpened: true });
    }
  }

  render() {
    const selectField = (which) => (
      <SelectField
        className="number-select"
        value={this.state[which]}
        onChange={(event, index, value) => this.setState({ ...this.state, [which]: value, isSnackbarOpened: false })}
      >
        <MenuItem value={0} primaryText="0"/>
        <MenuItem value={1} primaryText="1"/>
        <MenuItem value={2} primaryText="2"/>
        <MenuItem value={3} primaryText="3"/>
        <MenuItem value={4} primaryText="4"/>
        <MenuItem value={5} primaryText="5"/>
        <MenuItem value={6} primaryText="6"/>
        <MenuItem value={7} primaryText="7"/>
        <MenuItem value={8} primaryText="8"/>
        <MenuItem value={9} primaryText="9"/>
      </SelectField>
    );

    return (
      <Riddle title="A nélkülözhetetlen" isSnackbarOpened={this.state.isSnackbarOpened} color="#1abc9c">
        <Row center="xs">
          Egy doboz, mely nélkül ezt olvasni nem tudnád,
          <br/>
          Egy doboz, mely összeköt ha távol volnál
        </Row>
        <br/>
        <Row center="xs">
          Négy betű, amit e doboz sugároz,
          <br/>
          Négy helyes számot adj, hogy tovább lapozz!
        </Row>
        <Row center="xs">
          <img alt="ce" src="assets/ce.png" style={{ height: '20px', marginTop: '14px', marginRight: '10px' }} />
          { selectField('first') }
          { selectField('second') }
          { selectField('third') }
          { selectField('fourth') }
        </Row>
        <Row center="xs">
          <RaisedButton primary={true} label="Ellenőrzés" onClick={this.checkSolution.bind(this)} />
        </Row>
      </Riddle>
    );
  }
}

export default withRouter(Second);