import './ConnectionEntreprise.scss';
import loginEntreprise from "../../assets/loginEntreprise.svg";

function ConnectionEntreprise() {
    return(
        <section className="Connection" >
            <h1 className="Connection-title">Connectez-vous</h1>
            <div className="Connection-image" >
                <img
                    src={loginEntreprise} 
                    alt="illustration of a little girl and a smartphone beside with email and password form"
                />
            </div>
            <form className="Connection-form" >
                <label for="email">Identifiant</label>
                <div className="Connection-form-withIconBefore" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path fill="#aaa" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input id="email" type="email" inputMode="email" name="email" placeholder="e.g. jean@dupant.fr"/>
                </div>
                <label for="password">Mot de passe</label>
                <div className="Connection-form-withIconBefore" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" >
                    <path fill="#aaa" d="M144 128v64H304V128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zM48 256V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16z"/></svg>
                    <input id="password" type="password" name="password" />
                </div>
                <p><a href="#">Mot de passe oublié ?</a></p>
                <button className="Connection-form-btn">Connexion</button>
                <p>Vous n'avez pas encore de compte ? <a href="#">Inscrivez-vous !</a></p>
            </form>
        </section>
    );
}

export default ConnectionEntreprise;