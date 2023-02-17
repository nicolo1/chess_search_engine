import { Grid } from '@mui/material';
import default_icon from '../../images/pawn_icon.png';
import { getDateStringify, getLongDateStringify } from '../../service/app.service';
import { getCountry } from '../../service/user.service';
import CakeIcon from '@mui/icons-material/Cake';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';

// TODO check line 19 : {user.last_online ? '' : ''} <-- necessary?
const User = ({ user }) => {
    return (  
        <div id='user-component-container'> 
            <Grid container>
                <Grid item>
                    <img id='user-image' src={user.avatar ? user.avatar : default_icon} />
                </Grid>
                <Grid item>
                        <span id='user-span-header'>{user.username} <img crossOrigin="anonymous" id='user-country-image' src={getCountry(user.country)}/> </span>
                        <Grid id='user-icons-container' container>
                            <Grid item xs={4}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ScheduleIcon/> 
                                    </Grid>
                                    <Grid item xs={12}>
                                        {getDateStringify(user.last_online)}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <CakeIcon/> 
                                    </Grid>
                                    <Grid item xs={12}>
                                        {getDateStringify(user.joined)}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <PeopleIcon/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {user.followers}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                </Grid>
            </Grid>
        </div>
    );
}
 
export default User;