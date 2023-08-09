import axios from 'axios';
import './Joblist.scss';
// import CardsList from './CardsList/CardsList';
// import api from '../../api/api';
import { useEffect, useState } from 'react';
// import JobOfferCard from './JobOfferCard';
import { Link } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

function Joblist(){

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

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

    useEffect(() => {
      const jobs = "users";
      const url = new URL(`https://random-data-api.com/api/v2/${jobs}`);
      let params = new URLSearchParams();
      params.set("size", 10);
      params.set("response_type", "json");
      url.search = params;
  
      setLoading(true);
      axios.get(url)
      .then(response=>{
        console.log(response.data)
        setData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(console.warn);
    },[])
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

  if(loading) {
    return (
      <div className="loading-container">
        <Bars
          width="10rem"
          height="10rem"
          color="#FF772B"
        />
      </div>
    )
  }

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
            {displayedOffers.map(({ id, password, last_name, email, avatar, employment }) => (
      <figure className="JobOffer" key={id}>
        <picture className="JobOffer-image">
          <img src={avatar} alt='This is an coming from robohash api'/>
        </picture>
        <figcaption className="JobOffer-form">
          <h1 className="JobOffer-form-company">{last_name}</h1>
          <p className="JobOffer-form-title">{employment.title}</p>
          <p className="JobOffer-form-pres">{employment.key_skill}</p>
          <p className="JobOffer-form-info" htmlFor="siret"><span>N° de siret : </span>{password}</p>
          <p className="JobOffer-form-info" htmlFor="email"><span>Email : </span>{email}</p>
          <p className="JobOffer-form-rgpd" >Veuillez verifier l'exactitude de vos données personnelles, ces dernière sont très importantes. Ces dernières serviront à établir et à éditer les contrats de travail de vos futurs employés.</p>
          <Link to="/"  className="JobOffer-form-button"><button>Candidater</button></Link>
        </figcaption>
      </figure>
    ))}
          </div>
        </div>
        

        </div>
    )
}

export default Joblist;
