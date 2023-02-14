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

// get matches from array of match JSON data
export function getMatches(matchHistory) {
    var rows = [];
    for (const index in matchHistory) {
        if (Object.hasOwnProperty.call(matchHistory, index)) {
            const match = matchHistory[index];
            rows.push(
                {   
                    id: index, 
                    white: match.white.username, 
                    black: match.black.username, 
                    result: `${getResult(match.white.result)}-${getResult(match.black.result)}`, 
                    gameType: match.time_class, 
                    date: match.end_time 
                }
            );
        }
    }
    return rows;
}