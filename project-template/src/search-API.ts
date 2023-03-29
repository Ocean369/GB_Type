import { renderToast } from "./lib.js";
import { renderSearchStubBlock } from "./search-results.js";
import { Place } from "./types";

function dateToUnixStamp(date: Date): number {
    return date.getTime()
}

function responseToJson(requestPromise: Promise<Response>) {
    return requestPromise
        .then((response) => {
            return response.text()
        })
        .then(async (response) => {
            return JSON.parse(response)
        })
}

export function search(checkInDate: Date, checkOutDate: Date, maxPrice?: number) {
    let url = `http://localhost:3030/places?` +
        `checkInDate=${dateToUnixStamp(checkInDate)}&` +
        `checkOutDate=${dateToUnixStamp(checkOutDate)}&` +
        `coordinates=59.9386,30.3141`

    if (maxPrice != null) {
        url += `&maxPrice=${maxPrice}`
    }
    return responseToJson(fetch(url))
}


export async function book(placeId: number, checkInDate: Date, checkOutDate: Date) {
    console.log(dateToUnixStamp(checkInDate));
    console.log(dateToUnixStamp(checkOutDate));
    try {
        const response = await fetch(
            `http://localhost:3030/places/${placeId}?` +
            `checkInDate=${dateToUnixStamp(checkInDate)}&` +
            `checkOutDate=${dateToUnixStamp(checkOutDate)}&`,
            { method: 'PATCH' }
        );
        if (response.status !== 200) {
            renderToast(
                { text: `Не возможно забронировать на выбранные даты`, type: 'success' }
            )
        } else {
            renderToast(
                { text: `Бронирование прошло успешно`, type: 'success' }
            )
            renderSearchStubBlock()
        }

    }
    catch (e) {
        console.error(e);
    }
}