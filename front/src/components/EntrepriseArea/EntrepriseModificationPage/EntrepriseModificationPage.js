import './EntrepriseModificationPage.scss';

function EntrepriseModificationPage() {

    return(
        <div className="EntrepriseModificationPage" >
            <h1 className="EntrepriseModificationPage-title" >Modififer mes informations entreprise</h1>

            <form className="EntrepriseModificationPage-inputs" >
                <input className="EntrepriseModificationPage-input" type="text" id="firstname" name="firstname" placeholder="Name entreprise"></input>
                <input className="EntrepriseModificationPage-input" type="text" id="firstname" name="firstname" placeholder="Number entreprise"></input>
                <input className="EntrepriseModificationPage-input" type="text" id="firstname" name="firstname" placeholder="Email"></input>
                <input className="EntrepriseModificationPage-input" type="text" id="firstname" name="firstname" placeholder="Number Phone"></input>
                <input className="EntrepriseModificationPage-input" type="text" id="firstname" name="firstname" placeholder="SIRET"></input>

                <button className='EntrepriseModificationPage-button' type="submit">Enregistrer</button>
            </form>    

        </div>
    )
}

export default EntrepriseModificationPage;