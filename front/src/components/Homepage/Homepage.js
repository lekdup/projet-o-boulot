import AboutUs from '../AboutUs/AboutUs';
import apply from '../../assets/apply.svg';
import recruit from '../../assets/recruit.svg';
import './Homepage.scss';
import { Link } from 'react-router-dom';


function Homepage() {
    return(
        <div className="Homepage">
            <article className="Homepage-intro">
                <h1>O'Boulot</h1>
                <h2>Pour ceux qui en veulent</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, nobis nostrum. Dolores animi obcaecati tempore voluptates pariatur eaque ex voluptate exercitationem culpa ducimus voluptatum, omnis vitae fuga ut nemo sunt, dolor cum iure aspernatur vel maxime! Architecto ipsa saepe repellendus, nostrum at laborum earum, laboriosam itaque ab dolores animi illo?</p>
            </article>
            <section className="Homepage-component">
              <div className="wrapper">
                <h2 className="wrapper-title">Je cherche un boulot</h2>
                <div className="wrapper-illustration">
                    <img className="wrapper-apparition" src={apply} alt="illustration of a man building blocks on a board" />
                </div>
                <div className="wrapper-buttons">
                    <Link to="/candidat/joblist"><button>Consulter les offres</button></Link>
                    <Link to="/candidat/inscription"><button>Créer mon espace candidat</button></Link>
                </div>
              </div>
              <div className="wrapper entreprise">
                <h2 className="wrapper-title">Je recrute !</h2>
                <div className="wrapper-illustration">
                    <img className="wrapper-apparition" src={recruit} alt="illustration of a man building blocks on a board" />
                </div>
                <div className="wrapper-buttons">
                    <Link to="/entreprise/ajout-publication"><button>Créer une offre</button></Link>
                    <Link to="/entreprise/inscription"><button>Créer mon espace entreprise</button></Link>
                </div>
              </div>  
            </section>
            <AboutUs />
        </div>
    )
}

export default Homepage;
