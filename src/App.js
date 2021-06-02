import React, { Component } from 'react';

import Header from "./Components/Header";
import Upload from './Components/Upload';

import './global.css';

class App extends Component {
  handleUpload = files => {
    return
  };
  render() {
    
    return (
      <div className="root">
        <Header />
        <main>
          
          <div className="sub-menu">
            <h2>1 - Suba un archivo csv con los telefonos:</h2>
            <Upload placeHolder="Click acá para cargar el archivo..." onUpload={this.handleUpload} />
            <div id="csv-specifications">
              <p id="csv-specifications-title">Especificaciones del archivo CSV</p>
              <p>Nombre para contacto, Numero de telefone</p>
              <p>Ejemplo:</p>
              <p>Diego Maradona,+54 1234 123-456</p>
              <p>Pelé,+55 91234-45678</p>
            </div>
          </div>
  
          <div className="sub-menu">
            <h2>2 - Menu de mensagem</h2>
          </div>
  
          <div className="sub-menu">
            <h2>3 - Log de Envios</h2>
          </div>
        
        </main>
      </div>
    );
  }
}

export default App;
