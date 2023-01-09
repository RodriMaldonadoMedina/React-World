import React from "react";
import { Link } from "react-router-dom";
import "../styles/pais.css";

//Componente que me muestra mediante una card, el pais
const Pais = ({pais}) => {
    let nombrePais = pais.name.common;
    return (
        <div className="card mb-4">
            <img src={pais.flags.png} className="card-img-top flag" alt="Bandera"/>
            <div className="card-body">
                <h5 className="card-title mt-2">{pais.name?.official}</h5>
                <p className="card-text mt-3 mb-1">{`Population: ${pais.population}`}</p>
                <p className="card-text my-1">{`Region: ${pais.region}`}</p>
                <p className="card-text my-1">{`Capital: ${pais.capital}`}</p>
            </div>
            <div className="card-footer text-center">
                <Link to={`/info/${nombrePais}`} className="btn btn-primary my-link">Info</Link>
            </div>
        </div>
    );
}

export default Pais;