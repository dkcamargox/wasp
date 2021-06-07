import React, { Component } from 'react';

import Routes from './routes';
import './global.css';
import Header from './Components/Header/index.jsx';

class App extends Component {
  render() {
    
    return (
        <>
          <Header />
          <Routes />
        </>
    );
  }
}

export default App;
