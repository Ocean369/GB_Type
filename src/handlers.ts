import { book, search } from "./search-API.js";
import { Place, Property, SearchFormData, Database, DatabaseSearch } from "./types.js";
import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock, renderSearchStubBlock, renderPlaces } from './search-results.js';
import { renderUserBlock } from './user.js'
import { toggleFavoriteItem } from './createLocalStorage.js'
import { checkBookingAvailability } from './checkbookingAvailable.js'
import { FlatRentSdk, addDays, cloneDate } from './flat-rent-sdk.js'
import { renderToast } from "./lib.js";

const sdk = new FlatRentSdk()

export function handlerToggleFavoriteItem(event: Event) {
  event.preventDefault();

  const div = event.target as HTMLDivElement;
  div.classList.toggle('active');
  const property: Property = {
    id: Number(div.id),
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
  const placeId = button.dataset.id;
  const placeName = button.dataset.name;
  const provider = button.dataset.provider;
  if (provider === 'homy') {
    book(Number(placeId), new Date(checkin.value), new Date(checkout.value));
  } else {
    try {
      const TransactionId = await sdk.book(placeId, new Date(checkin.value), new Date(checkout.value));
      renderToast(
        { text: `Бронирование прошло успешно`, type: 'success' }
      )
      renderSearchStubBlock()
    } catch (error) {
      console.error(error);
      renderToast(
        { text: `Не возможно забронировать на выбранные даты`, type: 'unsuccess' }
      )
    }
  }

}


function setHandlers() {
  for (const favorite of document.getElementsByClassName('favorites')) {
    favorite.addEventListener('click', (event) => handlerToggleFavoriteItem(event))
  }
  for (const button of document.querySelectorAll('.result-info--footer button')) {
    button.addEventListener('click', (event) => handlerBookingPlace(event))
  }
}

export function handleSearchFormSubmit(event: Event) {
  event.preventDefault(); // предотвращаем отправку формы на сервер
  renderSearchStubBlock();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const searchFormData: SearchFormData = {
    city: formData.get('city') as string,
    checkin: new Date(formData.get('checkin') as string),
    checkout: new Date(formData.get('checkout') as string),
    maxPrice: Number(formData.get('price')),
    providers: formData.getAll('provider') as Array<string>
  };
  let days = (searchFormData.checkout.getTime() - searchFormData.checkin.getTime()) / (1000 * 3600 * 24);
  let innerHTMLPlaces: string = '<p>Не волнуйся</p>';
  searchFormData.providers.forEach(provider => {
    if (provider === 'homy') {
      search(searchFormData.checkin, searchFormData.checkout, searchFormData.maxPrice)
        .then((results: Place[]) => {
          if (results.length != 0) {
            renderPlaces(results, provider, days).then(result => {
              innerHTMLPlaces += result
              renderSearchResultsBlock(innerHTMLPlaces)
              setHandlers()
            });
          }
        })
    }
    if (provider === 'flat-rent') {

      sdk.search({
        city: searchFormData.city,
        checkInDate: searchFormData.checkin,
        checkOutDate: searchFormData.checkout,
        priceLimit: searchFormData.maxPrice
      })
        .then((results: DatabaseSearch[]) => {
          if (results.length != 0) {
            renderPlaces(results, provider, days).then(result => {
              innerHTMLPlaces += result
              renderSearchResultsBlock(innerHTMLPlaces)
              setHandlers();
            });

          }
        })
    }
  })

  checkBookingAvailability(new Date());
}



