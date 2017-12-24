import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { first } from './routes';

export default function Home() {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <h1>Karácsonyi rejtvény</h1>
          </Row>
          <Row center="xs">
            Üdvözlet! Mielőtt még kézhez kaphatnátok az ajándékaitokat, előtte egy kis rejtvényt kell megoldanotok.
            A továbblépéshez kattintsatok a gombra.
          </Row>
          <br/>
          <Row center="xs">
            <Link to={`/${first}`}>
              <RaisedButton label="Start" primary={true} />
            </Link>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}