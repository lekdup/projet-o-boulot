import './ConnectionCandidate.scss';
import api from '../../api/api';
import loginCandidate from '../../assets/login-candidate.svg';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../actions/candidat';
import { Link } from 'react-router-dom';

function ConnectionCandidate() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const user = useSelector(state => state.candidat.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/login_check', {
            email: email,
            password: password,
        })
        .then((res) => {
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            window.history.back();
            setToken(res.data.token);
            console.log(token)

        })
        .catch(() => {
            console.log("Mauvais email/password");
        })
    }

    useEffect (() => {
        // On vérifie si nous avons reçu un token lors de la tentative de connexion 
        // Si oui, cela veut dire que le couple email/password existe dans l'API
        if (token) {
            // requete GET pour récupérer tous les candidats
            api.get('/candidats/me')
            .then ((res) => {
                console.log(res.data)
                console.log(email)
                // On filtre les résultats pour ne garder que les données associées à l'email entré par l'utilisateur
                const connectedCandidate = res.data.find((candidate) => candidate.email === email);
                // On set avec le résultat filtré
                dispatch(setUser(connectedCandidate))
                console.log(connectedCandidate)
            })
            .catch(()=> 
            console.log('Pas de récupération de dataUser erreur API'))
        } else {console.log("Il n'y a pas de token")}

    }, [token]);

    return(
        <section className="ConnectionCandidate" >
            <h1 className="ConnectionCandidate-title">Connectez-vous</h1>
            <div className="ConnectionCandidate-image" >
                <img
                    src={loginCandidate}
                    alt="illustration of a little girl and a smartphone beside with email and password form"
                />
            </div>
            <form
                className="ConnectionCandidate-form"
                onSubmit={handleSubmit}
            >
                <label htmlFor="email">Identifiant</label>
                <div className="ConnectionCandidate-form-withIconBefore" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path fill="#aaa" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input
                        id="email"
                        type="email"
                        inputMode="email"
                        name="email"
                        placeholder="e.g. jean@dupant.fr"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <label htmlFor="password">Mot de passe</label>
                <div className="ConnectionCandidate-form-withIconBefore" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" >
                    <path fill="#aaa" d="M144 128v64H304V128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zM48 256V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16z"/></svg>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <p><a href="#"> Mot de passe oublié ?</a></p>
                <button
                    className="ConnectionCandidate-form-btn"
                    type="submit"
                >Connexion
                </button>
                <p>Vous n'avez pas encore de compte ? <Link to="/candidat/inscription"><span>Inscrivez-vous !</span></Link></p>
            </form>
        </section>
    );
}

export default ConnectionCandidate;