
import './EntrepriseDataPage.scss';
import logoEntrepriseDataPage from '../../../assets/logoEntrepriseDataPage.svg'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function EntrepriseDataPage() {

	const userEntreprise = useSelector(state => state.entreprise.userEntreprise);
	// console.log(userEntreprise);

    return(
        <section className="EntrepriseDataPage">
        
            <h1 className="EntrepriseDataPage-title">Mes données personnelles</h1>
			
            <article className="EntrepriseDataPage-form">
				<div className="EntrepriseDataPage-form-image">
					<img src='https://img.phonandroid.com/2022/07/Elon-Musk.jpg' alt='the CEO of Tesla, Space X, Paypal, Twitter and multi-billionaire, Elon MUSK'/>
				</div>
				<p className="EntrepriseDataPage-form-title">{userEntreprise.name}</p>
				<p className="EntrepriseDataPage-form-pres">{userEntreprise.presentation}</p>
				<p className="EntrepriseDataPage-form-info" htmlFor="siret"><span>N° de siret : </span>{userEntreprise.siret}</p>
				<p className="EntrepriseDataPage-form-info" htmlFor="email"><span>Email : </span>{userEntreprise.email}</p>
				<p className="EntrepriseDataPage-form-rgpd" >Veuillez verifier l'exactitude de vos données personnelles, ces dernière sont très importantes. Ces dernières serviront à établir et à éditer les contrats de travail de vos futurs employés.</p>
				<Link to= '/entreprise/mes-donnees/modification'><button className="EntrepriseDataPage-form-button" >Modifier</button></Link>
        	</article>
        </section>
    )
}

export default EntrepriseDataPage;
