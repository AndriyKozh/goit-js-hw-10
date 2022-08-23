import './css/styles.css';
// import countriesCard from '/countries-card.hbs';
import debounce from 'lodash.debounce';
import fetchCountries from './api-service.js';
import { manyFound, noCountryError } from './notifi-el';
import { oneCountry, countryList } from './countries-card';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input'),
  countryinfo: document.querySelector('.country-info'),
  couuntryList: document.querySelector('.country-list'),
};

refs.input.addEventListener('input', debounce(onInputchange, DEBOUNCE_DELAY));

function onInputchange(ev) {
  ev.preventDefault();
  const nameCountryData = ev.target.value.trim();
  if (nameCountryData === '') {
    refs.countryinfo.innerHTML = '';
    refs.couuntryList.innerHTML = '';
  }
  fetchCountries(nameCountryData)
    .then(countries => {
      countries.map(country => {
        let arrayLength = countries.length;
        if (arrayLength === 1) {
          const markup = oneCountry(country);
          renderCountryInfo(markup);
        } else if (arrayLength > 10) {
          manyFound();
        } else if (arrayLength > 1) {
          const markupList = countryList(countries);
          renderCountryList(markupList);
        }
      });
    })
    .catch(noCountryError);
}

function renderCountryList(markupList) {
  refs.countryinfo.innerHTML = '';
  refs.couuntryList.innerHTML = markupList;
}

function renderCountryInfo(markup) {
  refs.countryinfo.innerHTML = '';
  refs.couuntryList.innerHTML = markup;
}
