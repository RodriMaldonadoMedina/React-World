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
        }
        catch (error) {
            console.log(error);
        }
    }

    if (pais.language){
        setLanguage(Object.values(pais.languages));
        console.log(language[0]);
    }    

    return (
        pais ?
            <div>
                <Link to="/" className="btn btn-primary my-4">Back</Link>
                <div className="d-flex">
                    <div className="flag-container">
                        <img src={pais.flags?.png}/>
                    </div>
                    <div >
                        <h2>{nombrePais}</h2>
                        <div>
                            <p className="">Native Name: {pais.name?.common}</p>
                            <p className="">Population: {pais.population}</p>
                            <p className="">Region: {pais.region}</p>
                            <p className="">Sub Region: {pais.subregion}</p>
                            <p className="">Capital: {pais.capital}</p>
                            <p className="">Top Level Domain: {pais.tld}</p>
                            {/* <p className="">Currencies: {pais.currencies}</p> */}
                            {/* <p className="">Languages: {Object.values(pais.languages)[0]}</p> */}
                        </div>
                    </div>
                </div>
            </div> : null
     );
}

export default PaisExtendido;