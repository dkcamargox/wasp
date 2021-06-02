import React, { Component } from 'react'

import './styles.css';
import waspLogo from '../../assets/wasp_min_yellow256.svg'

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>Wasp</h1>
                <img src={waspLogo} alt="A wasp, the logo" />
            </header>
        )
    }
}

export default Header
