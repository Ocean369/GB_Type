import { Book } from './book.js'
import { Genre } from './types.js'
// полка с литературой по программированию

export const programmingLiterature = [
  new Book(
    'Cracking the coding interview', Genre.Programming, 100,
    {
      firstName: 'Gayle',
      lastName: 'Laakmann',
      rating: 5
    }
  )
]
// функция "взятия" книги с полки
// по факту это поиск - операция, требующая время
export function getFromShelf(shelf: Book[], bookName: string): Book {
  const book = shelf.find((item) => {
    return item.name === bookName
  })
  if (book == null) {
    throw Error(`There is no such book on the shelf.`)
  }
  return book
}
