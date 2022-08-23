export { oneCountry, countryList };

const oneCountry = function ({ name, capital, population, flags, languages }) {
  let langList = Object.values(languages);

  return ` <div class="country-content">
        <img src="${flags.svg}" alt="flag" width="213" height="100" />
        <h1 class="country-content__name">${name.official}</h1>
      </div>

      <ul class="country-description">
        <li class="country-description__item">
          <p class="country-description__text">
            Capital: <span class="country-description__info"> ${capital} </span>
          </p>
        </li>

        <li class="country-description__item">
          <p class="country-description__text">
            Population:
            <span class="country-description__info"> ${population} </span>
          </p>
        </li>

        <li class="country-description__item">
          <p class="country-description__text">
            Languages:
            <span class="country-description__info"> ${langList} </span>
          </p>
        </li>
      </ul> `;
};
const countryList = function (countryArray) {
  return countryArray
    .map(
      country => `  <li class="country-flag">
      <img class="country-flag__img" src="${country.flags.svg}" alt="flag"  width='30'>
      <p class="country-name">${country.name.official}</p>
    </li>`
    )
    .join('');
};
