import React, { Component } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import csv from '../../assets/csv.png'
import './styless.css'

export default class CsvInfo extends Component {
    render() {
        return (
                <div className="csv-root">
                    <main>
                        <div>
                            <h2>
                                <Link to="/" >
                                    <FiArrowLeft size={40} />
                                </Link>
                                CSV
                            </h2>
                            <p>Por favor siga el modelo indicado para el .csv:</p>
                            <img id="csv" src={csv} alt="CSV exaple" />
                            <strong>No pongas espacios entre los numeros</strong>
                            <strong>Respete el nombre de los titulos</strong>
                            <strong>No pongas ningun espacio despues de la coma</strong>

                        </div>
                    </main>
                </div>
        )
    }
}
