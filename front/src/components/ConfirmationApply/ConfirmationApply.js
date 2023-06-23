import './ConfirmationApply.scss'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useState } from 'react';

function ConfirmationApply({offer, isOpen, setIsOpen}) {
 console.log(isOpen);

 const handleCancel = () => {
    setIsOpen(false);
 }

 const [showModal, setShowModal] = useState(false);
 
 const handleModal = () => {
    console.log("je confirme ma candidature")
    setShowModal(true)
 }

    const userConnected = useSelector(state => state.candidate.user);
    return (
        <div className="body">
       
        {showModal ?  (<div className="confirmationModal">
          <div className="confirmationModal-content">
            <h2>Merci pour votre candidature !</h2>
            <p>Votre candidature à l'offre "{offer.entitled}" a été envoyée avec succès.</p>
           
              <Link to='/candidat/joblist'><button className="confirmationModal-button" onClick={handleCancel}>Retour</button></Link>
          </div>
        </div>) : ( <div className={showModal? "confirmationApply overlay":"confirmationApply"}>

<h1 className="confirmationApply-title">Vous souhaitez postuler à l'offre : {offer.entitled}</h1>
<p className="confirmationApply-content">
    Veuillez vérifier les informations suivantes, elles serviront à établir et éditer votre contrat de travail, pour les modifier, rendez-vous sur votre <Link className='confirmationApply-link' to='/candidat/mes-donnees/modification'>espace personnel</Link> : 
    <ul className="confirmationApply-userData">
        <li> <span>Nom :</span> {userConnected.lastname}</li>
        <li> <span>Prénom :</span> {userConnected.firstname}</li>
        <li> <span>Adresse :</span> {userConnected.address}</li>
        <li> <span>Ville :</span> {userConnected.postalCode}</li>
        <li> <span>Email :</span> {userConnected.email}</li>
        <li> <span>Téléphone :</span> {userConnected.phone}</li>
     </ul>
</p>
<button className="confirmationApply-btn" onClick={handleModal}> J'envoie ma candidature </button>
<button className="confirmationApply-btn cancel" onClick={handleCancel} > Annuler</button>
</div>)}
        
        </div>
        
    )
}

export default ConfirmationApply;