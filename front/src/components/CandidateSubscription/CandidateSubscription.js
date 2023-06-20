import { Link } from 'react-router-dom';
import './CandidateSubscription.scss';

function CandidateSubscription() {
    return (
        <section className="CandidateSubscription">
            <h1 className="CandidateSubscription-title">Inscrivez-vous</h1>
            <form className="CandidateSubscription-form">
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        required
                    />
                    <label htmlFor="nom" >Nom *</label>
                </div>
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        required
                    />
                    <label htmlFor="prenom">Prénom *</label>
                </div>
                <div className="CandidateSubscription-form-dropdown">
                    <label htmlFor="genre">Genre *</label>
                    <select required>
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
                        required
                    />
                </div>
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="number"
                        inputMode="tel"
                        name="telephone"
                        id="telephone"
                    />
                    <label htmlFor="telephone">Téléphone</label>
                </div>
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="email"
                        inputMode="email"
                        name="email"
                        id="email"
                        required
                    />
                    <label htmlFor="email">Email *</label>
                </div>
                <div className="CandidateSubscription-form-fieldHolder">
                    <input
                        type="newPassword"
                        name="newPassword"
                        id="newPassword"
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