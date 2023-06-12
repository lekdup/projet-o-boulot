import './Joblist.scss';
import CardsList from './CardsList/CardsList';
import Jobcard from '../Jobcard/Jobcard';

function Joblist(){
    return(
        <div className='Joblist'>
        <h1 className='Joblist-title'> Les offres d'emploi</h1>
        <form className='Joblist-searchbar'>
            <input className='Joblist-searchbar-input' type="text" name="searchbar" placeholder="'Hotesse d'accueil' "></input> 
            <button className='Joblist-searchbar-button'> o'boulot ! </button>
            </form>
        <div className='Joblist-content'>
            
            
        <div className='showJobList'>

        <CardsList/>
        </div>
        <div className='showJobCard'>
        <Jobcard/>

        </div>
        </div>
        

        </div>
    )
}

export default Joblist;