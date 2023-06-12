import './EntrepriseAddAlertPage.scss';

function EntrepriseAddAlertPage() {

    return(
        <div className="EntrepriseAddAlertPage">

            <span className="EntrepriseAddAlertPage-x">x</span>
            
            <h1 className="EntrepriseAddAlertPage-title">Votre offre d'emploi est bien enregistré</h1>

            <p className="EntrepriseAddAlertPage-p">Votre offre d'emploi à été enregistrée et sera mise en ligne d'ici peu.</p>

            <div className="EntrepriseAddAlertPage-buttons">
                <a href="#" className="EntrepriseAddAlertPage-button">Mon compte</a>
                <a href="#"  className="EntrepriseAddAlertPage-button">Publier une nouvelle offre</a>
                
            </div>
        </div>
    )
}

export default EntrepriseAddAlertPage;