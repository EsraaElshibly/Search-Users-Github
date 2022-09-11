import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom' ;
import Home from './Components/Home Page/Home';
import GithubCom from './Components/Github Search/GithubCom';
import Drag from './Components/Drag and Drop/Drag and Drop'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path = "/" component = {Home} />
          <Route path = "/drag" component = {Drag} />
          <Route path = "/github" component = {GithubCom} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
