import './CandidateSubscriptionDone.scss';
import { Link, useNavigate } from 'react-router-dom';

function CandidateSubscriptionDone() {

    const navigate = useNavigate();

    const handleClick = () => {
        
        navigate("/candidat/login");
    };

    return(
        <div className="CandidateSubscriptionDone">
            <span className="CandidateSubscriptionDone-x" onClick={handleClick}>x</span>
            
            <h1 className="CandidateSubscriptionDone-title">Bienvenue chez O'boulot !</h1>

            <p className="CandidateSubscriptionDone-p">Vous etes maintenant inscrit chez O'boulot. Commencez dès maintenant votre recherche d'emploi !</p>

            <div className="CandidateSubscriptionDone-buttons">
                <Link to='/candidat/login'className="CandidateSubscriptionDone-button"><div  >Se connecter</div></Link>
                <Link to='/candidat/joblist'className="CandidateSubscriptionDone-button"><div  >Voir les offres</div></Link>
            </div>
        </div>
    );
}

export default CandidateSubscriptionDone;