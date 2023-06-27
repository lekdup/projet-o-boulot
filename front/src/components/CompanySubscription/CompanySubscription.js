import { Link, useNavigate } from 'react-router-dom';
import './CompanySubscription.scss';

import { useEffect, useState } from 'react';
import api from '../../api/api';
import useAuth from '../../hooks/useAuth';

function CompanySubscription() {
    const { auth } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [siret, setSiret] = useState('');
    const [lastname, setLastame] = useState('');
    const [firstname, setFirstame] = useState('')
    const [adress, setAdress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [city, setCity] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const newCompagny = {
            "name": name,
            "siret": siret,
            "lastname": lastname,
            "firstname": firstname,
            "adress": adress,
            "postalCode": postalCode,
            "city": city,
            "number": number,
            "email": email,
            "password": password,
        }

        console.log(newCompagny);

        api.post('/entreprise', newCompagny)
        .then(res => {
            console.log(res)

            setName('');
            setSiret('');
            setLastame();
            setFirstame('');
            setAdress('');
            setPostalCode('');
            setCity('');
            setNumber('');
            setEmail('');
            setPassword('');
        })
        .catch(error => {
            console.log(error);
        }) 
    }

    useEffect(() => {
        if (auth.roles === "ROLE_CANDIDATE") {
            navigate("/*");
        } else if (auth.roles === "ROLE_COMPANY") {
            navigate("/*")
        }
    })
    

    return (
        <section className="EntrepriseSubscription">
        <h1 className="EntrepriseSubscription-title">Inscrivez-vous</h1>
        <form className="EntrepriseSubscription-form" onSubmit={handleSubmit}>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="nomEntreprise"
                    id="nomEntreprise"
                    placeholder=" "
                    value={name}
                    onChange = {(event) => {
                        setName(event.target.value)
                    }}
                    required
                />
                <label htmlFor="nomEntreprise" >Nom de l'entreprise *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="siret"
                    id="siret"
                    placeholder=" "
                    value={siret}
                    onChange = {(event) => {
                        setSiret(event.target.value)
                    }}
                    required
                />
                <label htmlFor="siret" >SIRET *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="nom"
                    id="nom"
                    placeholder=" "
                    value={lastname}
                    onChange= {(event) => {
                        setLastame(event.target.value)
                    }}
                    required
                />
                <label htmlFor="nom" >Nom *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="prenom"
                    id="prenom"
                    placeholder=" "
                    value={firstname}
                    onChange = {(event) =>{
                        setFirstame(event.target.value)
                    }}
                    required
                />
                <label htmlFor="prenom">Prénom *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="adresse"
                    id="adresse"
                    placeholder=" "
                    value={adress}
                    onChange = {(event) => {
                        setAdress(event.target.value)
                    }}
                    required
                />
                <label htmlFor="adresse" >Adresse *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="codePostal"
                    id="codePostal"
                    placeholder=" "
                    value={postalCode}
                    onChange = {(event) => {
                        setPostalCode(event.target.value)
                    }}
                    required
                />
                <label htmlFor="codePostal" >Code postal *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="ville"
                    id="ville"
                    placeholder=" "
                    value={city}
                    onChange = {(event) => {
                        setCity(event.target.value)
                    }}
                    required
                />
                <label htmlFor="ville" >Ville *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="number"
                    inputMode="tel"
                    name="telephone"
                    id="telephone"
                    placeholder=" "
                    value={number}
                    onChange = {(event) => {
                        setNumber(event.target.value)
                    }}
                    required
                />
                <label htmlFor="telephone">Téléphone *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="email"
                    inputMode="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    value={email}
                    onChange = {(event) => {
                        setEmail(event.target.value)
                    }}
                    required
                />
                <label htmlFor="email">Email *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="newPassword"
                    name="newPassword"
                    id="newPassword"
                    placeholder=" "
                    value={password}
                    onChange = {(event) => {
                        setPassword(event.target.value)
                    }}
                    required
                />
                <label htmlFor="newPassword">Nouveau mot de passe *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder=" "
                    required
                />
                <label htmlFor="confirmPassword">Confirmer votre mot de passe *</label>
            </div>
            <button
                type="submit"
                className="EntrepriseSubscription-form-btn"
            >
                Envoyer
            </button>
        </form>
        <p>Vous avez déjà un compte ? <Link to="/entreprise/login"><span>Connectez vous !</span></Link></p>
    </section>
    )
}

export default CompanySubscription;