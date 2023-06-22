import './MissionsList.scss';
import MissionsListElement from './MissionsListElement/MissionsListElement';

import api from '../../../../api/api';
import { useEffect, useState } from 'react';

function MissionsList({menuValue}){

    // on récupère la liste des ID en favoris dans le localstorage
    // utilisation de JSON.parse pour récupérer un tableau dans le localStorage et non une string
    const FavoriteList = JSON.parse(localStorage.getItem('favorite')); 
    console.log(FavoriteList);
    
    const [filteredOffers, setFilteredOffers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get(`/offres/`);
          const allOffers = response.data;
  
          // Filtrer les offres en fonction des IDs favoris
          const filteredOffers = allOffers.filter((offer) =>
            FavoriteList.includes(offer.id)
          );
  
          setFilteredOffers(filteredOffers);
        } catch (err) {
          console.error(err);
          alert('Erreur API !');
        }
      };
  
      if (FavoriteList && FavoriteList.length > 0 && filteredOffers.length === 0) {
        fetchData();
      }
    }, [FavoriteList, filteredOffers]);
  
    // Utiliser filteredOffers en dehors de la requête
    console.log(filteredOffers);

    return(
        <div className='MissionsList'>
         {filteredOffers.map((filteredOffer) => (
            <MissionsListElement menuValue={menuValue} filteredOffer={filteredOffer}/>
         ))}   
        
      

</div>
    )
}
export default MissionsList;
