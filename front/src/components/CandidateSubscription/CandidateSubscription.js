import { Link } from 'react-router-dom';
import './CandidateSubscription.scss';

import api from '../../api/api';


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CandidateSubscription() {

    let createdAt = new Date().toJSON().slice(0, 10);
    let roles = ["ROLE_CANDIDATE"]

    const [isSubmitted, setSubmitted] = useState(false);
    const navigate = useNavigate();



    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');    
    const [city, setCity] = useState('');    
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Je stocke les valeurs de mon state dans un objet newCandidate
        const newCandidate = {
            "lastname": lastname,
            "firstname": firstname,
            "gender": gender,
            "birthday": birthday,
            "phone": phone,
            "address": address,
            "postalCode": postalCode,
            "city" : city,
            "email": email,
            "password": password,
            "createdAt": createdAt,
            "roles" : roles
            }
        console.log(newCandidate);
        api.post('/candidats', newCandidate)
        .then( res =>{
            console.log(res)
            setLastname('');
            setBirthday('');
            setFirstname('');
            setGender('');
            setPassword('');
            setPhone('');
            setAddress('');
            setCity('');
            setPostalCode('');
            setEmail('');
            setSubmitted(true);
        }
        )
        .catch(error => {
            console.log(error)
        })

    }

    if (isSubmitted) {
        navigate("/candidat/inscription/done");
    }

    return (
        <section className="CandidateSubscription">
            <h1 className="CandidateSubscription-title">Inscrivez-vous</h1>
            <form className="CandidateSubscription-form" onSubmit={handleSubmit}>
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        value={lastname}
                        onChange={(e) => {
                            setLastname(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="nom" >Nom *</label>
                </div>
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        value={firstname}
                        onChange={(e) => {
                            setFirstname(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="prenom">Prénom *</label>
                </div>
                <div className="CandidateSubscription-form-dropdown">
                    <label htmlFor="genre">Genre *</label>
                    <select 
                    name="genre" 
                    value={gender} 
                    onChange={(e) => {
                        setGender(e.target.value)
                    }}
                    required>
                        <option value="genre">--Choisi--</option>
                        <option value="femme">Femme</option>
                        <option value="homme">Homme</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                <div className="CandidateSubscription-form-dropdown">
                    <label htmlFor="date">Date de naissance *</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={birthday}
                        onChange={(e) => {
                            setBirthday(e.target.value)
                        }}
                        required
                    />
                </div>
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="number"
                        inputMode="tel"
                        name="telephone"
                        id="telephone"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                    />
                    <label htmlFor="telephone">Téléphone</label>
                </div>

                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="address">Adresse postale</label>
                </div>

                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="number"
                        name="postalCode"
                        id="postalCode"
                        value={postalCode}
                        onChange={(e) => {
                            setPostalCode(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="postalCode">Code postal</label>
                </div>

                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="city">Ville</label>
                </div>
                
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="email"
                        inputMode="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="email">Email *</label>
                </div>

                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="description"> 2-3 mots pour vous décrire ? *</label>
                </div>

                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="newPassword"
                        name="newPassword"
                        id="newPassword"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="newPassword">Nouveau mot de passe *</label>
                </div>
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="confirmPassword"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                    />
                    <label htmlFor="confirmPassword">Confirmer votre mot de passe *</label>
                </div>
                <button
                    type="submit"
                    className="CandidateSubscription-form-btn"
                >
                    Envoyer
                </button>
            </form>
            <p>Vous avez déjà un compte ? <Link to="/candidat/login"><span>Connectez vous !</span></Link></p>
        </section>
    )
}

export default CandidateSubscription;