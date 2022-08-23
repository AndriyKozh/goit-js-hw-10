const ALL_BASE = 'https://restcountries.com/v3.1/name/';
const fiilter = 'fields=name,capital,population,flags,languages';

export default function fetchCountries(name) {
  return fetch(`${ALL_BASE}${name}?${fiilter}`).then(response => {
    return response.json();
  });
}
