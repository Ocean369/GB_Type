import { Book } from './book.js';
import { showCart } from './helpers.js';
import { Genre } from './types.js';
import { getGenreName } from './helpers.js';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUNoQyxPQUFPLEVBQWMsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBR25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUszQyxNQUFNLE9BQU8sR0FBYTtJQUN4QixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsd0JBQXdCLENBQUM7SUFDckMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLDRCQUE0QixDQUFDO0lBQ3pDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSwwQkFBMEIsQ0FBQztDQUN6QyxDQUFBO0FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQ25CLGNBQWMsRUFDZCxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFDbEIsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUN4RCxPQUFPLENBQ1IsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFZO0lBQ3ZCLEtBQUssRUFBRSxFQUFFO0lBQ1QscUJBQXFCLEVBQUUsR0FBRyxFQUFFO1FBQzFCLE9BQU8sZ0NBQWdDLENBQUE7SUFDekMsQ0FBQztDQUNGLENBQUE7QUFDRCxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2suanMnXG5pbXBvcnQgeyBzaG93UmF0aW5nLCBzaG93Q2FydCB9IGZyb20gJy4vaGVscGVycy5qcydcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QuanMnXG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuL3R5cGVzLmpzJ1xuaW1wb3J0IHsgR2VucmUgfSBmcm9tICcuL3R5cGVzLmpzJ1xuaW1wb3J0IHsgZ2V0R2VucmVOYW1lIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5cblxuXG5jb25zdCByZXZpZXdzOiBSZXZpZXdbXSA9IFtcbiAgWydKb2huJywgNSwgJ0l0IGlzIG15IGZhdm9yaXRlIGJvb2snXSxcbiAgWydNYXJ5JywgMywgJ0kgZXhwZWN0ZWQgbW9yZSBmcm9tIGl0IDooJ10sXG4gIFsnQ2xhcmEnLCA1LCAnUmVhZCBpdCBhZ2FpbiBhbmQgYWdhaW4hJ11cbl1cblxuY29uc3QgYm9vayA9IG5ldyBCb29rKFxuICAnSGFycnkgUG90dGVyJyxcbiAgR2VucmUuRmFudGFzeSwgOTgwLFxuICB7IGZpcnN0TmFtZTogJ0ouIEsuJywgbGFzdE5hbWU6ICdSb3dsaW5nJywgcmF0aW5nOiA0LjYgfSxcbiAgcmV2aWV3c1xuKVxuXG5jb25zdCBub3RlcGFkOiBQcm9kdWN0ID0ge1xuICBwcmljZTogNDAsXG4gIGdldFByb2R1Y3REZXNjcmlwdGlvbjogKCkgPT4ge1xuICAgIHJldHVybiAnTm90ZXBhZCB3aXRoIFVuaWNvcm4sIDUwIHBhZ2VzJ1xuICB9XG59XG5zaG93Q2FydChbYm9vaywgbm90ZXBhZF0pXG5jb25zb2xlLmxvZyhnZXRHZW5yZU5hbWUoYm9vay5nZW5yZSkpXG4iXX0=