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
        <nav className={`MenuBurger ${toggle ? "show" : ""}`} >
            <ul className="MenuBurger__nav">
                <li onClick={handleClick} data-value="O'Boulot">O'Boulot <span className="MenuBurger__nav--arrow">&gt;</span>
                    {menuExtend === "O'Boulot" && (
                        <ul className="MenuBurger__nav--extend">
                            <Link to="/qui-sommes-nous"><li>Qui sommes-nous</li></Link>
                            <Link to="/"><li>Prestations</li></Link>
                            <Link to="/contact"><li>Contact</li></Link>
                        </ul>
                    )}
                </li>
                <li onClick={handleClick} data-value="Candidat">Candidat <span className="MenuBurger__nav--arrow">&gt;</span>
                {menuExtend === "Candidat" && (
                    <ul className="MenuBurger__nav--extend">
                        <Link to="/candidat/joblist"><li>Trouver un boulot</li></Link>
                        <Link to="/candidat/login"><li>Se connecter</li></Link>
                    </ul>
                )}
                </li>
                <li onClick={handleClick} data-value="Entreprise">Entreprise <span className="MenuBurger__nav--arrow">&gt;</span>
                {menuExtend === "Entreprise" && (
                    <ul className="MenuBurger__nav--extend">
                        <Link to="/"><li>Publier un Boulot</li></Link>
                        <Link to="/entreprise/login"><li>Se connecter</li></Link>
                    </ul>
                )}
                </li>
                <Link to="/actualites"><li>Actualités</li></Link>
                <Link to="/aide"><li>Aide</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
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