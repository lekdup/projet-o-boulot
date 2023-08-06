import { Link } from 'react-router-dom';
import './Subscription.scss';

import api from '../../api/api';


import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


function CandidateSubscription() {
    const { auth } = useAuth();
    let createdAt = new Date().toJSON().slice(0, 10);
    let roles = ["ROLE_CANDIDATE"]
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
            navigate("/candidat/inscription/done")
        })
        .catch(error => {
            console.log(error)
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
        <section className="Candidate Subscription">
            <h1 className="Candidate Subscription-title">Inscrivez-vous</h1>
            <form className="Candidate Subscription-form" onSubmit={handleSubmit}>
                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        placeholder=" "
                        value={lastname}
                        onChange={(e) => {
                            setLastname(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="nom" >Nom *</label>
                </div>
                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        placeholder=" "
                        value={firstname}
                        onChange={(e) => {
                            setFirstname(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="prenom">Prénom *</label>
                </div>
                <div className="Candidate Subscription-form-dropdown">
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
                <div className="Candidate Subscription-form-dropdown">
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
                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="number"
                        inputMode="tel"
                        name="telephone"
                        id="telephone"
                        placeholder=" "
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                    />
                    <label htmlFor="telephone">Téléphone</label>
                </div>

                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder=" "
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="address">Adresse postale</label>
                </div>

                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="number"
                        name="postalCode"
                        id="postalCode"
                        placeholder=" "
                        value={postalCode}
                        onChange={(e) => {
                            setPostalCode(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="postalCode">Code postal</label>
                </div>

                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder=" "
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="city">Ville</label>
                </div>
                
                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="email"
                        inputMode="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="email">Email *</label>
                </div>

                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder=" "
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="description"> 2-3 mots pour vous décrire ? *</label>
                </div>

                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="Password"
                        name="newPassword"
                        id="newPassword"
                        placeholder=" "
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                    />
                    <label htmlFor="newPassword">Nouveau mot de passe *</label>
                </div>
                <div className="Candidate Subscription-form-fieldHolder">
                    <input
                        type="Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="confirmPassword">Confirmer votre mot de passe *</label>
                </div>
                <button
                    type="submit"
                    className="Candidate Subscription-form-btn"
                >
                    Envoyer
                </button>
            </form>
            <p>Vous avez déjà un compte ? <Link to="/candidat/login"><span>Connectez vous !</span></Link></p>
        </section>
    )
}

export default CandidateSubscription;
