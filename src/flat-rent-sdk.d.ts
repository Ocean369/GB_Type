export function cloneDate(date: Date): Date
export function addDays(date: Date, days: number): Date
export const backendPort: number
export const localStorageKey: string

interface Database {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: Date[],
  price: number
}

interface DatabaseSearch {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: Date[],
  totalPrice: number
}

interface Parameters {
  city: string;
  checkInDate: Date;
  checkOutDate: Date;
  priceLimit?: number;
}

export class FlatRentSdk {
  database: Database[];
  get(id: string): Promise<Database | null>;
  search(parametrs: Parameters): Promise<DatabaseSearch[]>;
  book(flatId: string, checkInDate: Date, checkOutDate: Date): Promise<number | null>
}
