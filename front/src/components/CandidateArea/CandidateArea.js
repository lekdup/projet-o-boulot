import'./CandidateArea.scss';
import logoCandidatArea from '../../assets/logoCandidatArea.svg';
import { Link } from 'react-router-dom';

import {useSelector} from 'react-redux';


function CandidatArea () {

    const user = useSelector(state => state.candidate.user);
    console.log(user);

    return(
        <div className="CandidateArea">
            
            <h1 className="CandidateArea-title"> Bonjour {user.firstname ?? user.firstname} </h1>

            <img className="EntrepriseArea-img" src={logoCandidatArea} alt="Logo Candidate Area Page" />
            
            <div className='CandidateArea-buttons'>
            <Link to="/candidat/mes-donnees"><button className='CandidateArea-button'> Mes données personnelles</button></Link>
                
                <button className='CandidateArea-button' >Mes missions</button>
                <button className='CandidateArea-button' >Mes alertes</button>
                <button className='CandidateArea-button' >Mes documents</button>
            </div>

        </div>
    )
}

export default CandidatArea;