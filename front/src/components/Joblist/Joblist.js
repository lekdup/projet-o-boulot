import './Joblist.scss';
import CardsList from './CardsList/CardsList';
import api from '../../api/api';
import { useEffect, useState } from 'react';

function Joblist(){

    const [offers, setOffers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);
    const [searchSubmitted, setSearchSubmitted] = useState(false);


    const handleChange = (e) => {  

        const search = e.target.value.toLowerCase();
        setSearchValue(search);
        console.log(searchValue);
        
        const filteredOffers = offers.filter((offer)=> 
        offer.entitled.toLowerCase().includes(search)
         );
        setSearchResult(filteredOffers); 
        setSearchSubmitted(false);

    }
    

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchSubmitted(true);
  };

    return(
      
        <div className='Joblist'>
        <h1 className='Joblist-title'> Les offres d'emploi</h1>
        <form className='Joblist-searchbar' onSubmit={handleSubmit}>
            <input 
            
            className='Joblist-searchbar-input' 
            type="text" 
            name="searchbar" 
            placeholder="'Hotesse d'accueil' "
            value={searchValue}
            onChange={handleChange}></input> 
            <button type='submit' className='Joblist-searchbar-button'> Recherche </button>
            </form>
        <div className='Joblist-content'>
            
        <CardsList offers={searchSubmitted ? searchResult : offers} />
        
        </div>
        

        </div>
    )
}

export default Joblist;