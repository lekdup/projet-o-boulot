import'./CandidateArea.scss';
import logoCandidatArea from '../../assets/logoCandidatArea.svg';
import { setTokenCandidate } from '../../actions/candidate';

import { Link } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';


function CandidatArea () {
    const tokenCandidate = useSelector(state => state.candidate.tokenCandidate);
    const user = useSelector(state => state.candidate.user);

    const dispatch = useDispatch();

    useEffect(() => {
        // Récupérer le token depuis localStorage et le stocker dans le state si nécessaire
        const storedToken = localStorage.getItem('token');
        if (!tokenCandidate && storedToken) {
          dispatch(setTokenCandidate(storedToken));
        }
      }, [dispatch, tokenCandidate]);

    return(
        <div className="CandidateArea">
            
            <h1 className="CandidateArea-title"> Bonjour {user.firstname} </h1>

            <img className="EntrepriseArea-img" src={logoCandidatArea} alt="Logo Candidate Area Page" />
            
            <div className='CandidateArea-buttons'>
            <Link to="/candidat/mes-donnees"><button className='CandidateArea-button'> Mes données personnelles</button></Link>
            <Link to="/candidat/mes-donnees/missions"><button className='CandidateArea-button'> Mes missions</button></Link>
    
                <button className='CandidateArea-button' >Mes alertes</button>
                <button className='CandidateArea-button' >Mes documents</button>
            </div>

        </div>
    )
}

export default CandidatArea;