import React, { Component } from 'react'
import { FiLoader, FiCheckCircle } from "react-icons/fi";

import './styles.css'
export default class LogMenu extends Component {

    render() {
        return (
            <div className="sub-menu">
                <h2>3 - Log de Envios</h2>

                <div className="log-list-box">
                    <h3>Error!</h3>
                    <ul>
                        <li className="log-client-box"><div className="log-client-info log-client-name">Pelé</div><div className="log-client-info log-client-telephone">+559123456789</div><div className="log-client-info log-client-status error">ERROR</div></li>
                        <li className="log-client-box"><div className="log-client-info log-client-name">Pelé</div><div className="log-client-info log-client-telephone">+559123456789</div><div className="log-client-info log-client-status error">ERROR</div></li>
                    </ul>
                    <FiLoader className="icon-spin" size={24} style={{marginTop: 16}}/>
                    <FiCheckCircle color="1eb53a" size={24} style={{marginTop: 16}}/>
                </div>
                <div className="log-list-box">
                    <h3>Éxito!</h3>
                    <ul>
                        <li className="log-client-box"><div className="log-client-info log-client-name">Pelé</div><div className="log-client-info log-client-telephone">+559123456789</div><div className="log-client-info log-client-status ok">OK</div></li>
                        <li className="log-client-box"><div className="log-client-info log-client-name">Pelé</div><div className="log-client-info log-client-telephone">+559123456789</div><div className="log-client-info log-client-status ok">OK</div></li>
                    </ul>
                    <FiLoader className="icon-spin" size={24} style={{marginTop: 16}}/>
                    <FiCheckCircle color="1eb53a" size={24} style={{marginTop: 16}}/>
                </div>
            </div>
        );
    };
}
