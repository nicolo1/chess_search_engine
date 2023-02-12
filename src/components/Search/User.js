import default_icon from '../../images/pawn_icon.png';
import Error from '../../pages/Error';

const User = ({ user }) => {
    if(user) {
        return (  
            <div id='user-component-container'> 
                <img id='user-icon' src={user.avatar ? user.avatar : default_icon} />
                <p>{user.username}{user.last_online ? `, last seen on ${(new Date(user.last_online*1000)).toISOString().split("T")[0]}.` : ''}</p>
                <p>Joined on {(new Date(user.joined*1000)).toISOString().split("T")[0]}</p>
            </div>
        );
    } else {
        return (
            <Error error={'User does not exist.'}/>
        );
    }
    
}
 
export default User;