
import './EntrepriseDataPage.scss';
import logoEntrepriseDataPage from '../../../assets/logoEntrepriseDataPage.svg'


function EntrepriseDataPage() {

    return(
        <div className="EntrepriseDataPage">
        
            <h1 className="EntrepriseDataPage-title">Mes données personnelles</h1>
			

			<img className="EntrepriseDataPage-img" src={logoEntrepriseDataPage} alt="Logo Candidate Data Page"></img>

            <form className="EntrepriseDataPage-form" action="/">
		    <div>
			
				<div className="EntrepriseDataPage-input" >
				    <label className="EntrepriseDataPage-input-label" htmlFor="name">Nom de l'entreprise ici </label>
					
				</div>

				<div className="EntrepriseDataPage-input" >
					<label className="EntrepriseDataPage-input-label" htmlFor="prenom">Prénom de l'entreprise ici </label>
					
				</div>

                <div className="EntrepriseDataPage-input" >
					<label className="EntrepriseDataPage-input-label" htmlFor="prenom">SIRET de l'entreprise ici </label>
					
				</div>

				<div className="EntrepriseDataPage-input" >
					<label className="EntrepriseDataPage-input-label" htmlFor="email">E-mail de l'entreprise ici </label>
					
				</div>

				<div className="EntrepriseDataPage-p" >Veuillez verifier l'exactitude de vos données personnelles, ces dernière sont très importantes. Ces dernières serviront à établir et à éditer les contrats de travail de vos futurs employés.</div>

				<div className="EntrepriseDataPage-input-buttons">
						<a href="#" className="EntrepriseDataPage-input-button"  >Modifier</a>
                        <a href="#" className="EntrepriseDataPage-input-button" >Supprimer</a>
				</div>

		</div>
        </form>

        </div>
    )
}

export default EntrepriseDataPage;