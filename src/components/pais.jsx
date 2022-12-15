import "../styles/pais.css"

const Pais = ({pais}) => {
    return (
        <div className="card shadow mb-3">
            <img src={pais.flags.png} className="card-img-top flag" alt="Bandera"/>
            <div className="card-body">
                <h5 className="card-title mt-2">{pais.name?.official}</h5>
                <p className="card-text mt-3 mb-1">{`Population: ${pais.population}`}</p>
                <p className="card-text my-1">{`Region: ${pais.region}`}</p>
                <p className="card-text my-1">{`Capital: ${pais.capital}`}</p>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary">Info</button>
            </div>
        </div>
    );
}

export default Pais;