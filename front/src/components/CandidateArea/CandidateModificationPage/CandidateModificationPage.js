import { useDispatch, useSelector } from 'react-redux';
import api from '../../../api/api';
import './CandidateModificationPage.scss';
import { uptadeFirstname, uptadeLastname, uptadeEmail, uptadeNumber } from '../../../actions/candidate';
import { useState } from 'react';

function CandidateModificationPage() {
    // VERIFIER COMMENT PASSER EN REDUX POUR LES INPUTS CONTROLLE
    
    const user = useSelector(state => state.candidate.user);
    console.log(user);

    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        //Mettre en redirection si possible vers la page candidat
        event.preventDefault();
        // A finir 
        api.put(`/candidat/${user.id}`)
    }

    return(
        <div className="CandidateModificationPage" >
            <h1 className="CandidateModificationPage-title" >Modififer mes informations candidat</h1>

            <form className="CandidateModificationPage-inputs" onSubmit={handleSubmit}>
                <input className="CandidateModificationPage-input" 
                type="text" 
                id="firstname" 
                name="firstname" 
                value={firstname}
                onChange = {(event) => {
                    setFirstname(event.target.value)
                }}
                placeholder="Firstname">
                </input>

                <input className="CandidateModificationPage-input" 
                type="text" 
                id="lastname" 
                name="lastname" 
                value={lastname}
                onChange = {(event) => {
                    setLastname(event.target.value)
                }}
                placeholder="LastName">
                </input>

                <input className="CandidateModificationPage-input" 
                type="text" 
                id="firstname" 
                name="firstname" 
                //value = {user.email}
                onChange = {handleEmail}
                placeholder="Email">
                </input>

                <input className="CandidateModificationPage-input" 
                type="text" 
                id="firstname" 
                name="firstname" 
                //value = {user.phone}
                onChange = {handleNumber}
                placeholder="Number Phone">
                </input>

                

                <button className='CandidateModificationPage-button' type="submit">Enregistrer</button>
            </form>    

        </div>
    )
}

export default CandidateModificationPage;