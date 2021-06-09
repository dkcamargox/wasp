import Upload from '../Upload/index.jsx';
import { FiHelpCircle, FiPlusCircle, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import React, { Component,FormEvent } from 'react'
import { Link } from 'react-router-dom';
import csv from 'csvtojson';

import './styles.css'
export default class UploadArchiveMenu extends Component {
    state = { 
        clients: [],
        addSingle: false,
        inputName: '',
        inputNumber: '',
    };

    handleUpload = ([file]) => {
        let reader = new FileReader();
        reader.onload = e => csv().fromString(e.target.result).then(jsonArray => this.setState({clients: jsonArray}));
        reader.readAsText(file);
    };  

    handleAddContact = event => {
        console.log(this.state);
        this.setState({addSingle: true});
    };
    
    handleRevokeAddContact = event => {
        console.log(this.state);

        this.setState({addSingle: false});
    };
    
    handleConfirmAddContact = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            clients: this.state.clients.concat({name: this.state.inputName, number: this.state.inputNumber})
        });
        this.setState({
            inputName: '',
            inputNumber: '',
            addSingle: false
        });
    };

    componentDidMount() {        
        this.setState({
            clients: [],
            addSingle: false,
        });
    };
    
    render() {
        const { clients, addSingle } = this.state
        return (
            <div className="sub-menu">
                <h2>
                    1 - Suba un archivo csv con los telefonos: 
                    <Link to="/csv">
                            <FiHelpCircle size={18}/>
                    </Link>
                </h2>
                <Upload placeHolder="Click acá para cargar el archivo..." onUpload={this.handleUpload} />
                <div className="upload-list-box">
                    <ul>
                        {
                            clients.map((client, index) => (
                                    <li key={index} className="upload-client-box">
                                        <div className="upload-client-info upload-client-name">
                                            {client.name}
                                        </div>
                                        <div className="upload-client-info upload-client-telephone">
                                            {client.number}
                                        </div>
                                    </li>
                            ))
                        }
                    </ul>
                    {addSingle ? (
                        <>
                            <form id="add-client-form" className="upload-client-box">
                                <input value={this.state.inputName} onChange={e => this.setState({inputName: e.target.value})} type="text" className="upload-client-info upload-client-name" />
                                <input value={this.state.inputNumber} onChange={e => this.setState({inputNumber: e.target.value})} type="text" className="upload-client-info client-telephone" />
                            </form>
                            <div className="upload-btn-wrap">
                                <button id="upload-btn-revoke" onClick={this.handleRevokeAddContact}>
                                    <FiTrash2 size={24}/>
                                </button>
                                <button  onClick={this.handleConfirmAddContact} id="upload-btn-confirm">
                                    <FiCheckCircle size={24}/>
                                </button>
                            </div>
                        </>
                    ):(
                        <button id="upload-add-contact" onClick={this.handleAddContact}>
                            <FiPlusCircle size={24}/>
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
