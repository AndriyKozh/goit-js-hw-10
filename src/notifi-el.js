import Notiflix from 'notiflix';

const notifyEfect = {
  timeout: 1000,
  width: '700px',
  height: '150px',

  showOnlyTheLastOne: true,
  clickToClose: true,
};

function manyFound() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.',
    notifyEfect
  );
}

function noCountryError() {
  Notiflix.Notify.failure(
    'Oops, there is no country with that name',
    notifyEfect
  );
}

export { manyFound, noCountryError };
