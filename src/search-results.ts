
import { FlatRentSdk } from './flat-rent-sdk.js';
import { renderBlock } from './lib.js'
import { getFavoriteItems } from './readKeysFromLocalStorage.js'
import { Database, DatabaseSearch, Place } from './types.js'

function isPlace(object: any): object is Place {
  return 'fooProperty' in object;
}

export function renderSearchStubBlock() {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock(reasonMessage: string) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export async function renderPlaces(places: Place[] | DatabaseSearch[], provider: string, days: number): Promise<string | null> {

  const favoritesAmount = getFavoriteItems();

  let placeFindBlocks = '';
  let id: number;
  let images: string;
  let details: string;
  let name: string;
  let remoteness: number;
  let isFavorite: boolean;
  let price: number;

  places.forEach(async place => {
    id = place.id;
    isFavorite = favoritesAmount ? Boolean(favoritesAmount[id]) : false;

    if (provider === 'homy') {
      // place as Place;
      images = place.image;
      details = place.description;
      name = place.name;
      remoteness = place.remoteness;
      price = place.price;
    } else {
      // place as Database;
      images = place.photos[0];
      details = place.details;
      name = place.title;
      remoteness = 0;
      price = place.totalPrice / days;
    }

    placeFindBlocks += `
    <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites${isFavorite ? ' active' : ''}" id='${id}'>
            </div>
            <img class="result-img" src='${images}' alt="${name}">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>${name}</p>
              <p class="price">${price}&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> ${remoteness}км от вас</div>
            <div class="result-info--descr">${details}</div>
            <div class="result-info--footer">
              <div>
                <button data-id='${id}' data-name='${name}' data-provider='${provider}'>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    `
  })
  return Promise.resolve(placeFindBlocks)
}

export function renderSearchResultsBlock(renderPlaces) {

  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      ${renderPlaces}
    </ul>
    `
  )
}

