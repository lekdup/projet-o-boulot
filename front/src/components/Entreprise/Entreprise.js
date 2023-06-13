import { useState } from 'react';
import { useEffect } from 'react';
import recruit from '../../assets/recruit.svg';
import './Entreprise.scss';

function Entreprise() {

    const [load, setLoad] = useState(0);

    const handleLoad = () => {
        let load = document.body.offsetHeight;
        console.log(load);
        setLoad(load);
    };

    useEffect(() => {
        window.addEventListener('load', handleLoad, { passive: true });

    }, []);

    return(
        <div className="wrapper-entreprise">
            <h2 className="wrapper-entreprise-title">Je recrute !</h2>
            <div className="wrapper-entreprise-logo">
                <img className={`${load ? "wrapper-entreprise-apparition" : "wrapper-entreprise-disparition"}`} src={recruit} alt="illustration of a man building blocks on a board" />
            </div>
            <div className="wrapper-entreprise-buttons">
                <button className='wrapper-entreprise-button'>Créer une offre</button>
                <button className='wrapper-entreprise-button'>Je souhaite en savoir +</button>
            </div>
        </div>       
    )
}

export default Entreprise;