
import './CandidateAlertPage.scss';

function CandidateAlertPage () {

    return(
        <div className="CandidateAlertPage">
            <div className="CandidateAlertPage-message">
                <h3 className="CandidateAlertPage-title">Alert</h3>
                <p className="CandidateAlertPage-p" > Votre demande X a été prise en compte </p>
            </div>
            
            <div className="CandidateAlertPage-buttons" >
                <a href="#" className="CandidateAlertPage-button">Mon espace</a>
            </div>

        </div>
    )
}

export default CandidateAlertPage;