import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EntrepriseAddOffer.scss';

import api from '../../../api/api';
import { useSelector } from 'react-redux';


function EntrepriseAddOffer() {
    const [isSubmitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const userEntreprise = useSelector(state => state.entreprise.userEntreprise);

    const [entitled, setEntitled] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTill, setDateTill] = useState('');
    const [place,       setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [nbVacancy, setNbVacancy] = useState('');
    const [category, setCategory] = useState();

    const [categories, setCategories] = useState([]);

    const isValid = true;
    const company = userEntreprise.id;
    let createdAt = new Date().toJSON().slice(0, 10);
    let publishedAt = new Date().toJSON().slice(0, 10);

    useEffect(() => {
        api.get('/categories').then((response) => {
            setCategories(response.data)
        });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJob = {
            "entitled": entitled,
            "dateFrom": dateFrom,
            "dateTill": dateTill,
            "duration": duration,
            "nbVacancy": parseInt(nbVacancy),
            "category": parseInt(category),
            "place": place,
            "isValid": isValid,
            "description": description,
            "company": company,
            "createdAt": createdAt,
            "publishedAt": publishedAt
        }
        api.post('/offres', newJob)
        .then( res =>{
            console.log(res)
            setEntitled('');
            setDateFrom('');
            setDateTill('');
            setPlace('');
            setDescription('');
            setSubmitted(true);
        })
        .catch(error => {
            console.log(error.status)
        })

        console.log(newJob);
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
                        onChange={(e) => {
                            setEntitled(e.target.value)
                        }}
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
                            onChange={(e) => {
                                setDateFrom(e.target.value)
                            }}
                        />
                    </div>
                    <div className="EntrepriseAddOffer-form-dates-date">
                        <label htmlFor="dateFin" >Date de fin</label>
                        <input
                            type="date"
                            name="dateFin"
                            id="dateFin"
                            value={dateTill}
                            onChange={(e) => {
                                setDateTill(e.target.value)
                            }}

                        />
                    </div>
                </div>
                <div className="EntrepriseAddOffer-form-numbers">
                    <div className="EntrepriseAddOffer-form-numbers-inside">
                        <label htmlFor="nbVacancy" >Poste à pourvoir</label>
                        <input
                            type="number"
                            inputMode="numeric"
                            name="nbVacancy"
                            id="nbVacancy"
                            value={nbVacancy}
                            onChange={(e) => {
                                setNbVacancy(e.target.value)
                            }}
                        />
                    </div>
                    <div className="EntrepriseAddOffer-form-numbers-inside">
                        <label htmlFor="duration" >La durée</label>
                        <input
                            type="text"
                            name="duration"
                            id="duration"
                            value={duration}
                            onChange={(e) => {
                                setDuration(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="EntrepriseAddOffer-form-fieldHolder">
                    <p>Catégories</p>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        {categories.map(category =>
                            <option value={category.id} key={category.id}>{category.title}</option>
                        )}
                    </select>
                </div>
                <div className="EntrepriseAddOffer-form-fieldHolder">
                    <input
                        type="text"
                        name="lieux"
                        id="lieux"
                        value={place}
                            onChange={(e) => {
                                setPlace(e.target.value)
                            }}
                    />
                    <label htmlFor="lieux" >Lieux</label>
                </div>
                <div className="EntrepriseAddOffer-form-fieldHolder">
                    <textarea
                        name="description"
                        rows="1"
                        maxLength="250"
                        id="description"
                        value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                    />
                    <label htmlFor="description">Description</label>
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