import { Link } from 'react-router-dom';
import './CompanySubscription.scss';

function CompanySubscription() {
    return (
        <section className="EntrepriseSubscription">
        <h1 className="EntrepriseSubscription-title">Inscrivez-vous</h1>
        <form className="EntrepriseSubscription-form">
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="nomEntreprise"
                    id="nomEntreprise"
                    required
                />
                <label htmlFor="nomEntreprise" >Nom de l'entreprise *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="siret"
                    id="siret"
                    required
                />
                <label htmlFor="siret" >SIRET *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="nom"
                    id="nom"
                    required
                />
                <label htmlFor="nom" >Nom *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="prenom"
                    id="prenom"
                    required
                />
                <label htmlFor="prenom">Prénom *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="adresse"
                    id="adresse"
                    required
                />
                <label htmlFor="adresse" >Adresse *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="codePostal"
                    id="codePostal"
                    required
                />
                <label htmlFor="codePostal" >Code postal *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="text"
                    name="ville"
                    id="ville"
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
                    required
                />
                <label htmlFor="email">Email *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
                <input
                    type="newPassword"
                    name="newPassword"
                    id="newPassword"
                    required
                />
                <label htmlFor="newPassword">Nouveau mot de passe *</label>
            </div>
            <div className="EntrepriseSubscription-form-fieldHolder">
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