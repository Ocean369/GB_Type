import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock, renderSearchResultsBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { createLocalStorage } from './createLocalStorage.js'
import { getFavoriteItems, getUserData } from './readKeysFromLocalStorage.js'
import { Place } from './types.js'
import { handleSearchFormSubmit } from './handlers.js'



window.addEventListener('DOMContentLoaded', () => {
    createLocalStorage({ user: { username: 'Wade Warren', avatarUrl: 'img/avatar.png' }, favoritesAmount: 2 })
    const user = getUserData();

    if (user) {
        renderUserBlock()
    }
    renderSearchFormBlock()
    document.getElementById('search-form').onsubmit = handleSearchFormSubmit;
    renderSearchStubBlock()
    // renderSearchResultsBlock()
    // renderToast(
    //     { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    //     { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    // )
    document.addEventListener('click', (event) => {
        console.dir(event.target)
    })

})




