import { Book } from './book.js';
import { showCart } from './helpers.js';
import { Genre } from './types.js';
import { getGenreName } from './helpers.js';
import { getFromShelf, programmingLiterature } from './book-collection.js';
console.log(getFromShelf(programmingLiterature, 'Cracking the coding interview'));
const reviews = [
    ['John', 5, 'It is my favorite book'],
    ['Mary', 3, 'I expected more from it :('],
    ['Clara', 5, 'Read it again and again!']
];
const book = new Book('Harry Potter', Genre.Fantasy, 980, { firstName: 'J. K.', lastName: 'Rowling', rating: 4.6 }, reviews);
const notepad = {
    price: 40,
    getProductDescription: () => {
        return 'Notepad with Unicorn, 50 pages';
    }
};
showCart([book, notepad]);
console.log(getGenreName(book.genre));
