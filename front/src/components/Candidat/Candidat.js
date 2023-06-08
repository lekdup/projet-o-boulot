import './Candidat.scss';

function Candidat() {
    return(
        <div className="wrapper-candidat">
            <h2 className="wrapper-candidat-title">Je cherche un boulot</h2>
            <div className="wrapper-candidat-buttons">
                <button>Consulter les offres</button>
                <button>Créer mon espace candidat</button>
            </div>
        </div>
    )
}

export default Candidat;