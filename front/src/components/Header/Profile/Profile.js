import { Link } from 'react-router-dom';
import './Profile.scss';
import { useEffect, useRef, useState } from 'react';

function Profile({ logoColors }) {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.addEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleButtonClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return(
        <section className='profile'>
            <img
                className="profile-image"
                src={logoColors}
                alt="profile icon"
                ref={buttonRef}
                onClick={handleButtonClick}
            />        
            <ul className={`profile-select ${isOpen ? "show" : ""}`} >
                <Link to="/candidat"><li className="profile-select-btn">Candidat</li></Link>
                <Link to="/entreprise"><li className="profile-select-btn">Entreprise</li></Link>
            </ul>
        </section>
    )
}

export default Profile;