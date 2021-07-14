import React, { Component } from 'react'
import Upload from '../Upload/index.jsx'
import { FiArrowRight, FiXOctagon, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css'
export default class MessageMenu extends Component {
    state = {
        message: '',
        emptyValues: false,
        image: null
    }

    handleDropImage = ([image]) => {
        this.setState({image});
    };

    render() {
        const { onSend, sending } = this.props;
        const { emptyValues, image } = this.state;
        return (
            <div className="sub-menu">
                <h2>
                2 - Menu de mensaje: 
                    <Link to="/settings">
                            <FiSettings size={18}/>
                    </Link>
                </h2>
                {emptyValues ? <>
                    <div className="alert alert-red" role="alert">
                        El mensaje no puede ser vacio
                    </div>
                </>:<></>}
                <form>
                    <textarea name="message" id="message" onChange={e => this.setState({message: e.target.value})} ></textarea>
                </form>
                <Upload accept="image/*,video/mp4,video/3gpp,video/quicktime" placeHolder="Click acá para cargar una foto..." onUpload={this.handleDropImage} />
                {image !== null?<>
                        <div className="alert alert-green" role="alert">
                            Imagen adjuntada: "{image.name}"
                        </div>
                    </>:<></>}
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