import Candidat from '../Candidat/Candidat';
import Entreprise from '../Entreprise/Entreprise';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Homepage.scss';

function Homepage() {
    return(
        <div className="Homepage">
            <Header />
            <article className="Homepage-intro">
                <h1>O'Boulot</h1>
                <p>Pour ceux qui en veulent</p>
            </article>
            <Entreprise />
            <Candidat />
            <Footer />
        </div>
    )
}

export default Homepage;