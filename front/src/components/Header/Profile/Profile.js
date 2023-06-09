import './Profile.scss';
import anonyme from '../../../assets/anonyme.png';
import { useState } from 'react';

function Profile() {
    const [toggle, setToggle] = useState(false);

    console.log(toggle);
    return(
        <section className='profile'>
            <img
                className="profile-image"
                src={anonyme}
                alt="profile icon"
                onClick={() => {
                    setToggle(!toggle);
                }}
            />        
            <div className={`profile-select ${toggle ? "show" : ""}`} >
                <button className="profile-select-btn candidat">Candidat</button>
                <button className="profile-select-btn entreprise">Entreprise</button>
            </div>
        </section>
    )
}

export default Profile;