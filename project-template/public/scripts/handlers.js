var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { book, search } from "./search-API.js";
import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { toggleFavoriteItem } from './createLocalStorage.js';
import { checkBookingAvailability } from './checkbookingAvailable.js';
export function handlerToggleFavoriteItem(event) {
    event.preventDefault();
    const div = event.target;
    div.classList.toggle('active');
    const property = {
        id: Number(div.id),
        image: div.nextElementSibling.getAttribute('src'),
        name: div.nextElementSibling.getAttribute('alt')
    };
    toggleFavoriteItem(property);
    renderUserBlock();
}
export function handlerBookingPlace(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const button = event.target;
        const checkin = document.getElementById('check-in-date');
        const checkout = document.getElementById('check-out-date');
        const placeId = Number(button.dataset.id);
        const placeName = button.dataset.name;
        book(placeId, new Date(checkin.value), new Date(checkout.value));
    });
}
export function handleSearchFormSubmit(event) {
    event.preventDefault(); // предотвращаем отправку формы на сервер
    const form = event.target;
    const formData = new FormData(form);
    const searchFormData = {
        checkin: new Date(formData.get('checkin')),
        checkout: new Date(formData.get('checkout')),
        maxPrice: Number(formData.get('price'))
    };
    search(searchFormData.checkin, searchFormData.checkout, searchFormData.maxPrice)
        .then((results) => {
        if (results.length === 0) {
            renderEmptyOrErrorSearchBlock('Ничего не найдено по вашему запросу :(');
        }
        else {
            renderSearchResultsBlock(results);
            for (const favorite of document.getElementsByClassName('favorites')) {
                favorite.addEventListener('click', (event) => handlerToggleFavoriteItem(event));
            }
            for (const button of document.querySelectorAll('.result-info--footer button')) {
                button.addEventListener('click', (event) => handlerBookingPlace(event));
            }
        }
    });
    checkBookingAvailability(new Date());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsd0JBQXdCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7QUFDckgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUVyRSxNQUFNLFVBQVUseUJBQXlCLENBQUMsS0FBWTtJQUNsRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFdkIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQXdCLENBQUM7SUFDM0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsTUFBTSxRQUFRLEdBQWE7UUFDdkIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7S0FDbkQsQ0FBQTtJQUNELGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxNQUFNLFVBQWdCLG1CQUFtQixDQUFDLEtBQVk7O1FBQ2xELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMkIsQ0FBQztRQUNqRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztRQUM1RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFvQixDQUFDO1FBQzlFLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRXRDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXJFLENBQUM7Q0FBQTtBQUdELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxLQUFZO0lBQy9DLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztJQUVqRSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBeUIsQ0FBQztJQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxNQUFNLGNBQWMsR0FBbUI7UUFDbkMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFXLENBQUM7UUFDcEQsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFXLENBQUM7UUFDdEQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDLENBQUM7SUFFRixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUM7U0FDM0UsSUFBSSxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1FBQ3ZCLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsNkJBQTZCLENBQUMsd0NBQXdDLENBQUMsQ0FBQTtTQUMxRTthQUFNO1lBQ0gsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDakMsS0FBSyxNQUFNLFFBQVEsSUFBSSxRQUFRLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2pFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7YUFDbEY7WUFDRCxLQUFLLE1BQU0sTUFBTSxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFO2dCQUMzRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2FBQzFFO1NBQ0o7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVOLHdCQUF3QixDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vaywgc2VhcmNoIH0gZnJvbSBcIi4vc2VhcmNoLUFQSS5qc1wiO1xuaW1wb3J0IHsgUGxhY2UsIFByb3BlcnR5LCBTZWFyY2hGb3JtRGF0YSB9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jaywgcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrLCByZW5kZXJTZWFyY2hTdHViQmxvY2sgfSBmcm9tICcuL3NlYXJjaC1yZXN1bHRzLmpzJztcbmltcG9ydCB7IHJlbmRlclVzZXJCbG9jayB9IGZyb20gJy4vdXNlci5qcydcbmltcG9ydCB7IHRvZ2dsZUZhdm9yaXRlSXRlbSB9IGZyb20gJy4vY3JlYXRlTG9jYWxTdG9yYWdlLmpzJ1xuaW1wb3J0IHsgY2hlY2tCb29raW5nQXZhaWxhYmlsaXR5IH0gZnJvbSAnLi9jaGVja2Jvb2tpbmdBdmFpbGFibGUuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyVG9nZ2xlRmF2b3JpdGVJdGVtKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkaXYgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGNvbnN0IHByb3BlcnR5OiBQcm9wZXJ0eSA9IHtcbiAgICAgICAgaWQ6IE51bWJlcihkaXYuaWQpLFxuICAgICAgICBpbWFnZTogZGl2Lm5leHRFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ3NyYycpLFxuICAgICAgICBuYW1lOiBkaXYubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICB9XG4gICAgdG9nZ2xlRmF2b3JpdGVJdGVtKHByb3BlcnR5KTtcbiAgICByZW5kZXJVc2VyQmxvY2soKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXJCb29raW5nUGxhY2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBjaGVja2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrLWluLWRhdGUnKSBhcyBIVE1MRGF0YUVsZW1lbnQ7XG4gICAgY29uc3QgY2hlY2tvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2stb3V0LWRhdGUnKSBhcyBIVE1MRGF0YUVsZW1lbnQ7XG4gICAgY29uc3QgcGxhY2VJZCA9IE51bWJlcihidXR0b24uZGF0YXNldC5pZCk7XG4gICAgY29uc3QgcGxhY2VOYW1lID0gYnV0dG9uLmRhdGFzZXQubmFtZTtcblxuICAgIGJvb2socGxhY2VJZCwgbmV3IERhdGUoY2hlY2tpbi52YWx1ZSksIG5ldyBEYXRlKGNoZWNrb3V0LnZhbHVlKSk7XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdChldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQv9GA0LXQtNC+0YLQstGA0LDRidCw0LXQvCDQvtGC0L/RgNCw0LLQutGDINGE0L7RgNC80Ysg0L3QsCDRgdC10YDQstC10YBcblxuICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IHNlYXJjaEZvcm1EYXRhOiBTZWFyY2hGb3JtRGF0YSA9IHtcbiAgICAgICAgY2hlY2tpbjogbmV3IERhdGUoZm9ybURhdGEuZ2V0KCdjaGVja2luJykgYXMgc3RyaW5nKSxcbiAgICAgICAgY2hlY2tvdXQ6IG5ldyBEYXRlKGZvcm1EYXRhLmdldCgnY2hlY2tvdXQnKSBhcyBzdHJpbmcpLFxuICAgICAgICBtYXhQcmljZTogTnVtYmVyKGZvcm1EYXRhLmdldCgncHJpY2UnKSlcbiAgICB9O1xuXG4gICAgc2VhcmNoKHNlYXJjaEZvcm1EYXRhLmNoZWNraW4sIHNlYXJjaEZvcm1EYXRhLmNoZWNrb3V0LCBzZWFyY2hGb3JtRGF0YS5tYXhQcmljZSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdHM6IFBsYWNlW10pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlbmRlckVtcHR5T3JFcnJvclNlYXJjaEJsb2NrKCfQndC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3QviDQv9C+INCy0LDRiNC10LzRgyDQt9Cw0L/RgNC+0YHRgyA6KCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbmRlclNlYXJjaFJlc3VsdHNCbG9jayhyZXN1bHRzKVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmF2b3JpdGUgb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmF2b3JpdGVzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGhhbmRsZXJUb2dnbGVGYXZvcml0ZUl0ZW0oZXZlbnQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdWx0LWluZm8tLWZvb3RlciBidXR0b24nKSkge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGhhbmRsZXJCb29raW5nUGxhY2UoZXZlbnQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIGNoZWNrQm9va2luZ0F2YWlsYWJpbGl0eShuZXcgRGF0ZSgpKTtcbn1cblxuXG5cbiJdfQ==