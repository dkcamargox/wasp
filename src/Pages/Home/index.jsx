// import Header from "../../Components/Header/index.jsx";
import UploadArchiveMenu from '../../Components/UploadArchiveMenu/index.jsx';
import MessageMenu from '../../Components/MessageMenu/index.jsx';
import LogMenu from '../../Components/LogMenu/index.jsx';

import React, { Component } from 'react'

import './styles.css';

export default class Home extends Component {
    state = {
        sending: false,
        image: null,
    };

    handleSend = event => {
        /**
         * check if text area is null
         */
        this.setState({ sending: !this.state.sending});
    };

    handleDropImage = ([image]) => {
        return;
    };

    render() {
        const { sending } = this.state;
        return(
            <div className="root">
                <main>        
                    <UploadArchiveMenu sending={sending}/>
                    <MessageMenu sending={sending} onSend={this.handleSend} onDropImage={this.handleDropImage} />
                    <LogMenu />
                </main>
            </div>
        );
    }
}