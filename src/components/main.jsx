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

    const handleInput = (event) => {
        if (event.target.value.trim().length) {
            setSearch(event.target.value.trim());
            console.log(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        if (event.target.value.length === 0){
            paises();
        }
        else{
            event.preventDefault();
            paisesFiltrados(search);
            console.log(search);
        }
    }

    return (
        <div className="container mx-3">
            <form onSubmit={handleSubmit} className="searcher d-flex justify-content-between ">
                <div className="input-group mt-4">
                    <button type="submit" className="btn btn-primary"><BsSearch /></button>
                    <input type="text" name="search" onChange={handleInput} placeholder="Search for a country..." className="form-control" />
                </div>
            </form>
            {/* Muestro los paises donde pueden o no, estar filtrados por nombre */}
            { listaPaisesFiltrados && listaPaisesFiltrados.length ? (
                    <div className = "mt-5">
                        <div className = "row">
                            {listaPaisesFiltrados.map((pais,index)=>{
                                return(
                                    <Pais pais={pais} key={index} />
                                )
                            })}
                        </div>
                    </div >
                ): (
                    <div className = "mt-5">
                        <div className = "row">
                            {listaPaises.map((pais,index)=>{
                                return(
                                    <Pais pais={pais} key={index} />
                                )
                            })}
                        </div>
                    </div >
                ) 
            }
        </div >
    );
}

export default Main;