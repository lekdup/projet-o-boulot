import './EntrepriseAddOffer.scss';

function EntrepriseAddOffer() {
    return (
        <section className="EntrepriseAddOffer">
            <h1 className="EntrepriseAddOffer-title">Ajout d'une offre d'emploi</h1>
            <form className="EntrepriseAddOffer-form">
                <div className="EntrepriseAddOffer-form-fieldHolder">
                    <input
                        type="text"
                        name="titre"
                        id="titre"
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
                        />
                    </div>
                    <div className="EntrepriseAddOffer-form-dates-date">
                        <label htmlFor="dateFin" >Date de fin</label>
                        <input
                            type="date"
                            name="dateFin"
                            id="dateFin"
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
                    />
                    <label htmlFor="lieux" >Lieux</label>
                </div>
                <div className="EntrepriseAddOffer-form-fieldHolder">
                    <textarea
                        name="votre-message"
                        rows="1"
                        maxLength="250"
                        id="votre-message"
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