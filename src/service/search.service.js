import axios from "axios";


/*
    ---- ---- Date helper functions ---- ----
*/

const today = new Date();

// get month formatted as 01, 02, 03, etc.
function getMonth() {
    const month = today.getMonth() + 1;
    switch (true) {
        case (month < 10):
            return `0${month}`;
        default:
            return `${month}`;
    }
}

function getYear() { return `${today.getFullYear()}`; }


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
            
    const res = axios.get(url)
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
            
    const res = axios.get(url)
        .then(function (res) {
            return res.data;
        })
        .catch(function (err) {

            // user does not exist, error
            return err.response.data;
        })
    return res;
}