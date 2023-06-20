import { Link } from 'react-router-dom';
import './CandidateSubscription.scss';

import api from '../../api/api';


import { useState } from 'react';

function CandidateSubscription() {

    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
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
            "email": email,
            "password": password}
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
            setEmail('');
        })
        .catch(error => {
            console.log(error)
        })

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