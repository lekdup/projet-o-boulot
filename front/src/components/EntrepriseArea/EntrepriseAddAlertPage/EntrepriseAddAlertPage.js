import './EntrepriseAddAlertPage.scss';
import { Link, useNavigate } from 'react-router-dom';

function EntrepriseAddAlertPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        
        navigate("/entreprise");
    };

    return(
        <div className="EntrepriseAddAlertPage">
            <span className="EntrepriseAddAlertPage-x" onClick={handleClick}>x</span>
            
            <h1 className="EntrepriseAddAlertPage-title">Votre offre d'emploi est bien enregistrée</h1>

            <p className="EntrepriseAddAlertPage-p">Votre offre d'emploi a été enregistrée et sera mise en ligne d'ici peu.</p>

            <div className="EntrepriseAddAlertPage-buttons">
                <Link to='/entreprise'><a href="#" className="EntrepriseAddAlertPage-button">Mon compte</a></Link>
                <Link to='/entreprise/ajout-publication'><a href="#" className="EntrepriseAddAlertPage-button">Publier une nouvelle offre</a></Link>
            </div>
        </div>
    );
}

export default EntrepriseAddAlertPage;