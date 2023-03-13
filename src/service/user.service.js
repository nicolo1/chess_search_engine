export function getCountry(countryLink) {
    return `https://flagcdn.com/32x24/${countryLink
        .slice(-2)
        .toLowerCase()}.png`;
}
