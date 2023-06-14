import Candidat from '../Candidat/Candidat';
import Entreprise from '../Entreprise/Entreprise';
import './Homepage.scss';

function Homepage() {

    return(
        <div className="Homepage">
            <article className="Homepage-intro">
                <h1>O'Boulot</h1>
                <h2>Pour ceux qui en veulent</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nobis nostrum. Dolores animi obcaecati tempore voluptates pariatur eaque ex voluptate exercitationem culpa ducimus voluptatum, omnis vitae fuga ut nemo sunt, dolor cum iure aspernatur vel maxime! Architecto ipsa saepe repellendus, nostrum at laborum earum, laboriosam itaque ab dolores animi illo?</p>
            </article>
            <section className="Homepage-component">
                <Entreprise />
                <Candidat />
            </section>
        </div>
    )
}

export default Homepage;