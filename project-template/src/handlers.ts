import { book, search } from "./search-API.js";
import { Place, Property, SearchFormData } from "./types.js";
import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock, renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js'
import { toggleFavoriteItem } from './createLocalStorage.js'
import { checkBookingAvailability } from './checkbookingAvailable.js'

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
    const placeId = Number(button.dataset.id);
    const placeName = button.dataset.name;

    book(placeId, new Date(checkin.value), new Date(checkout.value));

}


export function handleSearchFormSubmit(event: Event) {
    event.preventDefault(); // предотвращаем отправку формы на сервер

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const searchFormData: SearchFormData = {
        checkin: new Date(formData.get('checkin') as string),
        checkout: new Date(formData.get('checkout') as string),
        maxPrice: Number(formData.get('price'))
    };

    search(searchFormData.checkin, searchFormData.checkout, searchFormData.maxPrice)
        .then((results: Place[]) => {
            if (results.length === 0) {
                renderEmptyOrErrorSearchBlock('Ничего не найдено по вашему запросу :(')
            } else {
                renderSearchResultsBlock(results)
                for (const favorite of document.getElementsByClassName('favorites')) {
                    favorite.addEventListener('click', (event) => handlerToggleFavoriteItem(event))
                }
                for (const button of document.querySelectorAll('.result-info--footer button')) {
                    button.addEventListener('click', (event) => handlerBookingPlace(event))
                }
            }
        })

    checkBookingAvailability(new Date());
}



