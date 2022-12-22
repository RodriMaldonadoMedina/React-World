import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/paisExtendido.css";

const PaisExtendido = () => {
    let { nombrePais } = useParams();
    const [ pais, setPais ] = useState({});

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

    const getData = () => {
        let nativeName = Object.values(pais.name?.nativeName);
        console.log(nativeName)
        return nativeName[0].official;
    }

    let name = getData();

    return (
            <div>
                <Link to="/" className="btn btn-primary my-4">Back</Link>
                <div className="d-flex">
                    <div className="flag-container">
                        <img src={pais.flags?.png}/>
                    </div>
                    <div >
                        <h2>{pais.name?.official}</h2>
                        <div>
                            <p className="">Native Name: {name}</p>
                            {/* <p className="">Population: {pais.population}</p>
                            <p className="">Region: {pais.region}</p>
                            <p className="">Sub Region: {pais.subregion}</p>
                            <p className="">Capital: {}</p>
                            <p className="">Top Level Domain: {}</p>
                            <p className="">Currencies: {}</p>
                            <p className="">Languages: {}</p> */}
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default PaisExtendido;