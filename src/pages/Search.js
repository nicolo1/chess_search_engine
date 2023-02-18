import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getUserMatchHistory, getUserProfile, getUserStats } from "../service/search.service";
import User from "../components/Search/User";
import MatchHistory from "../components/Search/Match/MatchHistory";
import Stats from "../components/Search/Stats";
import Grid from '@mui/material/Grid'; 
import Error from "./Error";
  
const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchedUser = searchParams.get('q'); // user input
    const [user, setUser] = useState(""); // user object from API
    const [matchHistory, setMatchHisory] = useState("");
    const [stats, setStats] = useState("");

    useEffect(() => {
        (async function() {

            const user = await getUserProfile(searchedUser);
            console.log(user);
            
            // only fetch for match history and stats if no error
            if(!user.message) {
                setUser(user);
                setMatchHisory(await getUserMatchHistory(searchedUser));
                setStats(await getUserStats(searchedUser));
            }  

        })();   
    }, [])

    /*
    // use sample data instead of fetching from API
    useEffect(() => {
        var request = new XMLHttpRequest();
        request.open("GET", "./sample/matchHistory.json", false);
        request.send(null)
        var matchHistoryJSON = JSON.parse(request.responseText);
        request.open("GET", "./sample/stats.json", false);
        request.send(null)
        var statsJSON = JSON.parse(request.responseText);
        request.open("GET", "./sample/user.json", false);
        request.send(null)
        var userJSON = JSON.parse(request.responseText);
        setUser(userJSON);
        setMatchHisory(matchHistoryJSON);
        setStats(statsJSON);

    }, []);
    */

    useEffect(() => {
        if(stats && matchHistory) {
        } else {
            console.log('something is not loaded...')
        }

    }, [user,stats,matchHistory]);

    return user ? (
        <div id='search-page-container'>
            <User user={user}/>
            <Grid container>
                <Grid item xs={3}>
                    <Stats stats={stats}/>
                </Grid>
                <Grid item xs={9}>
                    <MatchHistory searchedUser={searchedUser} matchHistory={matchHistory}/>
                </Grid>
            </Grid>
        </div>
    ) : 
    (
        <Error error={'Oops! This user is not registered here - please check spelling... '}/>
    );
}

export default Search;