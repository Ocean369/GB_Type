export interface User {
    username: string,
    avatarUrl: string
}

export interface Keys {
    user: User,
    favoritesAmount: number
}


export interface SearchFormData {
    checkin: Date,
    checkout: Date,
    maxPrice: number
}

export interface Place {
    id: number;
    image: string;
    name: string;
    description: string;
    remoteness: number;
    bookedDates: number[];
    price: number;
}

export interface Property {
    id: number;
    name: string;
    image: string;
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