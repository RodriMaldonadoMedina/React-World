import React from "react";
import { Link, useParams } from "react-router-dom";

const PaisExtendido = () => {
    let { pais } = useParams();
    console.log(pais)
    return ( 
        <div>
            <Link to="/">Back</Link>
            <div>
                
            </div>
        </div>
     );
}

export default PaisExtendido;