import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getUserMatchHistory, getUserProfile, getUserStats } from "../service/search.service";
import User from "../components/Search/User";
import MatchHistory from "../components/Search/MatchHistory";
import Stats from "../components/Search/Stats";
import Grid from '@mui/material/Grid'; 

const Search = ({}) => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const searchedUser = searchParams.get('q');
    const [user, setUser] = useState("");
    const [matchHistory, setMatchHisory] = useState("");
    const [stats, setStats] = useState("");

    useEffect(() => {
        (async function() {

           /*  const user = await getUserProfile(searchedUser);
            console.log(user);
            
            // only fetch for match history and stats if no error
            if(!user.message) {
                setUser(user);
                setMatchHisory(await getUserMatchHistory(searchedUser));
                setStats(await getUserStats(searchedUser));
            } */

        })();   
    }, [])

    return (
        <div id='search-page-container'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container spacing={2} direction='column'>
                        <Grid item>
                            <User user={user}/>
                        </Grid>
                        <Grid item>
                            <Stats/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <MatchHistory/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Search;