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
                    <label for="nom" >Nom</label>
                        <input
                            type="text"
                            name="nom"
                        />
                </div>
                <div className="Contact-form-fieldHolder">
                    <label for="prenom">Prénom</label>
                        <input
                            type="text"
                            name="prenom"
                        />
                </div>
                <div className="Contact-form-fieldHolder">
                    <label for="email">Email</label>
                        <input
                            type="email"
                            inputMode="email"
                            name="mail"
                        />
                </div>
                <div className="Contact-form-fieldHolder">
                    <label for="telephone">Téléphone</label>
                        <input
                            type="number"
                            inputMode="tel"
                            name="telephone"
                        />
                </div>
                <div className="Contact-form-fieldHolder">
                    <label for="votre-message">Votre message</label>
                        <textarea
                            name="votre-message"
                            rows="1"
                            maxLength="250"
                        />
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