import { Link } from 'react-router-dom';
import './MenuBurger.scss';
import { useState } from 'react';

function MenuBurger() {
    const [toggle, setToggle] = useState(false);
    const [menuExtend, setMenuExtend] = useState("");

    const handleClick = (e) => {
        const menuValue = e.target.getAttribute('data-value');
        if (menuExtend === menuValue) {
            setMenuExtend('');
        } else {
            setMenuExtend(menuValue)
        }
    };

    return( 
        <nav className={`MenuBurger ${toggle ? "show" : ""}`}>
            <ul className="MenuBurger__nav">
                <li onClick={handleClick} data-value="O'Boulot">O'Boulot <span className="MenuBurger__nav--arrow">&gt;</span>
                    {menuExtend === "O'Boulot" && (
                        <ul className="MenuBurger__nav--extend">
                            <li><Link to="/qui-sommes-nous">Qui sommes-nous</Link></li>
                            <li>Prestations</li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    )}
                </li>
                <li onClick={handleClick} data-value="Candidat">Candidat <span className="MenuBurger__nav--arrow">&gt;</span>
                {menuExtend === "Candidat" && (
                    <ul className="MenuBurger__nav--extend">
                        <li><Link to="/candidat/joblist">Trouver un boulot</Link></li>
                        <li><Link to="/candidat/login">Se connecter</Link></li>
                    </ul>
                )}
                </li>
                <li onClick={handleClick} data-value="Entreprise">Entreprise <span className="MenuBurger__nav--arrow">&gt;</span>
                {menuExtend === "Entreprise" && (
                    <ul className="MenuBurger__nav--extend">
                        <li>Publier un Boulot</li>
                        <li><Link to="/entreprise/login">Se connecter</Link></li>
                    </ul>
                )}
                </li>
                <li>Actualités</li>
                <li><Link to="/aide">Aide</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button
                className="MenuBurger__logo"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <span className="MenuBurger__logo--bar"></span>
            </button>
        </nav>
    ) 
}

export default MenuBurger;