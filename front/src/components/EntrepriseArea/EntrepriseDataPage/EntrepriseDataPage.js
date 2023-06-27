
import './EntrepriseDataPage.scss';
import logoEntrepriseDataPage from '../../../assets/logoEntrepriseDataPage.svg'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function EntrepriseDataPage() {

	const userEntreprise = useSelector(state => state.entreprise.userEntreprise);
	console.log(userEntreprise);

    return(
        <div className="EntrepriseDataPage">
        
            <h1 className="EntrepriseDataPage-title">Mes données personnelles</h1>
			

			<img className="EntrepriseDataPage-img" src={logoEntrepriseDataPage} alt="Logo Candidate Data Page"></img>

            <form className="EntrepriseDataPage-form">
		    <div>
			
				<div className="EntrepriseDataPage-input" >
				    <label className="EntrepriseDataPage-input-label" htmlFor="name">{userEntreprise.name} </label>
					
				</div>

                <div className="EntrepriseDataPage-input" >
					<label className="EntrepriseDataPage-input-label" htmlFor="prenom">{userEntreprise.siret} </label>
					
				</div>

				<div className="EntrepriseDataPage-input" >
					<label className="EntrepriseDataPage-input-label" htmlFor="email">{userEntreprise.username} </label>
					
				</div>

				<div className="EntrepriseDataPage-p" >Veuillez verifier l'exactitude de vos données personnelles, ces dernière sont très importantes. Ces dernières serviront à établir et à éditer les contrats de travail de vos futurs employés.</div>

				<div className="EntrepriseDataPage-input-buttons">
						<Link to= '/entreprise/mes-donnees/modification'><p className="EntrepriseDataPage-input-button" >Modifier</p></Link>
                        <Link to= '/'><p className="EntrepriseDataPage-input-button">Supprimer</p></Link>
				</div>

		</div>
        </form>

        </div>
    )
}

export default EntrepriseDataPage;