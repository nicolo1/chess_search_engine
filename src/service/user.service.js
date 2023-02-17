export function getCountry(countryLink) {
    return `https://countryflagsapi.com/png/${countryLink.slice(-2).toLowerCase()}`;
}