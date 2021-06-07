import React, { Component } from 'react'
import Upload from '../Upload/index.jsx'
import { FiArrowRight } from 'react-icons/fi';

import './styles.css'
export default class MessageMenu extends Component {

    render() {
        return (
            <div className="sub-menu">
                <h2>2 - Menu de mensagem</h2>
                <form>
                    <textarea name="message" id="message" ></textarea>
                </form>
                <Upload placeHolder="Click acá para cargar una foto..." onUpload={this.handleUpload} />
                <div className="button-wrap">
                    <button type="submit" className="btn btn-primary" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '34%'}}>
                        Enviar
                        <FiArrowRight color="FFF" size={22}/>
                    </button>
                </div>
                
            </div>
        );
    };
}