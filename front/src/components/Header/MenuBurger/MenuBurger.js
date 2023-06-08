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

    console.log(menuExtend);
    return( 
        <div className="MenuBurger">
            {toggle && (
                <ul className="MenuBurger-nav">
                    <li onClick={handleClick} data-value="O'Boulot">O'Boulot <span>&gt;</span>
                        {menuExtend === "O'Boulot" && (
                            <ul className="MenuBurger-nav-extend">
                                <li>Qui sommes-nous</li>
                                <li>Prestations</li>
                                <li>Contact</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={handleClick} data-value="Candidat">Candidat <span>&gt;</span>
                    {menuExtend === "Candidat" && (
                        <ul className="MenuBurger-nav-extend">
                            <li>Trouver un Boulot</li>
                            <li>Se connecter</li>
                        </ul>
                    )}
                    </li>
                    <li onClick={handleClick} data-value="Entreprise">Entreprise <span>&gt;</span>
                    {menuExtend === "Entreprise" && (
                        <ul className="MenuBurger-nav-extend">
                            <li>Publier un Boulot</li>
                            <li>Se connecter</li>
                        </ul>
                    )}
                    </li>
                    <li>Actualités</li>
                    <li>Aide</li>
                    <li>Contact</li>
                </ul>
            )}
            <button
                className="MenuBurger-logo"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <span className="MenuBurger-logo-bar"></span>
            </button>
        </div>
    ) 
}

export default MenuBurger;