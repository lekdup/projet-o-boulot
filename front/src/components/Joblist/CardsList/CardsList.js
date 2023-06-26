import './CardsList.scss';
import {useState} from 'react';

import { Link } from 'react-router-dom';

function CardsList({ offers }){

    // on initialise un tableau vide
    const [clickedOfferIds, setClickedOfferIds] = useState([]);
    
    const handleClick = (offerId) => {
        // on vérifie si l'id de l'offre cliquée est déjà dans le tableau clickedOfferIds
        if (clickedOfferIds.includes(offerId)) {
          // si c'est le cas, on filtre le tableau en ne gardant que les id différents de offerId  
          // que l'on setClickedOfferIds
          setClickedOfferIds(clickedOfferIds.filter((id) => id !== offerId));
        } else {
          // si ce n'est pas le cas, on ajoute l'id à la suite du tableau  
          setClickedOfferIds([...clickedOfferIds, offerId]);
        }
      };
      // on stocke le tableau dans le localstorage
      // pour pouvoir le transformer ensuite en tableau dans localStorage il faut mettre avant stringify sinon ça ne fonctionne pas
      localStorage.setItem('favorite', JSON.stringify(clickedOfferIds)); 

    return(
        <div className='cardsList'>
            {offers.map((offer) => (
                <div className='card' key={offer.id}>
                    <div className ='card-bookmark'>
                    {clickedOfferIds.includes(offer.id)? (
              <svg
                onClick={() => handleClick(offer.id)}
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-bookmark-fill'
                viewBox='0 0 16 16'
              >
                <path
                  d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z'
                  fill='#adadad'
                ></path>
              </svg>
            ) : (
              <svg
                onClick={() => handleClick(offer.id)}
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height=''
                fill='currentColor'
                className='bi bi-bookmark'
                viewBox='0 0 16 16'
              >
                <path
                  d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z'
                  fill='#acadad'
                ></path>
              </svg>
            )}
          </div>
          <Link to={`/candidat/jobcard/${offer.id}`} className='card-title'>
            {offer.entitled}
          </Link>
          <div className='card-tags'>
            <p>{offer.place}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default CardsList;