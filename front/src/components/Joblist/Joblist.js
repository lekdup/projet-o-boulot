import './Joblist.scss';
// import CardsList from './CardsList/CardsList';
// import api from '../../api/api';
import { useEffect, useState } from 'react';
import JobOfferCard from './JobOfferCard';

function Joblist(){

  const [data, setData] = useState([]);

    const [offers, setOffers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);
    const [searchSubmitted, setSearchSubmitted] = useState(false);


    const handleChange = (e) => {  

        const search = e.target.value.toLowerCase();
        setSearchValue(search);
        console.log(searchValue);
        
        const filteredOffers = data.filter((job)=> 
        job.employment.title.toLowerCase().includes(search)
         );
        setSearchResult(filteredOffers); 
        setSearchSubmitted(true);

    }
  //   useEffect(() => {
  //     api.get("/offres/")
  //         .then(res => {
  //             setOffers(res.data);
  //             //setOffer()
  //         })
  //         .catch(err => {
  //            console.error(err.message);
  //         })
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearchSubmitted(true);
  };

 const displayedOffers = searchSubmitted ? searchResult : data;
 
  return(
      
        <div className='Joblist'>
        <h1 className='Joblist-title'> Les offres d'emploi</h1>
        <form className='Joblist-searchbar' onSubmit={handleSubmit}>
            <input 
            
            className='Joblist-searchbar-input' 
            type="text" 
            name="searchbar" 
            placeholder="'Developer, Designer, Executive...' "
            value={searchValue}
            onChange={handleChange}></input> 
            <button type='submit' className='Joblist-searchbar-button'> Recherche </button>
            </form>
        <div >
          <div className='Joblist-content'>
            <p className='Joblist-result'> {displayedOffers.length} résultat{displayedOffers.length > 1 ? 's' : ''}</p>
            <JobOfferCard setData={setData} data={data} displayedOffers={displayedOffers}/>
          </div>
        </div>
        

        </div>
    )
}

export default Joblist;
