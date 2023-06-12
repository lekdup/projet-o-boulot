import './EntrepriseArea.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function EntrepriseArea() {

    return(
        <div className="EntrepriseArea">
            
            <h1 className="EntrepriseArea-title"> Bonjour entreprise X </h1>
            
            <div className='EntrepriseArea-buttons'>
                <button className='EntrepriseArea-button' >Mes données</button>
                <button className='EntrepriseArea-button' >Mes offres d'emploi</button>
                <button className='EntrepriseArea-button' >Mes documents</button>
            </div>
       

        </div>


    )
}

export default EntrepriseArea;