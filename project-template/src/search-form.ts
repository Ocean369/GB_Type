import { renderBlock } from './lib.js'
import { Place, searchCallback, SearchFormData } from './types.js';

function getDateForInput(date: Date | string, shiftByDays?: number | 'lastDay',
  shiftByMonths?: number): string {
  let newDate: Date;
  if (typeof (date) !== 'string') {
    newDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1 + (shiftByMonths ? shiftByMonths : 0),
      shiftByDays === 'lastDay' ? 0 : date.getDate() + (shiftByDays ? shiftByDays : 0));
  } else {
    const dateArray = date.split('-');
    newDate = new Date(
      Number(dateArray[0]),
      Number(dateArray[1]) + (shiftByMonths ? shiftByMonths : 0),
      shiftByDays === 'lastDay' ? 0 : Number(dateArray[2]) + (shiftByDays ? shiftByDays : 0));
  }
  const YYYY = newDate.getFullYear();
  const MM = newDate.getMonth();
  const DD = newDate.getDate();
  return `${YYYY}-${MM < 10 ? 0 : ''}${MM}-${DD < 10 ? 0 : ''}${DD}`
}


// Написать функцию-обработчик формы search, которая собирает заполненные
// пользователем данные в формате описанной структуры и передаёт их в функцию поиска.

export function handleSearchFormSubmit(event: Event) {
  event.preventDefault(); // предотвращаем отправку формы на сервер

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const searchFormData: SearchFormData = {
    checkin: new Date(formData.get('checkin') as string),
    checkout: new Date(formData.get('checkout') as string),
    maxPrice: Number(formData.get('price'))
  };

  setTimeout(() => {
    // Имитируем ошибку с вероятностью 50 на 50
    const isError = Math.random() < 0.5;

    if (isError) {
      search(searchFormData, searchCallback(new Error('Произошла ошибка при поиске мест')))
    } else {
      const places: Place[] = [];
      search(searchFormData, searchCallback(null, places))
    }
  }, 3000);
}

// Функция поиска принимает как аргумент переменную интерфейса SearchFormData, выводит
// полученный аргумент в консоль и ничего не возвращает.
// * Добавить в функцию search вторым аргументом функцию-обратного вызова, которая
// принимает либо ошибку либо массив результатов интерфейса Place.Функция поиска делает задержку в несколько секунд, после чего с
// вероятностью 50 на 50 выдаёт либо ошибку либо пустой массив.

function search(searchFormData: SearchFormData,
  callback: (error?: Error, places?: Place[]) => void): void {

  console.log('SearchFormData: ', searchFormData);
  // здесь должен быть код поиска с использованием переданных данных
}


export function renderSearchFormBlock(checkin?: Date, checkout?: Date) {
  const max = getDateForInput(new Date(), 'lastDay', 2);
  const min = getDateForInput(new Date());
  let dayStart = checkin ? getDateForInput(checkin) : getDateForInput(new Date(), 1);
  let dayFinish = checkout ? getDateForInput(checkout) : getDateForInput(dayStart, 2);

  renderBlock(
    'search-form-block',
    `
    <form id='search-form'>
      <fieldset class="search-filedset">
        <div class="row">
          <div id='place'>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row" id='searchFormDate'>
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dayStart}" min="${min}" max="${max}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dayFinish}" min="${min}" max="${max}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="1500" name="price" class="max-price" />
          </div>
          <div>
            <div><button type='submit'>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}

