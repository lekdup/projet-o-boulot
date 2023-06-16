import './Error404.scss';

function Error404() {
    return (
        <div className="Error404">
            <h1>Erreur 404</h1>
            <div className="Error404-image">
                <img src="https://usagif.com/wp-content/uploads/2021/09/got-em-m.gif" alt="someone holding a phone in hand and laughing" />
            </div>
            <p>La page n'existe pas encore.</p>
            <p>Revenez dans 3 ans !</p>
        </div>
    )
}

export default Error404;