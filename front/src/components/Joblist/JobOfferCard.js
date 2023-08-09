import axios from "axios";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";

function JobOfferCard ({ setData, data, displayedOffers }) {
  const [loading, setLoading] = useState(false);

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
  
  if(loading) {
    return (
      <div className="loading-contai">
        <Bars
          width="20rem"
          height="20rem"
          color="#FF772B"
        />
      </div>
    )
  }

  return (
    <>
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
    </>
  );
}

export default JobOfferCard;
