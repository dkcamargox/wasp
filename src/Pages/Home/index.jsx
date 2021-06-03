import Header from "../../Components/Header";
import UploadArchiveMenu from '../../Components/UploadArchiveMenu';

import React, { Component } from 'react'

import './styles.css';

export default class Home extends Component {
    render() {
        return(
        <div className="root">
            <Header />
            <main>        
                <UploadArchiveMenu />
        
                <div className="sub-menu">
                    <h2>2 - Menu de mensagem</h2>
                </div>
        
                <div className="sub-menu">
                    <h2>3 - Log de Envios</h2>
                </div>
            </main>
        </div>
        )
    }
}