import React, { Component } from 'react'
import { FiLoader, FiCheckCircle } from "react-icons/fi";

import './styles.css'
export default class LogMenu extends Component {

    render() {
        const { sending, clientsError, done, clientsExito } = this.props;
        return (
            <div className="sub-menu">
                <h2>
                    3 - Log de Envios
                    {done?<>
                        <FiCheckCircle color="1eb53a" size={20} style={{justifySelf: 'flex-end'}}/>
                    </>:<></>}
    
                </h2>

                <div className="log-list-box">
                    <h3>Errores:</h3>
                    <ul>
                        {
                            clientsError.map((client, index) => (
                                    <li key={index} className="log-client-box">
                                        <div className="log-client-info log-client-name">
                                            {client.name}
                                        </div>
                                        <div className="log-client-info log-client-telephone">
                                            {client.number}
                                        </div>
                                        <div className="log-client-info log-client-status error">ERROR</div>
                                    </li>
                            ))
                        }
                    </ul>
                    {sending?<>
                        <FiLoader className="icon-spin" size={24} style={{marginTop: 16}}/>
                    </>:<></>}
                </div>
                <div className="log-list-box">
                    <h3>Éxitos:</h3>
                    <ul>
                        {
                            clientsExito.map((client, index) => (
                                    <li key={index} className="log-client-box">
                                        <div className="log-client-info log-client-name">
                                            {client.name}
                                        </div>
                                        <div className="log-client-info log-client-telephone">
                                            {client.number}
                                        </div>
                                        <div className="log-client-info log-client-status ok">OK!</div>
                                    </li>
                            ))
                        }
                    </ul>
                    {sending?<>
                        <FiLoader className="icon-spin" size={24} style={{marginTop: 16}}/>
                    </>:<></>}
                </div>
            </div>
        );
    };
}
