import './EntrepriseArea.scss';
import logoEntrepriseArea from '../../assets/logoEntrepriseArea.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function EntrepriseArea() {
	const userEntreprise = useSelector(state => state.entreprise.userEntreprise);
    return(
        <div className="EntrepriseArea">
            
            <h1 className="EntrepriseArea-title"> Bienvenue dans votre espace  {userEntreprise.name} </h1>

            <img className="EntrepriseArea-img" src={logoEntrepriseArea} alt="Logo Candidate Area Page" />
            
            <div className='EntrepriseArea-buttons'>
            <Link to="/entreprise/mes-donnees"><button className='EntrepriseArea-button'>Mes données</button></Link>
            <Link to="/*"><button className='EntrepriseArea-button' >Mes offres d'emploi</button></Link>
            <Link to="/*"><button className='EntrepriseArea-button' >Mes documents</button></Link>
            </div>
        </div>


    )
}

export default EntrepriseArea;