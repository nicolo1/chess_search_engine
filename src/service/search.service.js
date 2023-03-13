import axios from "axios";
import { getMonth, getYear } from "./app.service";

/*
    ---- ---- Fetch data from chess api ---- ----
*/

const prefix = `https://api.chess.com/pub/player`;
const matchHistoryEndpoint = `games/${getYear()}/${getMonth()}`;
const statsEndpoint = `stats`;

// gets match history of a given user
export const getUserMatchHistory = async (searchedUser) => {
    const url = `${prefix}/${searchedUser}/${matchHistoryEndpoint}`;

    const res = axios
        .get(url)
        .then(function (res) {
            // cases:
            // 0 games
            // 1 or more games
            return res.data.games;
        })
        .catch(function (err) {
            // user does not exist, error
            return err.response.data;
        });
    return res;
};

// gets user profile information of a given user
export const getUserProfile = async (searchedUser) => {
    const url = `${prefix}/${searchedUser}`;

    const res = await axios
        .get(url)
        .then(function (res) {
            return res.data;
        })
        .catch(function (err) {
            // user does not exist, error
            return err.response.data;
        });
    return res;
};

// gets user profile information of a given user
export const getUserStats = async (searchedUser) => {
    const url = `${prefix}/${searchedUser}/${statsEndpoint}`;

    const res = await axios
        .get(url)
        .then(function (res) {
            return res.data;
        })
        .catch(function (err) {
            // user does not exist, error
            return err.response.data;
        });
    console.log(res);
    return res;
};

export const isValidString = (text) => {
    // regex captures everything EXCEPT alphabetical + numerical characters
    const regex = new RegExp("[^a-z^A-Z^0-9]");
    console.log(text == "" || !regex.test(text));

    return text == "" || !regex.test(text);
};
