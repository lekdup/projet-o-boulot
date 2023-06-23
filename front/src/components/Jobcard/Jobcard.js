import './Jobcard.scss';
import {useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';


import api from '../../api/api';


function Jobcard() {
    const [isClicked, setIsClicked] = useState(true);
    const [offer, setOffer] = useState('');
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await api.get(`/offres/${id}`);
            setOffer(response.data)
          } catch (err) {
            console.error(err);
            alert("C'est moi!");
          }
        };
    
        fetchData();
      }, [id]);

      console.log(offer);

    return(
        <div className='jobcard'>
            <div className ='jobcard-bookmark'>
                <h1>{'<'}</h1>
                {isClicked ? <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="25" height="" fill="currentColor" viewBox="0 0 16 16"> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#acadad"></path> </svg> : <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#adadad"></path> </svg> }
            </div>
            <h1 className='jobcard-title'>{offer.entitled}</h1>
            <div className='jobcard-tags'><p> {offer.place}</p></div>


            <p className='jobcard-content'> {offer.description}
            </p>
            <button className='jobcard-btn'>Je postule !</button>
        </div>
    )
}

export default Jobcard;