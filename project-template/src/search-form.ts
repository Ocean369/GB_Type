import { renderBlock } from './lib.js'

interface Shift {
  ByDays: number | 'lastDay';
  ByMonths?: number;
}

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
  const MM = newDate.getMonth() + 1;
  const DD = newDate.getDate();
  return `${YYYY}-${MM < 10 ? 0 : ''}${MM}-${DD < 10 ? 0 : ''}${DD}`

}

console.log(getDateForInput(new Date()));
// Найдите функцию renderSearchFormBlock и доработайте её следующим образом. Функция
// должна принимать дату въезда и дату выезда. При этом минимальная дата, которую можно
// выбрать это дата сегодняшнего дня, а максимальная дата - последний день следующего
// месяца. Будем считать это ограничениями сервиса. По умолчанию поля заполняются
// следующим образом. Дата въезда это следующий день от текущей даты. Дата выезда - плюс
// два дня от даты въезда.

export function renderSearchFormBlock(checkin?: Date, checkout?: Date) {
  const max = getDateForInput(new Date(), 'lastDay', 1);
  const min = getDateForInput(new Date());
  let dayStart = checkin ? getDateForInput(checkin) : getDateForInput(new Date(), 1);
  let dayFinish = checkout ? getDateForInput(checkout) : getDateForInput(dayStart, 2);

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
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
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
