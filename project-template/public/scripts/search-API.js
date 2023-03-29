var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { renderToast } from "./lib.js";
import { renderSearchStubBlock } from "./search-results.js";
function dateToUnixStamp(date) {
    return date.getTime();
}
function responseToJson(requestPromise) {
    return requestPromise
        .then((response) => {
        return response.text();
    })
        .then((response) => __awaiter(this, void 0, void 0, function* () {
        return JSON.parse(response);
    }));
}
export function search(checkInDate, checkOutDate, maxPrice) {
    let url = `http://localhost:3030/places?` +
        `checkInDate=${dateToUnixStamp(checkInDate)}&` +
        `checkOutDate=${dateToUnixStamp(checkOutDate)}&` +
        `coordinates=59.9386,30.3141`;
    if (maxPrice != null) {
        url += `&maxPrice=${maxPrice}`;
    }
    return responseToJson(fetch(url));
}
export function book(placeId, checkInDate, checkOutDate) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(dateToUnixStamp(checkInDate));
        console.log(dateToUnixStamp(checkOutDate));
        try {
            const response = yield fetch(`http://localhost:3030/places/${placeId}?` +
                `checkInDate=${dateToUnixStamp(checkInDate)}&` +
                `checkOutDate=${dateToUnixStamp(checkOutDate)}&`, { method: 'PATCH' });
            if (response.status !== 200) {
                renderToast({ text: `Не возможно забронировать на выбранные даты`, type: 'success' });
            }
            else {
                renderToast({ text: `Бронирование прошло успешно`, type: 'success' });
                renderSearchStubBlock();
            }
        }
        catch (e) {
            console.error(e);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLUFQSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2gtQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHNUQsU0FBUyxlQUFlLENBQUMsSUFBVTtJQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUN6QixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsY0FBaUM7SUFDckQsT0FBTyxjQUFjO1NBQ2hCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ2YsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDMUIsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQU8sUUFBUSxFQUFFLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDVixDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxXQUFpQixFQUFFLFlBQWtCLEVBQUUsUUFBaUI7SUFDM0UsSUFBSSxHQUFHLEdBQUcsK0JBQStCO1FBQ3JDLGVBQWUsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHO1FBQzlDLGdCQUFnQixlQUFlLENBQUMsWUFBWSxDQUFDLEdBQUc7UUFDaEQsNkJBQTZCLENBQUE7SUFFakMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ2xCLEdBQUcsSUFBSSxhQUFhLFFBQVEsRUFBRSxDQUFBO0tBQ2pDO0lBQ0QsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDckMsQ0FBQztBQUdELE1BQU0sVUFBZ0IsSUFBSSxDQUFDLE9BQWUsRUFBRSxXQUFpQixFQUFFLFlBQWtCOztRQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSTtZQUNBLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUN4QixnQ0FBZ0MsT0FBTyxHQUFHO2dCQUMxQyxlQUFlLGVBQWUsQ0FBQyxXQUFXLENBQUMsR0FBRztnQkFDOUMsZ0JBQWdCLGVBQWUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUNoRCxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FDdEIsQ0FBQztZQUNGLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3pCLFdBQVcsQ0FDUCxFQUFFLElBQUksRUFBRSw2Q0FBNkMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQzNFLENBQUE7YUFDSjtpQkFBTTtnQkFDSCxXQUFXLENBQ1AsRUFBRSxJQUFJLEVBQUUsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUMzRCxDQUFBO2dCQUNELHFCQUFxQixFQUFFLENBQUE7YUFDMUI7U0FFSjtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSBcIi4vbGliLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJTZWFyY2hTdHViQmxvY2sgfSBmcm9tIFwiLi9zZWFyY2gtcmVzdWx0cy5qc1wiO1xuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5mdW5jdGlvbiBkYXRlVG9Vbml4U3RhbXAoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpXG59XG5cbmZ1bmN0aW9uIHJlc3BvbnNlVG9Kc29uKHJlcXVlc3RQcm9taXNlOiBQcm9taXNlPFJlc3BvbnNlPikge1xuICAgIHJldHVybiByZXF1ZXN0UHJvbWlzZVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZSlcbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaChjaGVja0luRGF0ZTogRGF0ZSwgY2hlY2tPdXREYXRlOiBEYXRlLCBtYXhQcmljZT86IG51bWJlcikge1xuICAgIGxldCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDMwL3BsYWNlcz9gICtcbiAgICAgICAgYGNoZWNrSW5EYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrSW5EYXRlKX0mYCArXG4gICAgICAgIGBjaGVja091dERhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tPdXREYXRlKX0mYCArXG4gICAgICAgIGBjb29yZGluYXRlcz01OS45Mzg2LDMwLjMxNDFgXG5cbiAgICBpZiAobWF4UHJpY2UgIT0gbnVsbCkge1xuICAgICAgICB1cmwgKz0gYCZtYXhQcmljZT0ke21heFByaWNlfWBcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlVG9Kc29uKGZldGNoKHVybCkpXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJvb2socGxhY2VJZDogbnVtYmVyLCBjaGVja0luRGF0ZTogRGF0ZSwgY2hlY2tPdXREYXRlOiBEYXRlKSB7XG4gICAgY29uc29sZS5sb2coZGF0ZVRvVW5peFN0YW1wKGNoZWNrSW5EYXRlKSk7XG4gICAgY29uc29sZS5sb2coZGF0ZVRvVW5peFN0YW1wKGNoZWNrT3V0RGF0ZSkpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDMwL3BsYWNlcy8ke3BsYWNlSWR9P2AgK1xuICAgICAgICAgICAgYGNoZWNrSW5EYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrSW5EYXRlKX0mYCArXG4gICAgICAgICAgICBgY2hlY2tPdXREYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGNoZWNrT3V0RGF0ZSl9JmAsXG4gICAgICAgICAgICB7IG1ldGhvZDogJ1BBVENIJyB9XG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgcmVuZGVyVG9hc3QoXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiBg0J3QtSDQstC+0LfQvNC+0LbQvdC+INC30LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMINC90LAg0LLRi9Cx0YDQsNC90L3Ri9C1INC00LDRgtGLYCwgdHlwZTogJ3N1Y2Nlc3MnIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclRvYXN0KFxuICAgICAgICAgICAgICAgIHsgdGV4dDogYNCR0YDQvtC90LjRgNC+0LLQsNC90LjQtSDQv9GA0L7RiNC70L4g0YPRgdC/0LXRiNC90L5gLCB0eXBlOiAnc3VjY2VzcycgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmVuZGVyU2VhcmNoU3R1YkJsb2NrKClcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxufSJdfQ==