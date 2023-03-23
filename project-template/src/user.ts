import { renderBlock } from './lib.js'


export function renderUserBlock(username: string, url: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount >= 1 ? favoriteItemsAmount.toString() : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="/${url}" alt="${url}" />
      <div class="info">
          <p class="name">${username}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
