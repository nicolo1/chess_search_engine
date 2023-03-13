import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    getUserMatchHistory,
    getUserProfile,
    getUserStats,
} from "../service/search.service";
import User from "../components/Search/User";
import MatchHistory from "../components/Search/Match/MatchHistory";
import Stats from "../components/Search/Stats";
import Grid from "@mui/material/Grid";
import Error from "./Error";
import Footer from "../components/Footer";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchedUser = searchParams.get("q"); // user input
    const [user, setUser] = useState(""); // user object from API
    const [matchHistory, setMatchHisory] = useState("");
    const [stats, setStats] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        (async function () {
            const user = await getUserProfile(searchedUser);

            // only fetch for match history and stats if no error
            if (!user.message) {
                setUser(user);
                setMatchHisory(await getUserMatchHistory(searchedUser));
                setStats(await getUserStats(searchedUser));
                setError(false);
            } else {
                setError(true);
            }
        })();
    }, []);

    return user ? (
        <>
            <div id="search-page-container">
                <User user={user} />
                <Grid container>
                    <Grid item xs={3}>
                        <Stats stats={stats} />
                    </Grid>
                    <Grid item xs={9}>
                        <MatchHistory
                            searchedUser={searchedUser}
                            matchHistory={matchHistory}
                        />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    ) : error ? (
        <>
            <Error
                error={
                    "Oops! This user is not registered here - please check spelling... "
                }
            />
        </>
    ) : (
        ""
    );
};

export default Search;
