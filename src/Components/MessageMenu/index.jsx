import React, { Component } from 'react'
import Upload from '../Upload/index.jsx'
import { FiArrowRight, FiXOctagon } from 'react-icons/fi';

import './styles.css'
export default class MessageMenu extends Component {
    state = {
        message: '',
        emptyValues: true
    }
    render() {
        const { onSend, sending, onDropImage } = this.props;
        const { emptyValues } = this.state;
        return (
            <div className="sub-menu">
                <h2>2 - Menu de mensagem</h2>
                {emptyValues ? <>
                    <div className="alert" role="alert">
                        Los valores no pueden ser vacios
                    </div>
                </>:<></>}
                <form>
                    <textarea name="message" id="message" onChange={e => this.setState({message: e.target.value})} ></textarea>
                </form>
                <Upload accept="image/*" placeHolder="Click acá para cargar una foto..." onUpload={onDropImage} />
                <div className="button-wrap">
                    <button onClick={onSend} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '128px'}}>
                        { !sending ? <>
                            Enviar
                            <FiArrowRight color="FFF" size={22}/>
                        </> : <>
                            Abortar
                            <FiXOctagon color="FFF" size={22}/>
                        </>}     
                    </button>
                </div>
                
            </div>
        );
    };
}