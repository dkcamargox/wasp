// import Header from "../../Components/Header/index.jsx";
import UploadArchiveMenu from '../../Components/UploadArchiveMenu/index.jsx';
import MessageMenu from '../../Components/MessageMenu/index.jsx';
import LogMenu from '../../Components/LogMenu/index.jsx';

import React, { Component } from 'react'

import './styles.css';

export default class Home extends Component {
    state = {
        sending: false,
        done: false,
    };

    constructor(props) {
        super(props);
        this.UploadArchiveMenu = React.createRef();
        this.MessageMenu = React.createRef();
    }

    getChildsState = () => {
        return { 
            states: { 
                uploadArchiveMenuState: this.UploadArchiveMenu.current.state, 
                messageMenuState: this.MessageMenu.current.state
            },
            components: {
                uploadArchiveMenu: this.UploadArchiveMenu.current, 
                messageMenu: this.MessageMenu.current
            }
        }
    };

    handleSend = event => {
        const { messageMenuState, uploadArchiveMenuState } = this.getChildsState().states;
        const { messageMenu, uploadArchiveMenu } = this.getChildsState().components;
        if(uploadArchiveMenuState.clients.length === 0) {
            uploadArchiveMenu.setState({emptyValues: true});
            return
        }

        if(messageMenuState.message === '') {
            messageMenu.setState({emptyValues: true});
            return
        }

        
        uploadArchiveMenu.setState({emptyValues: false});    
        messageMenu.setState({emptyValues: false});
        this.setState({ sending: !this.state.sending});
        this.setState({ done: false});
        
        /**
         * connect via ipc and run selenium one by one
         * change logMenu state create props for errors and done
         * logMenu prop running and done
         * finally change done
         * this.setState({ sending: false});
         * this.setState({ done: true});
         */
    };

    render() {
        const { sending, done } = this.state;
        return(
            <div className="root">
                <main>        
                    <UploadArchiveMenu ref={this.UploadArchiveMenu} sending={sending}/>
                    <MessageMenu ref={this.MessageMenu} sending={sending} onSend={this.handleSend}/>
                    <LogMenu sending={sending} done={done}/>
                </main>
            </div>
        );
    }
}