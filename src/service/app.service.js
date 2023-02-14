/*
    ---- ---- Date helper functions ---- ----
*/

const today = new Date();

// get month formatted as 01, 02, 03, etc.
export function getMonth() {
    const month = today.getMonth() + 1;
    switch (true) {
        case (month < 10):
            return `0${month}`;
        default:
            return `${month}`;
    }
}

export function getYear() { return `${today.getFullYear()}`; }

// get date as string from timestamp
export function getDateStringify(timestamp) {
    return (new Date(timestamp*1000)).toISOString().split("T")[0];
}

// check if JSON object is empty
export function isEmpty(obj) {
    return obj == null || typeof obj == 'undefined' || Object.keys(obj).length === 0;
}