import Upload from '../Upload/index.jsx';
import { FiHelpCircle, FiPlusCircle, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles.css'
export default class UploadArchiveMenu extends Component {
    
    handleUpload = files => {
        return
    };

    handleAddContact = event => {

    };
    
    render() {
        return (
            <div className="sub-menu">
                <h2>
                    1 - Suba un archivo csv con los telefonos: 
                    <Link to="/csv">
                            <FiHelpCircle size={18}/>
                    </Link>
                </h2>
                <Upload placeHolder="Click acá para cargar el archivo..." onUpload={this.handleUpload} />
                <div className="list-box">
                    <ul>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                        <li className="client-box"><div className="client-info client-name">Pelé</div><div className="client-info client-telephone">+559123456789</div></li>
                    </ul>
                    <button id="addContact" onClick={this.handleAddContact}>
                        <FiPlusCircle size={24}/>
                    </button>
                    <form className="client-box">
                        <input type="text" className="client-info client-name" />
                        <input type="text" className="client-info client-telephone" />
                    </form>
                    <div className="formButtonWrap">
                        <button id="revokeAddContact" onClick={this.ha}>
                            <FiTrash2 size={24}/>
                        </button>
                        <button id="confirmAddContact" onClick={this.ha}>
                            <FiCheckCircle size={24}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
