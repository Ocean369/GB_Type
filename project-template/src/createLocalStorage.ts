
import { Keys } from './types.js'

export function createLocalStorage(keys: Keys): void {
  if (!localStorage.getItem('user') || !localStorage.getItem('favoritesAmount')) {
    localStorage.setItem('user', JSON.stringify(keys.user));
    localStorage.setItem('favoritesAmount', keys.favoritesAmount.toString());
    console.log('Local Storage created!')
  } else console.log('Local Storage already exists!')
}
