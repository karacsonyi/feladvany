import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default function BadSolution({ open }) {
  const message = (
    <div style={{ color: '#e74c3c' }}>Rossz válasz!</div>
  )
  return (
    <Snackbar
      open={open}
      message={message}
      autoHideDuration={4000}
    />
  );
}