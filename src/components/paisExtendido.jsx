import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/paisExtendido.css";

const PaisExtendido = () => {
    let { nombrePais } = useParams();
    const [ pais, setPais ] = useState({});
    const [ language, setLanguage ] = useState([]);

    useEffect(()=>{
        paisInfo(nombrePais);
    },[])

    const paisInfo = async (nombre) => {
        try {
            const resp = await fetch("https://restcountries.com/v3.1/name/" + nombre);
            const data = await resp.json();
            setPais(data[0]);
            setLanguage(Object.values(data[0].languages));
        }
        catch (error) {
            console.log(error);
        }
    }

    console.log(pais);
    return (
        pais ?
            <div className="container-fluid">
                <Link to="/" className="btn btn-primary my-4">Back</Link>
                <div className="d-flex justify-content-evenly mt-5 pais">
                    <div className="flag-container mt-4">
                        <img src={pais.flags?.png} alt="Bandera" className="border border-2 shadow"/>
                    </div>
                    <div className="info-container">
                        <h2 className="mb-3">{nombrePais}</h2>
                        <div>
                            <p className="m-0"><b>Native Name: </b>{pais.name?.common}</p>
                            <p className="m-0"><b>Population: </b>{pais.population}</p>
                            <p className="m-0"><b>Sub Region: </b>{pais.subregion}</p>
                            <p className="m-0"><b>Region: </b>{pais.region}</p>
                            <p className="m-0"><b>Top Level Domain: </b>{pais.tld}</p>
                            <p className="m-0"><b>Languages: </b>{language.join(", ")}</p>
                        </div>
                        <div className="d-flex">
                            <p><b>Border Countries: </b></p>
                            <div>
                                {pais.borders ? 
                                    pais.borders.map((p,i)=>
                                        <div key={i} className="btn btn-outline-secondary mx-1 mt-1">{p}</div>)
                                    :
                                    null
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> : null
     );
}

export default PaisExtendido;