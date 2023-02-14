// get white numerical win/loss result
export function getResult(result) {
    return result == 'win' ? 1 : 0;
}

// given user name and match data, check if user won
export function isWin(searchedUser, match) {
    if(match.white.username == searchedUser) {
        return match.white.result == 'win';
    } else {
        return match.black.result == 'win';
    }
}