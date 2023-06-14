import Card from "../Card/Card";
import './CardsList.scss';
import {useState} from 'react';

function CardsList({ offers }){

    

    const [isClicked, setIsClicked] = useState(() => Array.from({ length: offers.length }, () => false));

    const handleClick = (index) => {
        setIsClicked((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };
    
    return(
        <div className='cardsList'>
            {offers.map((offer, index) => (
                <div className='card'>
                <div className ='card-bookmark'>

                {isClicked[index] 
                
                ? <svg onClick={() => handleClick(index)} id={offer.id} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#adadad"></path> </svg> 
                
                : 
                <svg onClick={() => handleClick(index)} id={offer.id} xmlns="http://www.w3.org/2000/svg" width="25" height="" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16"> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#acadad"></path> </svg> }
        </div>
        
        

    <a href='#' className='card-title'> {offer.entitled} </a>
    <div className='card-tags'> <p> {offer.place}</p></div>

</div>
        ))}
    

        </div>
        

    )
    
}

export default CardsList;