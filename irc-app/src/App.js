import React, { Component } from 'react';
import {BrowserRouter as Router ,Route } from 'react-router-dom'


import chat from './component/Chat';
import inndex from './component/Inndex';



class App extends Component {
  render() {
    return (
         <Router>
        <div className="App">
          <Navbar />
          
          <div className="container">
          <Route exact path="/Chat" component={chat} />
          <Route exact path="/Inndex" component={inndex} />
          
          
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

