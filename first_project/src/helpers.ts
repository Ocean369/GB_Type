import { Book } from './book.js'
export function serialize(value: unknown) {
  if (value == null) {
    return value + ''
  }
  // unknown не даст использовать
  // name, genre и price без проверки
  if (value instanceof Book) {
    return `${value.name}, ${value.genre}, ${value.price}`
  }
  // остальные типы будем просто
  // приводить к строке
  return value.toString()
}


import { Ratingable } from './ratingable.js'
export function showRating(entity: Ratingable) {
  if (entity.rating == null) {
    return 'not rated yet'
  }
  const roundedRating = Math.round(entity.rating)
  let rating = ''
  for (let i = 0; i < roundedRating; i++) {
    rating += '⭐'
  }
  return rating + ` (${entity.rating.toFixed(2)})`
}

import { Product } from './product.js'
export function showCart(products: Product[]) {
  let totalPrice = 0
  products.forEach((product) => {
    totalPrice += product.price
    console.log(`${product.getProductDescription()} x ${product.price} rub.`)
  })
  console.log(`\nTotal items: ${products.length}, total cost: ${totalPrice}`)
}

import { Genre } from './types.js'
export function getGenreName(genre: Genre) {
  const genreMapping = {
    [Genre.Adventure]: 'adventure',
    [Genre.Fantasy]: 'fantasy',
    [Genre.Horror]: 'horror'
  }
  return genreMapping[genre]
}
