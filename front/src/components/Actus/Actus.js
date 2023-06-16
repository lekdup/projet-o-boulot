import './Actus.scss';
import article from '../../assets/article.png'

function Actus(){
    return(
        <div className='Actus'>
            <h1> Actualités </h1>
            <p> Quoi de neuf dans le monde de l'emploi ?</p>
            <form className='Actus-searchbar'>
            <input className='Actus-searchbar-input' type="text" name="searchbar" placeholder="Votre recherche"></input> 
            <button className='Actus-searchbar-button'> Go ! </button>
            </form>

            <div className='Actus-list'> 
            <div className='Actus-list-element'>
            <img className='Actus-list-element-img' src={article} alt="illustration of woman reading newspaper" />
            <div className='Actus-list-element-text'>
            <a href="#" className='Actus-list-element-text-title'> Du nouveau dans le monde de l'événementiel</a>
            <p className='Actus-list-element-text-content'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            
            </div>
            </div>
            

        </div>
    )
}

export default Actus;
