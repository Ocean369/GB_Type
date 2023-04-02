import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { createLocalStorage } from './createLocalStorage.js'
import { getUserData } from './readKeysFromLocalStorage.js'
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
  // })
})




