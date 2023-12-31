
import './CandidateDataPage.scss';
import logoCandidateDataPage from '../../../assets/logoCandidateDataPage.svg'

import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



function CandidateDataPage() {

	const user = useSelector(state => state.candidate.user);

    return(
        <div className="CandidateDataPage">
        
            <h1 className="CandidateDataPage-title">Mes données personnelles</h1>
			

			<img className="CandidateDataPage-img" src={logoCandidateDataPage} alt="Logo Candidate Data Page"></img>

            <form className="CandidateDataPage-form" action="/">
		    <div>
			
				<div className="CandidateDataPage-input" >
				    <label className="CandidateDataPage-input-label" htmlFor="name">{user.lastname} </label>
					
				</div>

				<div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" htmlFor="prenom">{user.firstname} </label>
					
				</div>

                <div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" htmlFor="prenom">{user.phone} </label>
					
				</div>

				<div className="CandidateDataPage-input" >
					<label className="CandidateDataPage-input-label" htmlFor="email">{user.email} </label>
					
				</div>

				<div className="CandidateDataPage-p" >Veuillez verifier l'exactitude de vos données personnelles, ces dernière sont très importantes. Ces dernière serviront à établir et à éditer votre contrat de travail.</div>

				<div className="CandidateDataPage-input-buttons">
					<Link to="/candidat/mes-donnees/modification"><p className="CandidateDataPage-input-button" >Modifier</p></Link>
                    <Link to="/"><p className="CandidateDataPage-input-button">Supprimer</p></Link>
				</div>

		</div>
        </form>

        </div>
    )
}

export default CandidateDataPage;