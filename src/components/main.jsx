import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import "../styles/main.css"
import Pais from "./pais";


const Main = (props) => {
    const [search, setSearch] = useState("");
    const [listaPaises, setListaPaises] = useState([]);
    const [listaPaisesFiltrados, setListaPaisesFiltrados] = useState([]);

    useEffect(() => {
        paises();
    }, [])

    //fetch con todos los paises de la api
    const paises = async () => {
        try {
            const resp = await fetch("https://restcountries.com/v3.1/all");
            const data = await resp.json();
            setListaPaises(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    //hago el fetch con el nombre o parte del nombre del pais que quiero buscar
    const paisesFiltrados = async (name) => {
        try {
            const resp = await fetch("https://restcountries.com/v3.1/name/" + name);
            const data = await resp.json();
            setListaPaisesFiltrados(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    //hago el fetch filtrando por region, puede ser una parte del nombre de la region
    const regionFiltrada = async (region) => {
        try {
            const resp = await fetch("https://restcountries.com/v3.1/region/" + region);
            const data = await resp.json();
            setListaPaisesFiltrados(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleInput = (event) => {
        if (event.target.value.trim().length) {
            setSearch(event.target.value.trim());
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (search.length === 0) {
            paises();
            setListaPaisesFiltrados([]);
        }
        else {
            paisesFiltrados(search);
            setSearch("");
            let input = document.querySelector(".inputSearch");
            input.value = "";
        }
    }

    return (
        <div className="container mx-3">
            <div className="searcherBar">
                <form onSubmit={handleSubmit} className="searcher ">
                    <div className="input-group mt-4">
                        <button type="submit" className="btn btn-primary"><BsSearch /></button>
                        <input type="text" name="search" onChange={handleInput} placeholder="Search for a country..." className="form-control inputSearch" />
                    </div>
                </form>
                <div className="dropdown mt-4">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter by Region
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={()=>regionFiltrada("africa")}>Africa</button></li>
                        <li><button className="dropdown-item" onClick={()=>regionFiltrada("america")}>America</button></li>
                        <li><button className="dropdown-item" onClick={()=>regionFiltrada("asia")}>Asia</button></li>
                        <li><button className="dropdown-item" onClick={()=>regionFiltrada("europe")}>Europe</button></li>
                        <li><button className="dropdown-item" onClick={()=>regionFiltrada("oceania")}>Oceania</button></li>
                    </ul>
                </div>
            </div>
            {/* Muestro los paises filtrados y si no tengo nada en el filtro muestro todos los paises */}
            {listaPaisesFiltrados.length ?
                (
                <div className="row mt-5 mx-2">
                    {listaPaisesFiltrados.map((pais, index) => {
                        return (
                            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                                <Pais pais={pais} />
                            </div>
                        )
                    })}
                </div>
                ) : (
                    <div className="row mt-5 mx-2">
                        {listaPaises.map((pais, index) => {
                            return (
                                <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                                    <Pais pais={pais} />
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div >
    )
}

export default Main;