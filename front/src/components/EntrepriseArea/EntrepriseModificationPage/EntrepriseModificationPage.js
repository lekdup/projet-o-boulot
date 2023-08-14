import { useSelector } from 'react-redux';
import './EntrepriseModificationPage.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/api';

function EntrepriseModificationPage() {
    const navigate = useNavigate();

    const userEntreprise = useSelector(state => state.entreprise.userEntreprise);

    const [email, setEmail] = useState(userEntreprise.email);
    const [name, setName] = useState(userEntreprise.name);
    const [firstname, setFirstname] = useState(userEntreprise.firstname);
    const [lastname, setLastname] = useState(userEntreprise.lastname);
    const [phone, setPhone] = useState(userEntreprise.phone);
    const [address, setAddress] = useState(userEntreprise.address);
    const [postalCode, setPostalCode] = useState(userEntreprise.postalCode);
    const [city, setCity] = useState(userEntreprise.city);
    const [presentation, setPresentation] = useState(userEntreprise.presentation);
    const [gender, setGender] = useState(userEntreprise.gender);

    // let createdAt = userEntreprise.createdAt;
    let updatedAt = new Date().toJSON().slice(0, 10);

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedInfo = {
            "email": email,
            "name": name,
            "firstname": firstname,
            "lastname": lastname,
            "phone": phone,
            "address": address,
            "postalCode": postalCode,
            "city": city,
            "presentation": presentation,
            "gender": gender,
            "updatedAt": updatedAt
        }
        api.put(`entreprises/${userEntreprise.id}`, editedInfo)
            .then(res => {
                // console.log(res.data);
                navigate('/entreprise/mes-donnees')
            }).catch (err => {
                console.error(err.status);
            })
    }
    return(
        <div className="EntrepriseModificationPage" >
            <h1 className="EntrepriseModificationPage-title" >Modifier mes informations entreprise</h1>

            <form className="EntrepriseModificationPage-inputs" onSubmit={handleSubmit}>
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    placeholder="Nom de l'entreprise"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Prénom"
                    value={firstname}
                    onChange={(e) => {
                        setFirstname(e.target.value)
                    }}
                />
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Nom"
                    value={lastname}
                    onChange={(e) => {
                        setLastname(e.target.value)
                    }}
                />
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="telephone"
                    name="telephone"
                    placeholder="Téléphone"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="adresse"
                    name="adresse"
                    placeholder="Adresse"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value)
                    }}
                />
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="code-postale"
                    name="code-postale"
                    placeholder="Code postale"
                    value={postalCode}
                    onChange={(e) => {
                        setPostalCode(e.target.value)
                    }}
                />
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="ville"
                    name="ville"
                    placeholder="Ville"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value)
                    }}
                />
                <select
                    className="EntrepriseModificationPage-input"
                    id="genre"
                    onChange={(e) => {
                        setGender(e.target.value)
                    }}
                >
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                    <option value="autre">Autre</option>
                </select>
                <input
                    className="EntrepriseModificationPage-input"
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    placeholder="Présentation"
                    value={presentation}
                    onChange={(e) => {
                        setPresentation(e.target.value)
                    }}
                />
                <button className='EntrepriseModificationPage-button' type="submit">Enregistrer</button>
            </form>    

        </div>
    )
}

export default EntrepriseModificationPage;
