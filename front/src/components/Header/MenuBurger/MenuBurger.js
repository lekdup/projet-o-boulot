import './MenuBurger.scss';

function MenuBurger() {
    return( 
        <div className="MenuBurger">
            <div className="MenuBurger-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="hamburger-menu"><path d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z"></path></svg>
            </div>
            <ul className="MenuBurger-nav">
                <li>O'Boulot
                    <ul>
                        <li>Qui sommes-nous</li>
                        <li>Prestations</li>
                        <li>Contact</li>
                    </ul>
                </li>
                <li>Candidat
                    <ul>
                        <li>Trouver un Boulot</li>
                    </ul>
                </li>
                <li>Entreprise
                    <ul>
                        <li>Publier un Boulot</li>
                    </ul>
                </li>
                <li>Actualités</li>
                <li>Aide</li>
                <li>Contact</li>
            </ul>
        </div>
    ) 
}

export default MenuBurger;