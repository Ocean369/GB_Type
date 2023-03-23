interface User {
  username: string,
  avatarUrl: string
}

export interface Keys {
  user: User,
  favoritesAmount: number
}




// Создать интерфейс SearchFormData, в котором описать структуру для полей поисковой
// формы. 
export interface SearchFormData {
  checkin: Date,
  checkout: Date,
  maxPrice: number
}

// Данный интерфейс пока оставить пустым. 
export interface Place {
}

interface SearchCallback {
  (error?: Error, placeForm?: Place[])
}

export const searchCallback: SearchCallback = (error, places) => {
  if (error == null && places != null) {
    console.log('Success!', [])
  } else {
    console.error('Fail', error)
  }
}
