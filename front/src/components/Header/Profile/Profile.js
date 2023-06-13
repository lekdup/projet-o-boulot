import { Link } from 'react-router-dom';
import './Profile.scss';
import { useState } from 'react';

function Profile({ logoColors }) {
    const [toggle, setToggle] = useState(false);

    return(
        <section className='profile'>
            <img
                className="profile-image"
                src={logoColors}
                alt="profile icon"
                onClick={() => {
                    setToggle(!toggle);
                }}
            />        
            <div className={`profile-select ${toggle ? "show" : ""}`} >
                <Link to="/candidat"><button className="profile-select-btn">Candidat</button></Link>
                <Link to="/entreprise"><button className="profile-select-btn">Entreprise</button></Link>
            </div>
        </section>
    )
}

export default Profile;