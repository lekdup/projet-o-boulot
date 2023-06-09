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
                            <li>Qui sommes-nous</li>
                            <li>Prestations</li>
                            <li>Contact</li>
                        </ul>
                    )}
                </li>
                <li onClick={handleClick} data-value="Candidat">Candidat <span className="MenuBurger__nav--arrow">&gt;</span>
                {menuExtend === "Candidat" && (
                    <ul className="MenuBurger__nav--extend">
                        <li>Trouver un Boulot</li>
                        <li>Se connecter</li>
                    </ul>
                )}
                </li>
                <li onClick={handleClick} data-value="Entreprise">Entreprise <span className="MenuBurger__nav--arrow">&gt;</span>
                {menuExtend === "Entreprise" && (
                    <ul className="MenuBurger__nav--extend">
                        <li>Publier un Boulot</li>
                        <li>Se connecter</li>
                    </ul>
                )}
                </li>
                <li>Actualités</li>
                <li>Aide</li>
                <li>Contact</li>
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