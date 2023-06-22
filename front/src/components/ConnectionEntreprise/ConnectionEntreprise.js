import './ConnectionEntreprise.scss';
import loginEntreprise from "../../assets/loginEntreprise.svg";
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { setTokenEntreprise, setUserEntreprise } from '../../actions/entreprise';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../../api/api';

function ConnectionEntreprise() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const tokenEntreprise = useSelector(state => state.entreprise.tokenEntreprise);

    const dispatch = useDispatch();


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg("");
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post( '/login_check' ,
            {
                email: email,
                password: password
            });
            console.log(res?.data);
            dispatch(setTokenEntreprise(res?.data?.token));
            const token = res?.data?.token;
            localStorage.setItem('token', token);
            setAuth({ email, token })
            setEmail('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.res) {
                setErrMsg('No Server Response');
            } else if(err.res?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if(err.res?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    console.log(tokenEntreprise);
    useEffect(() => {
        if (auth) {
            api.get('/entreprises/me')
            .then((res) => {
                    const roles = res?.data?.roles;
                    setAuth({ roles })
                    console.log(res?.data);
                    dispatch(setUserEntreprise(res.data))
                })
                .catch ((err) => {
                    console.error("Cannot fetch data");
                })
        }
    }, [])
    //         console.log(res.data.token);
    //         localStorage.setItem('token', res.data.token);
            
    //     } catch (err) {
    //         console.log("Mauvais email/password");
    //     }
    // }

    // useEffect (() => {
    
    //     if (tokenEntreprise) {
    //         api.get('/entreprises/me')
    //         .then ((res) => {
    //             console.log(res.data)
    //             console.log(email)
                
    //         })
    //         .catch(()=> 
    //         console.log('Pas de récupération de dataUser erreur API'))
    //     }
    // }, [tokenEntreprise]);

    return(
        <section className="ConnectionEntreprise" >
            <h1 className="ConnectionEntreprise-title">Connectez-vous</h1>
            <p ref={errRef} className={`ConnectionEntreprise-${errMsg ? "errmsg" : "offscreen"}`} aria-live="assertive">{errMsg}</p>
            <div className="ConnectionEntreprise-image" >
                <img
                    src={loginEntreprise} 
                    alt="illustration of a little girl and a smartphone beside with email and password form"
                />
            </div>
            <form
                className="ConnectionEntreprise-form"
                onSubmit={handleSubmit}
            >
                <label htmlFor="email">Identifiant</label>
                <div className="ConnectionEntreprise-form-withIconBefore" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path fill="#aaa" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    <input
                        id="email"
                        type="email"
                        inputMode="email"
                        name="email"
                        ref={userRef}
                        placeholder="e.g. jean@dupant.fr"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <label htmlFor="password">Mot de passe</label>
                <div className="ConnectionEntreprise-form-withIconBefore" >
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
                <p><a href="#">Mot de passe oublié ?</a></p>
                <button
                    className="ConnectionEntreprise-form-btn"
                    type="submit"
                >Connexion
                </button>
                <p>Vous n'avez pas encore de compte ? <Link to="/entreprise/inscription"><span>Inscrivez-vous !</span></Link></p>
            </form>
        </section>
    );
}

export default ConnectionEntreprise;