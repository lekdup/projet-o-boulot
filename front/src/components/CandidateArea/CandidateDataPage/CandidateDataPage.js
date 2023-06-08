
import './CandidateDataPage.scss';


function CandidateDataPage() {

    return(
        <div className="CandidateDataPage">
        
            <h1 className="CandidateDataPage-title">Mes données personnelles</h1>
			
            <form className="CandidateDataPage-form" action="/">
		    <div>
			
				<div className="CandidateDataPage-input" >
				    <label className="CandidateDataPage-input-label" for="name">Nom : </label>
					<input type="text" id="name" autofocus />
				</div>

				<div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" for="prenom">Prénom : </label>
					<input type="text" id="prenom" />
				</div>

                <div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" for="prenom">Age : </label>
					<input type="number" id="age" />
				</div>

				<div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" for="email">E-mail : </label>
					<input type="email" id="email" />
				</div>

				<div className="CandidateDataPage-p" >Veuillez verifier l'exactitude de vos données personnelles, ces dernière sont très importantes. Ces dernière serviront à établir et à éditer votre contrat de travail.</div>

				<div className="CandidateDataPage-input-buttons">
						<input className="CandidateDataPage-input-button" type="submit" value="Modifier" />
                        <input className="CandidateDataPage-input-button" type="submit" value="Supprimer" />
				</div>

		</div>
        </form>

        </div>
    )
}

export default CandidateDataPage;