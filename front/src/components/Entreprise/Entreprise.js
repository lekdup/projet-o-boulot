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
                <Link to="/entreprise/ajout-publication"><button>Créer une offre</button></Link>
                <Link to="/entreprise/inscription"><button>Créer mon espace entreprise</button></Link>
            </div>
        </div>       
    )
}

export default Entreprise;