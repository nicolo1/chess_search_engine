import axios from "axios";
import { getMonth, getYear } from "./app.service";

/*
    ---- ---- Fetch data from chess api ---- ----
*/

const prefix = `https://api.chess.com/pub/player`;
const statsEndpoint = `stats`;

// gets match history of a given user
export const getUserMatchHistory = async (searchedUser) => {
    const url = `${prefix}/${searchedUser}/games/${getYear()}/${getMonth()}`;
    const res = await axios
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
    console.log(res)
    return res;
};

// gets profile information of a given user
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

// gets stats of a given user
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
    return res;
};

export const isValidString = (text) => {
    // regex captures everything EXCEPT alphabetical + numerical characters
    const regex = new RegExp("[^a-zA-Z0-9]");

    return text == "" || !regex.test(text);
};
