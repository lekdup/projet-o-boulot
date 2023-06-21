import { useDispatch, useSelector } from 'react-redux';
import api from '../../../api/api';
import './CandidateModificationPage.scss';
import { uptadeFirstname, uptadeLastname, uptadeEmail, uptadeNumber } from '../../../actions/candidate';

function CandidateModificationPage() {

    const firstname = useSelector(state => state.candidate.firstname);
    const lastname = useSelector(state => state.candidate.lastname);
    const email = useSelector(state => state.candidate.email);
    const number = useSelector(state => state.candidate.number);
    
    const handleFirstname = (event) => {
        dispatch(uptadeFirstname(event.target.value))
    }
    const handleLastname = (event) => {
        dispatch(uptadeLastname(event.target.value))
    }
    const handleEmail = (event) => {
        dispatch(uptadeEmail(event.target.value))
    }
    const handleNumber = (event) => {
        dispatch(uptadeNumber(event.target.value))
    }


    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        //Mettre en redirection si possible vers la page candidat
        event.preventDefault();
        // A finir 
        api.put('/candidat/:id')
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
                onChange = {handleFirstname}
                placeholder="Firstname">
                </input>

                <input className="CandidateModificationPage-input" 
                type="text" 
                id="firstname" 
                name="firstname" 
                value={lastname}
                onChange = {handleLastname}
                placeholder="LastName">
                </input>

                <input className="CandidateModificationPage-input" 
                type="text" 
                id="firstname" 
                name="firstname" 
                value = {email}
                onChange = {handleEmail}
                placeholder="Email">
                </input>

                <input className="CandidateModificationPage-input" 
                type="text" 
                id="firstname" 
                name="firstname" 
                value = {number}
                onChange = {handleNumber}
                placeholder="Number Phone">
                </input>

                

                <button className='CandidateModificationPage-button' type="submit">Enregistrer</button>
            </form>    

        </div>
    )
}

export default CandidateModificationPage;