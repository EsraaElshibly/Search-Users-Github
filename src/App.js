import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom' ;
import Nav from './Components/Nav';
import Footer from './Components/footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path = "/" component = {Home} />
          <Route path = "/About" component = {About} />
          <Route path = "/Contact us" component = {Contact} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
