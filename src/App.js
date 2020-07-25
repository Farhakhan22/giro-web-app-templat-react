import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';


class App extends Component {
  constructor(){
    super();
  }
  render(){
    return(
     <Dashboard/>
    )
  }
}
export default App;
