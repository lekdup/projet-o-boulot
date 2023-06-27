import apply from '../../assets/apply.svg';
import './Candidat.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Candidat() {

    /*
    const [load, setLoad] = useState(0);

    const handleLoad = () => {
        let load = document.body.offsetHeight;
        setLoad(load);
    };

    useEffect(() => {
        window.addEventListener('load', handleLoad, { passive: true });

    }, []);
    */

    return(
        <div className="wrapper-candidat">
            <h2 className="wrapper-candidat-title">Je cherche un boulot</h2>
            <div className="wrapper-candidat-logo">
                <img className={/*`${load ? */ "wrapper-candidat-apparition" /*:"wrapper-candidat-disparition"}`*/ } src={apply} alt="illustration of a man building blocks on a board" />
            </div>
            <div className="wrapper-candidat-buttons">
                <Link to="/candidat/joblist"><button>Consulter les offres</button></Link>
                <Link to="/candidat/inscription"><button>Créer mon espace candidat</button></Link>
            </div>
        </div>
    )
}

export default Candidat;