// import { book, search } from "../search-API.js";
import { renderBlock } from "../lib.js";
import { Property } from "../types.js";
import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock, renderSearchStubBlock, renderPlaces } from '../search-results.js';
import { renderUserBlock } from '../user.js'
import { toggleFavoriteItem } from './createLocalStorage.js'
import { renderToast } from "../lib.js";
import { SearchFilter } from "../bookingFlat/domain/search-filter.js";
import { HomyProvider } from "../bookingFlat/providers/homy/homy-provider.js";
import { SDKProvider } from "../bookingFlat/providers/sdk/sdk-provider.js";
import { Flat } from "../bookingFlat/domain/flat.js";
import { sorting } from "./sorting.js";
import { checkBookingAvailability } from "./checkbookingAvailable.js";

export function handlerToggleFavoriteItem(event: Event) {
  event.preventDefault();

  const div = event.target as HTMLDivElement;
  div.classList.toggle('active');
  const property: Property = {
    id: div.id,
    image: div.nextElementSibling.getAttribute('src'),
    name: div.nextElementSibling.getAttribute('alt')
  }
  toggleFavoriteItem(property);
  renderUserBlock();
}

export async function handlerBookingPlace(event: Event) {
  event.preventDefault();
  const button = event.target as HTMLButtonElement;
  const checkin = document.getElementById('check-in-date') as HTMLDataElement;
  const checkout = document.getElementById('check-out-date') as HTMLDataElement;
  const originalId = button.dataset.id;
  const provider = button.dataset.provider;
  let TransactionId: number;
  try {
    if (provider === 'homy') {
      const homy = new HomyProvider()
      TransactionId = await homy.book(originalId, new Date(checkin.value), new Date(checkout.value));
    } else {
      const sdk = new SDKProvider()
      TransactionId = await sdk.book(originalId, new Date(checkin.value), new Date(checkout.value));
    }
    if (TransactionId >= 1000 && TransactionId <= 9999) {
      renderToast(
        { text: `Бронирование прошло успешно`, type: 'success' }
      )
      renderSearchStubBlock()
    } else renderToast(
      { text: `Не возможно забронировать на выбранные даты`, type: 'unsuccess' }
    )
  } catch (error) {
    console.error(error);
    renderToast(
      { text: `В системе произошла ошибка. Попробуйте еще раз`, type: 'unsuccess' }
    )
  }
}


function setHandlers(array: Array<Flat>) {
  for (const favorite of document.getElementsByClassName('favorites')) {
    favorite.addEventListener('click', (event) => handlerToggleFavoriteItem(event))
  }
  for (const button of document.querySelectorAll('.result-info--footer button')) {
    button.addEventListener('click', (event) => handlerBookingPlace(event))
  }
  document.getElementById('sorting').addEventListener('input', (event) => {
    handlerSortingSelect(event, array)
  })
}

function handlerSortingSelect(event: Event, array: Array<Flat>) {
  const select = event.target as HTMLSelectElement
  const selectedValue = select.value
  renderBlock('results-list', renderPlaces(sorting(selectedValue, array)));
}



function ArrayForPromiseConstructor(providers: string[], filter: SearchFilter): Array<Promise<Flat[]>> {
  if (providers.length != 0) {
    let promiseArray: Array<Promise<Flat[]>> = [];
    providers.forEach(provider => {
      if (provider == 'homy') {
        const homy = new HomyProvider()
        promiseArray[promiseArray.length] = homy.find(filter)
      }
      if (provider == 'sdk') {
        const sdk = new SDKProvider()
        promiseArray[promiseArray.length] = sdk.find(filter)
      }
    })
    return promiseArray
  } return []
}

export function handleSearchFormSubmit(event: Event) {
  event.preventDefault(); // предотвращаем отправку формы на сервер
  renderSearchStubBlock();

  const form = event.target as HTMLFormElement;
  const select = document.getElementById('sorting') as HTMLSelectElement
  const selectedValue = 'cheap'
  const formData = new FormData(form);
  const providers = formData.getAll('provider') as string[]
  // console.log('providers:', providers)
  const filter: SearchFilter = {
    city: formData.get('city') as string,
    checkin: new Date(formData.get('checkin') as string),
    checkout: new Date(formData.get('checkout') as string),
    maxPrice: Number(formData.get('price')),
  };


  // запрашиваем разные источники по единому протоколу
  const countProvider = ArrayForPromiseConstructor(providers, filter).length
  Promise.all(ArrayForPromiseConstructor(providers, filter)).then((results) => {
    // мерджим все результаты в один
    let allResults: Flat[] = [];

    for (let i = 0; i < countProvider; i++)
      allResults = allResults.concat(results[i])
    // работаем с ними как с единым целым
    if (allResults.length > 0) {

      renderSearchResultsBlock(renderPlaces(sorting(selectedValue, allResults)));
      setHandlers(allResults);
    } else {
      renderEmptyOrErrorSearchBlock('К сожалению, по вашим критериям поиска ничего не удалось найти')
    }
  })
    .catch(error => {
      renderEmptyOrErrorSearchBlock('К сожалению, произошла ошибка');
      console.error(error)
    })


  checkBookingAvailability(new Date());
}



