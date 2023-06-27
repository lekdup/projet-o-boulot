import { Link } from 'react-router-dom';
import recruit from '../../assets/recruit.svg';
import './Entreprise.scss';

function Entreprise() {
    return(
        <div className="wrapper-entreprise">
            <h2 className="wrapper-entreprise-title">Je recrute !</h2>
            <div className="wrapper-entreprise-logo">
                <img className="wrapper-entreprise-apparition" src={recruit} alt="illustration of a man building blocks on a board" />
            </div>
            <div className="wrapper-entreprise-buttons">
                <button className='wrapper-entreprise-button'><Link to="/entreprise/ajout-publication">Créer une offre</Link></button>
                <button className='wrapper-entreprise-button'><Link to="/entreprise/inscription">Créer mon espace entreprise</Link></button>
            </div>
        </div>       
    )
}

export default Entreprise;