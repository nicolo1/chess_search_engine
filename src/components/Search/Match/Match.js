import Grid from '@mui/material/Grid'; 
import SquareIcon from '@mui/icons-material/Square';
import { getResult, isWin } from '../../../service/match.service';
import { getDateStringify } from '../../../service/app.service';
const Match = ({ searchedUser, match }) => {
    return (
        <div id='match-component-container'> 
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ul className='match-ul'>
                        <li className='match-li'><SquareIcon sx={{ color: 'white' }}/>{match.white.username}({match.white.rating})</li>
                        <li className='match-li'><SquareIcon/>{match.black.username}({match.black.rating})</li>
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ul>
                                <li className='match-result-li'>{getResult(match.white.result)}, {match.white.result}</li>
                                <li className='match-result-li'>{getResult(match.black.result)}, {match.black.result}</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <SquareIcon sx={{ color: isWin(searchedUser, match) ? 'green' : 'red'}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <p className='match-description'>{match.time_class}</p>
                </Grid>
                <Grid item xs={2}>
                    <p className='match-description'>{getDateStringify(match.end_time)}</p>
                </Grid>
            </Grid>
        </div>        
    );
}
 
export default Match;