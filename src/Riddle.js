import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import BadSolution from './BadSolution';

export default function Riddle({ title, children, isSnackbarOpened, color }) {
  return (
    <Grid style={{backgroundColor: color, height: '100%'}}>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <h1>{title}</h1>
          </Row>
          {children}
        </Col>
      </Row>
      <BadSolution open={isSnackbarOpened} />
    </Grid>
  );
}