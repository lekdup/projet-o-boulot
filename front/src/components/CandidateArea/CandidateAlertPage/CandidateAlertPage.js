
import './CandidateAlertPage.scss';
import logoCandidatAlertPage from '../../../assets/logoCandidatAlertPage.svg';

function CandidateAlertPage () {

    return(
        <div className="CandidateAlertPage">
            <img className="CandidateAlertPage-img" src={logoCandidatAlertPage} alt="logo entreprise done" />

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