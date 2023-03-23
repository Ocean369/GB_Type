
export function getUserData(): unknown {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'));
  } else {
    console.warn('No user data found in localStorage');
    return undefined
  }
}

export function getFavoritesAmount(): unknown {
  const favoritesAmountDataString = localStorage.getItem('favoritesAmount');
  if (favoritesAmountDataString) {
    return favoritesAmountDataString;
  } else {
    console.warn('No user data found in localStorage');
    return undefined
  }
}


