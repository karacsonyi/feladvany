import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import First from './riddles/First';
import Second from './riddles/Second';
import Third from './riddles/Third';
import Fourth from './riddles/Fourth';
import Fifth from './riddles/Fifth';
import { first, second, third, fourth, fifth } from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100%' }}>
        <Route exact path="/" component={Home}/>
        <Route exact path={`/${first}`} component={First}/>
        <Route exact path={`/${second}`} component={Second}/>
        <Route exact path={`/${third}`} component={Third}/>
        <Route exact path={`/${fourth}`} component={Fourth}/>
        <Route exact path={`/${fifth}`} component={Fifth}/>
      </div>
    );
  }
}

export default App;
