import Grid from '@mui/material/Grid'; 
import { getDateStringify } from '../../service/app.service';
import { isEmpty } from '../../service/app.service';

const Stats = ({ stats }) => {

    const rapid = () => {
        return (
                <>
                    <h1 className='stats-list-heading'>Chess Rapid</h1>
                    <ul>
                        <li className='stats-sub-heading'>Highest</li>
                        <ul>
                            <li className='stats-rating'>Rating {stats.chess_rapid ? stats.chess_rapid.best.rating : ""}</li>
                            <li className='stats-date'>Date {stats.chess_rapid ? getDateStringify(stats.chess_rapid.best.date) : ""}</li>
                        </ul>
                        <li className='stats-sub-heading'>Recent</li>
                        <ul>
                            <li className='stats-rating'>Rating {stats.chess_rapid ? stats.chess_rapid.last.rating : ""}</li>
                            <li className='stats-date'>Date {stats.chess_rapid ? getDateStringify(stats.chess_rapid.last.date) : ""}</li>
                        </ul>
                        <li className='stats-sub-heading'>Record</li>
                        <ul>
                            <li className='stats-win'>win {stats.chess_rapid ? stats.chess_rapid.record.win : ""}</li>
                            <li className='stats-loss'>loss {stats.chess_rapid ? stats.chess_rapid.record.loss : ""}</li>
                            <li className='stats-draw'>draw {stats.chess_rapid ? stats.chess_rapid.record.draw : ""}</li>
                        </ul>
                    </ul>
                </>
          );
    }
     
    const blitz = () => {
        return (
                <>
                    <h1 className='stats-list-heading'>Chess Blitz</h1>
                    <ul>
                        <li className='stats-sub-heading'>Highest</li>
                        <ul>
                            <li className='stats-rating'>Rating {stats.chess_blitz ? stats.chess_blitz.best.rating : ""}</li>
                            <li className='stats-date'>Date {stats.chess_blitz ? getDateStringify(stats.chess_blitz.best.date) : ""}</li>
                        </ul>
                        <li className='stats-sub-heading'>Recent</li>
                        <ul>
                            <li className='stats-rating'>Rating {stats.chess_blitz ? stats.chess_blitz.last.rating : ""}</li>
                            <li className='stats-date'>Date {stats.chess_blitz ? getDateStringify(stats.chess_blitz.last.date) : ""}</li>
                        </ul>
                        <li className='stats-sub-heading'>Record</li>
                        <ul>
                            <li className='stats-win'>win {stats.chess_blitz ? stats.chess_blitz.record.win : ""}</li>
                            <li className='stats-loss'>loss {stats.chess_blitz ? stats.chess_blitz.record.loss : ""}</li>
                            <li className='stats-draw'>draw {stats.chess_blitz ? stats.chess_blitz.record.draw : ""}</li>
                        </ul>
                    </ul>
                </>
          );
    }
    
    const tactics = () => {
        return (
                <>
                    <h1 className='stats-list-heading'>Tactics</h1>
                    <ul>
                    <li className='stats-sub-heading'>Highest</li>
                        <ul>
                            <li className='stats-rating'>Rating {stats.tactics ? stats.tactics.highest.rating : ""}</li>
                            <li className='stats-date'>Date {stats.tactics ? getDateStringify(stats.tactics.highest.date) : ""}</li>
                        </ul>
                        <li className='stats-sub-heading'>Lowest</li>
                        <ul>
                            <li className='stats-rating'>Rating {stats.tactics ? stats.tactics.lowest.rating : ""}</li>
                            <li className='stats-date'>Date {stats.tactics ? getDateStringify(stats.tactics.lowest.date) : ""}</li>
                        </ul>
                    </ul>
                </>
          );
    }
     
    
    const puzzleRush = () => {
        return (
                <>
                    <h1 className='stats-list-heading'>Puzzle Rush</h1>
                    <ul>
                    <li className='stats-sub-heading'>Best</li>
                        <ul>
                            <li className='stats-rating'>Total attempts {(stats.puzzle_rush) ? stats.puzzle_rush.best.total_attempts : ""}</li>
                            <li className='stats-date'>Score {(stats.puzzle_rush) ? stats.puzzle_rush.best.score : ""}</li>
                        </ul>
                    </ul>
                </>
          );
    }

    if(stats) {
        return (  
            <div id='stats-component-container'> 
            <h1 className='stats-main-heading'>Stats</h1>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {!isEmpty(stats.chess_rapid) ? rapid() : ''}
                    </Grid>
                    <Grid item xs={6}>
                        {!isEmpty(stats.chess_blitz) ? blitz() : ''}
                    </Grid>
                    <Grid item xs={6}>
                        {!isEmpty(stats.tactics) ? tactics() : ''}
                    </Grid>
                    <Grid item xs={6}>
                        {!isEmpty(stats.puzzle_rush) ? puzzleRush() : ''}
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default Stats;