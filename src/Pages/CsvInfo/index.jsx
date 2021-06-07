import React, { Component } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
export default class CsvInfo extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Link to="/" >
                    <FiArrowLeft size={32} />
                </Link>
                <h1>
                    CSV
                </h1>
            </div>
        )
    }
}
