import contact from '../../assets/contact.svg';
import './Contact.scss';


function Contact() {
    return (
        <section className="Contact">
            <h1 className="Contact-title">Contact</h1>
            <div className="Contact-image">
                <img src={contact} alt="an illustration of a person typing on a laptop" />
            </div>
            <form className="Contact-form">
                <div className="Contact-form-fieldHolder">
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        placeholder=" "
                    />
                    <label htmlFor="nom" >Nom</label>
                </div>
                <div className="Contact-form-fieldHolder">
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        placeholder=" "
                    />
                    <label htmlFor="prenom">Prénom</label>
                </div>
                <div className="Contact-form-fieldHolder">
                    <input
                        type="email"
                        inputMode="email"
                        name="email"
                        id="email"
                        placeholder=" "
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="Contact-form-fieldHolder">
                    <input
                        type="number"
                        inputMode="tel"
                        name="telephone"
                        id="telephone"
                        placeholder=" "
                    />
                    <label htmlFor="telephone">Téléphone</label>
                </div>
                <div className="Contact-form-fieldHolder">
                    <textarea
                        name="votre-message"
                        rows="1"
                        maxLength="250"
                        id="votre-message"
                        placeholder=" "
                    />
                    <label htmlFor="votre-message">Votre message</label>
                </div>
                <button
                    type="submit"
                    className="Contact-form-btn"
                >
                    Envoyer
                </button>
            </form>
        </section>
    )
}

export default Contact;