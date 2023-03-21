import { renderBlock } from './lib.js'
//  три аргумента имя пользователя, ссылка на его аватар и количество элементов в
// избранном.Аргументы должны иметь подходящие для них типы. Аргументы должны
// использоваться для соответствующих целей. Убедиться, что следующая логика работает
// верно, а если нет, то внести правки. Если количество избранных объектов меньше одного, то
// нужно выводить сообщение “ничего нет” и иконка сердечка должны быть не закрашена. Иначе
// иконка сердечка закрашена и рядом просто выводится количество избранных объектов. Все
// стили уже присутствуют, необходима только логика.
// src="/img/avatar.png"
// name = Wade Warren
export function renderUserBlock(username: string, url: string, favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount >= 1 ? favoriteItemsAmount.toString() : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="/${url}" alt="Wade Warren" />
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
