import { renderSearchFormBlock, handleSearchFormSubmit } from './search-form.js'
import { renderSearchStubBlock, renderSearchResultsBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { createLocalStorage } from './createLocalStorage.js'
import { getFavoritesAmount, getUserData } from './readKeysFromLocalStorage.js'



window.addEventListener('DOMContentLoaded', () => {
  createLocalStorage({ user: { username: 'Wade Warren', avatarUrl: 'img/avatar.png' }, favoritesAmount: 2 })
  const user = getUserData();
  const favoritesAmount = getFavoritesAmount();

  if ((user instanceof Object) && (typeof (favoritesAmount) === 'string')) {
    renderUserBlock(user['username'], user['avatarUrl'], Number(favoritesAmount))
  }
  renderSearchFormBlock()
  document.getElementById('search-form').onsubmit = handleSearchFormSubmit;
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )

})


