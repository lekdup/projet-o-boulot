
import './CandidateDataPage.scss';
import logoCandidateDataPage from '../../../assets/logoCandidateDataPage.svg'


function CandidateDataPage() {

    return(
        <div className="CandidateDataPage">
        
            <h1 className="CandidateDataPage-title">Mes données personnelles</h1>
			

			<img className="CandidateDataPage-img" src={logoCandidateDataPage} alt="Logo Candidate Data Page"></img>

            <form className="CandidateDataPage-form" action="/">
		    <div>
			
				<div className="CandidateDataPage-input" >
				    <label className="CandidateDataPage-input-label" for="name">Nom du candidat ici </label>
					
				</div>

				<div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" for="prenom">Prénom du candidat ici </label>
					
				</div>

                <div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" for="prenom">Age du candidat ici </label>
					
				</div>

				<div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" for="email">E-mail du candidat ici </label>
					
				</div>

				<div className="CandidateDataPage-p" >Veuillez verifier l'exactitude de vos données personnelles, ces dernière sont très importantes. Ces dernière serviront à établir et à éditer votre contrat de travail.</div>

				<div className="CandidateDataPage-input-buttons">
					<a className="CandidateDataPage-input-button" href="/" >Modifier</a>
                    <a className="CandidateDataPage-input-button" href="/" >Supprimer</a>
				</div>

		</div>
        </form>

        </div>
    )
}

export default CandidateDataPage;