
import { FlatRentSdk } from '../../../../modules/flat-rent-sdk.js'
import { Flat } from '../../domain/flat.js'
import { Provider } from '../../domain/providers.js'
import { SearchFilter } from '../../domain/search-filter.js'
import { FlatResult as SDKFlat, Flat as Place } from './response.js'

export class SDKProvider extends FlatRentSdk implements Provider {
  constructor() {
    super()
  }
  private static coordinatesSearchCity = [59.9386, 30.3141];
  // имя провайдера нужно, чтобы было возможно установить источник квартиры
  public static provider = 'sdk'
  private static apiUrl = 'http://localhost:3040'

  public find(filter: SearchFilter): Promise<Flat[]> {
    const days = this.setPriceOneDay(filter.checkin, filter.checkout)
    return new Promise((resolve, reject) => {
      super.search({
        city: filter.city,
        checkInDate: filter.checkin,
        checkOutDate: filter.checkout,
        priceLimit: filter.maxPrice
      }).then((response) => {
        resolve(this.convertFlatListResponse(response, days))
      })
        .catch(error => reject(error))
    })
  }

  public getById(id: string): Promise<Flat> {
    return new Promise((resolve, reject) => {
      super.get(id).
        then((response) => {
          resolve(this.convertFlatResponse(response))
        })
        .catch(error => reject(error))
    })
  }

  public book(id: string, checkin: Date, checkout: Date): Promise<number> {
    return new Promise((resolve, reject) => {
      super.book(id, checkin, checkout).then((response) => {
        resolve(response)
      })
        .catch(error => reject(error))
    })
  }
  /**
  * Данный провайдер не использует http коды для ответов
  * В случае ошибки, она содержится в errorMessage
  * Необходимо убедиться, что ответ не является ошибкой
  */
  // private assertIsValidResponse(error: Error): void {
  //   if (error != null) {
  //     throw new Error(error.message)
  //   }
  // }

  // private dateToUnixStamp(date: Date): number {
  //   return date.getTime()
  // }

  /**
* Проходимся по каждому объекту и конвертируем его в экземпляр Flat
*/
  private convertFlatListResponse(response: SDKFlat[], days: number): Flat[] {
    return response.map((item) => {
      return this.convertFlatResponse(item, days)
    })
  }
  /**
  * Здесь находится логика преобразования объекта книги из источника
  * в экземпляр Flat нашего приложения
  */
  private convertFlatResponse(item: SDKFlat | Place, days?: number): Flat {
    const price = this.isPlace(item) ? item.price : item.totalPrice / days
    return new Flat(
      SDKProvider.provider,
      String(item.id),
      item.photos[0],
      item.title,
      item.details,
      price,
      this.setRemoteness(item.coordinates),
      item.bookedDates,
    )
  }

  /**
   * проверяем являестя ли flat interface Place
   * 
   */
  private isPlace(flat: Place | SDKFlat): flat is Place {
    return (flat as Place).price !== undefined;
  }

  /**
   * Подсчет растояния по заданным координатам
   */
  private setRemoteness(cooordinate: number[]): number {
    const x = SDKProvider.coordinatesSearchCity[0] - cooordinate[0];
    const y = SDKProvider.coordinatesSearchCity[1] - cooordinate[1];
    return Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 10) / 10
  }

  /**
   * Подсчет цены за сутки
   */
  private setPriceOneDay(checkin: Date, checkout: Date): number {
    return (checkout.getTime() - checkin.getTime()) / (1000 * 3600 * 24);
  }


}
