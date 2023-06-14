import './EntrepriseAlertPage.scss';
import logoEntrepriseAlertPage from '../../../assets/logoEntrepriseAlertPage.svg';

function EntrepriseAlertPage() {

    return(
        <div className="EntrepriseAlertPage">
            <img className="EntrepriseAlertPage-img" src={logoEntrepriseAlertPage} alt="logo entreprise done" />
            <div  className="EntrepriseAlertPage-message">
                <h3 className="EntrepriseAlertPage-title">Alert</h3>
                <p className="EntrepriseAlertPage-p" > Votre demande X a été prise en compte </p>
            </div>
            
            <div className="EntrepriseAlertPage-buttons" >
                <a href="#" className="EntrepriseAlertPage-button">Mon espace</a>
            </div>

        </div>
    )
}

export default EntrepriseAlertPage;