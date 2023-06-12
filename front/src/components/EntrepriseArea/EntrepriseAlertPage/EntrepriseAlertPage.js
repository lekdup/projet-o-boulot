import './EntrepriseAlertPage.scss';

function EntrepriseAlertPage() {

    return(
        <div className="EntrepriseAlertPage">
            <div className="EntrepriseAlertPage-message">
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