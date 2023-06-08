
import './Entreprise.scss';

function Entreprise() {
    return(
        <div className="wrapper-entreprise">
            <h2 className="wrapper-entreprise-title">Je recrute !</h2>
            <div className="wrapper-entreprise-buttons">
                <button className='wrapper-entreprise-button'>Créer une offre</button>
                <button className='wrapper-entreprise-button'>Je souhaite en savoir +</button>
            </div>
        </div>       
    )
}

export default Entreprise;