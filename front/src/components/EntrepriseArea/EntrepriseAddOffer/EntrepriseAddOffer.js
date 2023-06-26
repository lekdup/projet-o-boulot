import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EntrepriseAddOffer.scss';

import api from '../../../api/api';


function EntrepriseAddOffer() {

    const [isSubmitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const [entitled, setEntitled] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTill, setDateTill] = useState('');
    const [place,       setPlace] = useState('');
    const [description, setDescription] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        const newJob = {
            "entitled": entitled,
            "dateFrom": dateFrom,
            "dateTill": dateTill,
            "place": place,
            "description": description}
        api.post('/offres', newJob)
        .then( res =>{
            console.log(res)
            setEntitled('');
            setDateFrom('');
            setDateTill('');
            setPlace('');
            setDescription('');
        })
        .catch(error => {
            console.log(error)
        })
    }

    if (isSubmitted) {
        navigate("/entreprise/ajout-publication/done");
    }


    return (
        <section className="EntrepriseAddOffer">
            <h1 className="EntrepriseAddOffer-title">Ajout d'une offre d'emploi</h1>
            <form className="EntrepriseAddOffer-form" onSubmit={handleSubmit}>
                <div className="EntrepriseAddOffer-form-fieldHolder" >
                    <input
                        type="text"
                        name="titre"
                        id="titre"
                        value={entitled}
                        onChange={(e => {
                            setEntitled(e.target.value)
                        })}
                    />
                    <label htmlFor="titre" >Title du boulot</label>
                </div>
                <div className="EntrepriseAddOffer-form-dates">
                    <div className="EntrepriseAddOffer-form-dates-date">
                        <label htmlFor="dateDebut" >Date de début</label>
                        <input
                            type="date"
                            name="dateDebut"
                            id="dateDebut"
                            value={dateFrom}
                            onChange={(e => {
                                setDateFrom(e.target.value)
                            })}
                        />
                    </div>
                    <div className="EntrepriseAddOffer-form-dates-date">
                        <label htmlFor="dateFin" >Date de fin</label>
                        <input
                            type="date"
                            name="dateFin"
                            id="dateFin"
                            value={dateTill}
                            onChange={(e => {
                                setDateTill(e.target.value)
                            })}

                        />
                    </div>
                </div>
                <div className="EntrepriseAddOffer-form-times">
                    <div className="EntrepriseAddOffer-form-times-time">
                        <label htmlFor="heureDebut" >Heure de début</label>
                        <input
                            type="time"
                            name="heureDebut"
                            id="heureDebut"
                        />
                    </div>
                    <div className="EntrepriseAddOffer-form-times-time">
                        <label htmlFor="heureFin" >Heure de fin</label>
                        <input
                            type="time"
                            name="heureFin"
                            id="HeureFin"
                        />
                    </div>
                </div>
                <div className="EntrepriseAddOffer-form-fieldHolder">
                    <input
                        type="text"
                        name="lieux"
                        id="lieux"
                        value={place}
                            onChange={(e => {
                                setPlace(e.target.value)
                            })}
                    />
                    <label htmlFor="lieux" >Lieux</label>
                </div>
                <div className="EntrepriseAddOffer-form-fieldHolder">
                    <textarea
                        name="votre-message"
                        rows="1"
                        maxLength="250"
                        id="votre-message"
                        value={description}
                            onChange={(e => {
                                setDescription(e.target.value)
                            })}
                    />
                    <label htmlFor="votre-message">Votre message</label>
                </div>
                <button
                    type="submit"
                    className="EntrepriseAddOffer-form-btn"
                >
                    Envoyer
                </button>
            </form>
        </section>
    )
}

export default EntrepriseAddOffer;