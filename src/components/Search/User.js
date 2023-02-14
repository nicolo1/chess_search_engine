import default_icon from '../../images/pawn_icon.png';
import Error from '../../pages/Error';
import { getDateStringify } from '../../service/app.service';

const User = ({ user }) => {
    if(user) {
        return (  
            <div id='user-component-container'> 
                <img id='user-icon' src={user.avatar ? user.avatar : default_icon} />
                <p>{user.username}{user.last_online ? `, last seen on ${(getDateStringify(user.last_online))}.` : ''}</p>
                <p>Joined on {(getDateStringify(user.joined))}</p>
            </div>
        );
    } else {
        return (
            <Error error={'User does not exist.'}/>
        );
    }
    
}
 
export default User;