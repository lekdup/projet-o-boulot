
import './CandidateAlertPage.scss';

function CandidateAlertPage () {

    return(
        <div className="CandidateAlertPage">
            <div className="CandidateAlertPage-message">
                <h3 className="CandidateAlertPage-title">Alert</h3>
                <p className="CandidateAlertPage-p" > Votre demande X a été prise en compte </p>
            </div>
            
            <div className="CandidateAlertPage-button" >
                <button href="/"> Retour sur mon espace </button>
            </div>

        </div>
    )
}

export default CandidateAlertPage;