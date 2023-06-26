
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
						<Link to= '/entreprise/mes-donnees/modification'><a className="EntrepriseDataPage-input-button" href="/" >Modifier</a></Link>
                        <Link to= '/'><a className="EntrepriseDataPage-input-button" href="/" >Supprimer</a></Link>
				</div>

		</div>
        </form>

        </div>
    )
}

export default EntrepriseDataPage;