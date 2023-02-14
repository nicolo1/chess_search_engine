import Match from "./Match";
import { Grid } from "@mui/material";

const MatchHistory = ({ searchedUser, matchHistory }) => {
    if(matchHistory) {
        return (  
            <div id='match-history-component-container'> 
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <p className="match-history-header">Name</p>
                </Grid>
                <Grid item xs={3}>
                    <p className="match-history-header">Result</p>
                </Grid>
                <Grid item xs={3}>
                    <p className="match-history-header">Game Type</p>
                </Grid>
                <Grid item xs={2}>
                    <p className="match-history-header">Date</p>
                </Grid>
            </Grid>
              {matchHistory? matchHistory.map((key, index) => (
                    <Match key={index} match={key} searchedUser={searchedUser}/>
                )): "No matches to show."}
            </div>
        );
    }
}
 
export default MatchHistory;