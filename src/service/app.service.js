/*
    ---- ---- Date helper functions ---- ----
*/

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// app.service.js — remove the module-level `today`
export function getMonth() {
    const month = new Date().getMonth() + 1;
    return String(month).padStart(2, '0');
}

export function getYear() {
    return String(new Date().getFullYear());
}

// get date as string from timestamp
export function getDateStringify(timestamp) {
    // todo: ignores timezone, date time not entirely accurate
    return (new Date(timestamp*1000)).toISOString().split("T")[0];
}

// check if JSON object is empty
export function isEmpty(obj) {
    return obj == null || typeof obj == 'undefined' || Object.keys(obj).length === 0;
}

export function getLongDateStringify(timestamp) {
    return ((new Date(timestamp*1000)).toLocaleDateString("en-US", options))
}