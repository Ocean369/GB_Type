import { renderBlock } from './lib.js';
import { getFavoriteItems } from './readKeysFromLocalStorage.js';
export function renderSearchStubBlock() {
    renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock(places) {
    const favoritesAmount = getFavoriteItems();
    console.log(favoritesAmount, ' ***** ', typeof (favoritesAmount));
    let placeFindBlocks = '';
    places.forEach((place) => {
        const id = place.id;
        const isFavorite = favoritesAmount ? Boolean(favoritesAmount[id]) : false;
        placeFindBlocks += `
    <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites${isFavorite ? ' active' : ''}" id='${place.id}'>
            </div>
            <img class="result-img" src='${place.image}' alt="${place.name}">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>${place.name}</p>
              <p class="price">${place.price}&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> ${place.remoteness}км от вас</div>
            <div class="result-info--descr">${place.description}</div>
            <div class="result-info--footer">
              <div>
                <button data-id='${place.id}' data-name='${place.name}'>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    `;
    });
    renderBlock('search-results-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      ${placeFindBlocks}
    </ul>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUtoRSxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7O0tBS0MsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxhQUFxQjtJQUNqRSxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7V0FHTyxhQUFhOztLQUVuQixDQUNGLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE1BQWU7SUFFdEQsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFFakUsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBRXpCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN2QixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUUsZUFBZSxJQUFJOzs7O21DQUlZLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsS0FBSyxDQUFDLEVBQUU7OzJDQUVwQyxLQUFLLENBQUMsS0FBSyxVQUFVLEtBQUssQ0FBQyxJQUFJOzs7O21CQUl2RCxLQUFLLENBQUMsSUFBSTtpQ0FDSSxLQUFLLENBQUMsS0FBSzs7cUVBRXlCLEtBQUssQ0FBQyxVQUFVOzhDQUN2QyxLQUFLLENBQUMsV0FBVzs7O21DQUc1QixLQUFLLENBQUMsRUFBRSxnQkFBZ0IsS0FBSyxDQUFDLElBQUk7Ozs7OztLQU1oRSxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7Ozs7Ozs7Ozs7O1FBYUksZUFBZTs7S0FFbEIsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IGdldEZhdm9yaXRlSXRlbXMgfSBmcm9tICcuL3JlYWRLZXlzRnJvbUxvY2FsU3RvcmFnZS5qcydcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSAnLi90eXBlcy5qcydcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hTdHViQmxvY2soKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJiZWZvcmUtcmVzdWx0cy1ibG9ja1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWcvc3RhcnQtc2VhcmNoLnBuZ1wiIC8+XG4gICAgICA8cD7Qp9GC0L7QsdGLINC90LDRh9Cw0YLRjCDQv9C+0LjRgdC6LCDQt9Cw0L/QvtC70L3QuNGC0LUg0YTQvtGA0LzRgyDQuCZuYnNwO9C90LDQttC80LjRgtC1IFwi0J3QsNC50YLQuFwiPC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRW1wdHlPckVycm9yU2VhcmNoQmxvY2socmVhc29uTWVzc2FnZTogc3RyaW5nKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlczogUGxhY2VbXSkge1xuXG4gIGNvbnN0IGZhdm9yaXRlc0Ftb3VudCA9IGdldEZhdm9yaXRlSXRlbXMoKTtcbiAgY29uc29sZS5sb2coZmF2b3JpdGVzQW1vdW50LCAnICoqKioqICcsIHR5cGVvZiAoZmF2b3JpdGVzQW1vdW50KSlcblxuICBsZXQgcGxhY2VGaW5kQmxvY2tzID0gJyc7XG5cbiAgcGxhY2VzLmZvckVhY2goKHBsYWNlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBwbGFjZS5pZDtcbiAgICBjb25zdCBpc0Zhdm9yaXRlID0gZmF2b3JpdGVzQW1vdW50ID8gQm9vbGVhbihmYXZvcml0ZXNBbW91bnRbaWRdKSA6IGZhbHNlO1xuICAgIHBsYWNlRmluZEJsb2NrcyArPSBgXG4gICAgPGxpIGNsYXNzPVwicmVzdWx0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGVzJHtpc0Zhdm9yaXRlID8gJyBhY3RpdmUnIDogJyd9XCIgaWQ9JyR7cGxhY2UuaWR9Jz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9JyR7cGxhY2UuaW1hZ2V9JyBhbHQ9XCIke3BsYWNlLm5hbWV9XCI+XG4gICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0taGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxwPiR7cGxhY2UubmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3BsYWNlLnByaWNlfSYjODM4MTs8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tbWFwXCI+PGkgY2xhc3M9XCJtYXAtaWNvblwiPjwvaT4gJHtwbGFjZS5yZW1vdGVuZXNzfdC60Lwg0L7RgiDQstCw0YE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZGVzY3JcIj4ke3BsYWNlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtaWQ9JyR7cGxhY2UuaWR9JyBkYXRhLW5hbWU9JyR7cGxhY2UubmFtZX0nPtCX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICBgXG4gIH0pXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWhlYWRlclwiPlxuICAgICAgICA8cD7QoNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiaWNvbiBpY29uLWZpbHRlclwiPjwvaT4g0KHQvtGA0YLQuNGA0L7QstCw0YLRjDo8L3NwYW4+XG4gICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC+0YDQvtCz0LjQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+0KHQvdCw0YfQsNC70LAg0LHQu9C40LbQtTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cInJlc3VsdHMtbGlzdFwiPlxuICAgICAgJHtwbGFjZUZpbmRCbG9ja3N9XG4gICAgPC91bD5cbiAgICBgXG4gIClcbn1cblxuIl19