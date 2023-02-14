import axios from "axios";
import { getMonth, getYear } from "./app.service";

/*
    ---- ---- Fetch data from chess api ---- ----
*/

const prefix = `https://api.chess.com/pub/player`;
const matchHistoryEndpoint = `games/${getYear()}/${getMonth()}`;
const statsEndpoint = `stats`;

// gets match history of a given user
export async function getUserMatchHistory(searchedUser) {

    const url = `${prefix}/${searchedUser}/${matchHistoryEndpoint}`;
    
    const res = axios.get(url)
        .then(function (res) {
            // cases: 
            // 0 games
            // 1 or more games
            return res.data.games;
        })
        .catch(function (err) {

            // user does not exist, error
            return err.response.data;
        })
    return res;
}


// gets user profile information of a given user
export async function getUserProfile(searchedUser) {

    const url = `${prefix}/${searchedUser}`;
            
    const res = await axios.get(url)
        .then(function (res) {
            return res.data;
        })
        .catch(function (err) {

            // user does not exist, error
            return err.response.data;
        })
    return res;
}


// gets user profile information of a given user
export async function getUserStats(searchedUser) {

    const url = `${prefix}/${searchedUser}/${statsEndpoint}`;
            
    const res = await axios.get(url)
        .then(function (res) {
            return res.data;
        })
        .catch(function (err) {

            // user does not exist, error
            return err.response.data;
        })
        console.log(res);
    return res;
}