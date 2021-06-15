import React, { Component } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";


import './styles.css'

const { ipcRenderer: ipc } = window.require('electron'); 

export default class Settings extends Component {
    state = {
        timeOut: 5000,
    };

    onSet = event => {
        console.log(this.state.timeOut)
        ipc.send('set-time-out', this.state.timeOut);
    };

    componentDidMount() {
        ipc.on('get-time-out-response', (event, response) => {
            this.setState({timeOut: response.timeOut});
        });
        ipc.send('get-time-out');
    };

    componentWillUnmount() {
        ipc.removeAllListeners();
    };

    render() {
        return (
                <div className="settings-root">
                    <main>
                        <div>
                            <h2>
                                <Link to="/" >
                                    <FiArrowLeft size={40} />
                                </Link>
                                Settings
                            </h2>
                            <form >
                                <p>Elegí un valor de espera:</p>
                                <input step="500" value={this.state.timeOut} type="number" name="timeOut" id="time-out" onChange={e => this.setState({timeOut: e.target.value})}/>
                            </form>
                            <button onClick={this.onSet}>Cambiar</button>
                        </div>
                    </main>
                </div>
        )
    }
}
