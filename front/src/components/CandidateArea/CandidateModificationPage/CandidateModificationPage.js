import './CandidateModificationPage.scss';

function CandidateModificationPage() {

    return(
        <div className="CandidateModificationPage" >
            <h1 className="CandidateModificationPage-title" >Modififer mes informations candidat</h1>

            <form className="CandidateModificationPage-inputs" >
                <input className="CandidateModificationPage-input" type="text" id="firstname" name="firstname" placeholder="Firstname"></input>
                <input className="CandidateModificationPage-input" type="text" id="firstname" name="firstname" placeholder="LastName"></input>
                <input className="CandidateModificationPage-input" type="text" id="firstname" name="firstname" placeholder="Email"></input>
                <input className="CandidateModificationPage-input" type="text" id="firstname" name="firstname" placeholder="Number Phone"></input>
                <input className="CandidateModificationPage-input" type="text" id="firstname" name="firstname" placeholder="Email"></input>

                <button className='CandidateModificationPage-button' type="submit">Enregistrer</button>
            </form>    

        </div>
    )
}

export default CandidateModificationPage;