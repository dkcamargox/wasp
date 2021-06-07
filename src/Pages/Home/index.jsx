// import Header from "../../Components/Header/index.jsx";
import UploadArchiveMenu from '../../Components/UploadArchiveMenu/index.jsx';
import MessageMenu from '../../Components/MessageMenu/index.jsx';
import LogMenu from '../../Components/LogMenu/index.jsx';

import React, { Component } from 'react'

import './styles.css';

export default class Home extends Component {
    render() {
        return(
            <div className="root">
                <main>        
                    <UploadArchiveMenu />
                    <MessageMenu />
                    <LogMenu />
                </main>
            </div>
        );
    }
}