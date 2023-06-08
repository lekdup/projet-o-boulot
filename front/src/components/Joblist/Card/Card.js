import './Card.scss';

function Card(){
    return(
        <div className='card'>
                        <div className ='card-bookmark'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16"> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#acadad"></path> </svg></div>

            <a href='#' className='card-title'> Saisie administrative </a>
            <div className='card-tags'> <p> ADMINISTRATION</p></div>

        </div>
    )
}

export default Card;