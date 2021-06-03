import Upload from '../Upload';
import { FiHelpCircle } from 'react-icons/fi';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles.css'
export default class UploadArchiveMenu extends Component {
    
    handleUpload = files => {
        return
    };
    
    render() {
        return (
            <div className="sub-menu">
                <p>
                    1 - Suba un archivo csv con los telefonos: 
                    <Link to="/">
                            <FiHelpCircle size={18}/>
                    </Link>
                </p>
                <Upload placeHolder="Click acá para cargar el archivo..." onUpload={this.handleUpload} />
            </div>
        )
    }
}
