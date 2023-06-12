import Candidat from '../Candidat/Candidat';
import Entreprise from '../Entreprise/Entreprise';
import './Homepage.scss';

function Homepage() {
    return(
        <div className="Homepage">
            
            <article className="Homepage-intro">
                <h1>O'Boulot</h1>
                <p>Pour ceux qui en veulent</p>
            </article>
            <Entreprise />
            <Candidat />
           
        </div>
    )
}

export default Homepage;