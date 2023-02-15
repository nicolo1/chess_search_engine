import { Grid } from '@mui/material';
import default_icon from '../../images/pawn_icon.png';
import Error from '../../pages/Error';
import { getDateStringify } from '../../service/app.service';
const User = ({ user }) => {
    return (  
        <div id='user-component-container'> 
            <Grid container>
                <Grid item>
                    <img id='user-icon' src={user.avatar ? user.avatar : default_icon} />
                </Grid>
                <Grid item>
                    <ul>
                        <li className='user-li'>
                            {user.username}{user.last_online ? `, last seen on ${(getDateStringify(user.last_online))}.` : ''}
                        </li>
                        <li className='user-li'>
                            Joined on {(getDateStringify(user.joined))}
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default User;