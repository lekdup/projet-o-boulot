import './Joblist.scss';
import CardsList from './CardsList/CardsList';
import Jobcard from '../Jobcard/Jobcard';
import api from '../../api/api';
import { useEffect, useState } from 'react';

function Joblist(){

    const [offers, setOffers] = useState([]);

    useEffect(() => {
      api.get("/offres/")
          .then(res => {
              setOffers(res.data);
              //setOffer()
          })
          .catch(err => {
             alert('Erreur API !')
          })
  }, []);


    return(
      
        <div className='Joblist'>
        <h1 className='Joblist-title'> Les offres d'emploi</h1>
        <form className='Joblist-searchbar'>
            <input className='Joblist-searchbar-input' type="text" name="searchbar" placeholder="'Hotesse d'accueil' "></input> 
            <button className='Joblist-searchbar-button'> Recherche </button>
            </form>
        <div className='Joblist-content'>
            
            
        

        <CardsList offers={offers} />
        
        </div>
        

        </div>
    )
}

export default Joblist;