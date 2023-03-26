import { Book } from './book.js'
import { showRating, showCart } from './helpers.js'
import { Product } from './product.js'
import { Review } from './types.js'
import { Genre } from './types.js'
import { getGenreName } from './helpers.js'

import { getFromShelf, programmingLiterature } from './book-collection.js'
console.log(
  getFromShelf(programmingLiterature, 'Cracking the coding interview')
)


const reviews: Review[] = [
  ['John', 5, 'It is my favorite book'],
  ['Mary', 3, 'I expected more from it :('],
  ['Clara', 5, 'Read it again and again!']
]

const book = new Book(
  'Harry Potter',
  Genre.Fantasy, 980,
  { firstName: 'J. K.', lastName: 'Rowling', rating: 4.6 },
  reviews
)

const notepad: Product = {
  price: 40,
  getProductDescription: () => {
    return 'Notepad with Unicorn, 50 pages'
  }
}
showCart([book, notepad])
console.log(getGenreName(book.genre))
