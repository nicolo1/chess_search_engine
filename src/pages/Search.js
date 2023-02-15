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

    // user input
    const searchedUser = searchParams.get('q');

    // if user exists in API, store in stateful value
    const [user, setUser] = useState("");


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

    return user ? (
        <div id='search-page-container'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container spacing={2} direction='column'>
                        <Grid item>
                            <User user={user}/>
                        </Grid>
                        <Grid item>
                            <Stats stats={stats}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
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