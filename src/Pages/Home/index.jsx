// import Header from "../../Components/Header/index.jsx";
import UploadArchiveMenu from '../../Components/UploadArchiveMenu/index.jsx';
import MessageMenu from '../../Components/MessageMenu/index.jsx';
import LogMenu from '../../Components/LogMenu/index.jsx';

import React, { Component } from 'react'

import './styles.css';

const { ipcRenderer: ipc } = window.require('electron');

export default class Home extends Component {
    state = {
        sending: false,
        done: false,
        processedClients: 0,
        clientsError: [],
        clientsExito: []
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

    processSendMessages = (clients, message, image) => {        
        if (this.state.sending === true) {
            ipc.send('abort');
        } else {
            ipc.send('create-browser');
        }

        /**
         * connect via ipc and run selenium one by one
         * change logMenu state create props for errors and done
         * logMenu prop running and done
         * finally change done
         * this.setState({ sending: false});
         * this.setState({ done: true});
         */
    };

    handleSend = async event => {
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
        
        this.processSendMessages(uploadArchiveMenuState.clients, messageMenuState.message, messageMenuState.image);
    };

    componentDidMount() {
        ipc.on('create-browser-response', (event, response) => {
            const { status, error } = response;
            if (status === 'error') {
                this.setState({sending: false});
                alert(`Error criando la pagina del navegador para el Selenium\nError: ${error}`);
            }
            const { messageMenuState, uploadArchiveMenuState } = this.getChildsState().states;
            ipc.send('send-messages', uploadArchiveMenuState.clients, messageMenuState.message, messageMenuState.image);

        });

        ipc.on('send-messages-response', (event, response) => {
            
            const { uploadArchiveMenuState } = this.getChildsState().states;
            const { client, status } = response;
            
            this.setState({processedClients: this.state.processedClients + 1});

            if (status === 'error') {
                this.setState({clientsError: this.state.clientsError.concat(client)});
            } else {
                this.setState({clientsExito: this.state.clientsExito.concat(client)});
            }

            if(this.state.processedClients === uploadArchiveMenuState.clients.length) {
                this.setState({ sending: false});
                this.setState({ done: true});
            }
        });
    };

    render() {
        const { sending, done, clientsError, clientsExito } = this.state;
        return(
            <div className="root">
                <main>        
                    <UploadArchiveMenu ref={this.UploadArchiveMenu} sending={sending}/>
                    <MessageMenu ref={this.MessageMenu} sending={sending} onSend={this.handleSend}/>
                    <LogMenu clientsError={clientsError} clientsExito={clientsExito} sending={sending} done={done}/>
                </main>
            </div>
        );
    }
}