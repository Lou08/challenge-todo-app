import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import CrearToDo from './pages/CrearToDo'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/todos' component={CrearToDo}/>
      </Switch>
    );
  }
}

export default App;
