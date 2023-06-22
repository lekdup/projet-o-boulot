import './MissionsList.scss';
import MissionsListElement from './MissionsListElement/MissionsListElement';

function MissionsList({menuValue}){
    return(
        <div className='MissionsList'>
        <MissionsListElement menuValue={menuValue}/>
      

</div>
    )
}
export default MissionsList;
