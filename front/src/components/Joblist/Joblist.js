import './Joblist.scss';
import CardsList from './CardsList/CardsList';

function Joblist(){
    return(
        <div className='Joblist'>
        <h1 className='Joblist-title'> Les offres d'emploi</h1>
        <CardsList/>
        </div>
    )
}

export default Joblist;