import { Grid } from '@mui/material';
import default_icon from '../../images/pawn_icon.png';
import { getDateStringify, getLongDateStringify } from '../../service/app.service';

// TODO check line 19 : {user.last_online ? '' : ''} <-- necessary?
const User = ({ user }) => {
    return (  
        <div id='user-component-container'> 
            <Grid container>
                <Grid item>
                    <img id='user-icon' src={user.avatar ? user.avatar : default_icon} />
                </Grid>
                <Grid item>
                    <ul className='user-ul'>
                        <li className='user-li-header'>
                        <span id='user-span-header'>{user.username}</span>{user.last_online ? ` - last seen on ${(getLongDateStringify(user.last_online))}.` : ''}
                        </li>
                        <li className='user-li-sub-header'>
                            Joined on {(getDateStringify(user.joined))}
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default User;