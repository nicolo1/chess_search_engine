import { Grid } from '@mui/material';
import default_icon from '../../images/pawn_icon.png';
import { getDateStringify, getLongDateStringify } from '../../service/app.service';
import { getCountry } from '../../service/user.service';
import CakeIcon from '@mui/icons-material/Cake';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import SearchBar from '../Home/SearchBar';
import Tooltip from '@mui/material/Tooltip';


// TODO check line 19 : {user.last_online ? '' : ''} <-- necessary?
const User = ({ user }) => {
    return (  
        <div id='user-component-container'> 
            <Grid container>
                <Grid item xs={2.5}>
                    <img id='user-image' src={user.avatar ? user.avatar : default_icon} />
                </Grid>
                <Grid item xs={7}>
                    <div id='user-details'> 
                        <span id='user-span-header'>
                            {user.username} 
                            <Tooltip title={user.country.slice(-2)} placement="top">
                                <img crossOrigin="anonymous" id='user-country-image' src={getCountry(user.country)}/> 
                            </Tooltip>
                        </span>
                        <Grid id='user-icons-container' container>
                            <Grid item xs={4}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Tooltip title="Last Seen" placement="top">
                                            <ScheduleIcon/> 
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Tooltip title={getLongDateStringify(user.last_online)} placement="bottom">
                                            <span>{getDateStringify(user.last_online)}</span>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Tooltip title="Joined" placement="top">
                                            <CakeIcon/> 
                                        </Tooltip>
                                        
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Tooltip title={getLongDateStringify(user.joined)} placement="bottom">
                                            <span>{getDateStringify(user.joined)}</span>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Tooltip title="Followers" placement="top">
                                            <PeopleIcon/>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {user.followers}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                        
                </Grid>
                <Grid item xs={2.5}>
                    <div id={'user-searchbar'}>
                        <SearchBar size={150}/> 
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default User;