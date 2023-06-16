import './EntrepriseArea.scss';
import logoEntrepriseArea from '../../assets/logoEntrepriseArea.svg';
import { Link } from 'react-router-dom';

function EntrepriseArea() {

    return(
        <div className="EntrepriseArea">
            
            <h1 className="EntrepriseArea-title"> Bonjour entreprise X </h1>

            <img className="EntrepriseArea-img" src={logoEntrepriseArea} alt="Logo Candidate Area Page" />
            
            <div className='EntrepriseArea-buttons'>
                <button className='EntrepriseArea-button'><Link to="/entreprise/mes-donnees">Mes données</Link></button>
                <button className='EntrepriseArea-button' >Mes offres d'emploi</button>
                <button className='EntrepriseArea-button' >Mes documents</button>
            </div>
       

        </div>


    )
}

export default EntrepriseArea;