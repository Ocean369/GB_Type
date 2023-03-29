export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
        <div id="info-block" class="info-block ${message.type}">
          <p>${message.text}</p>
          <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
        </div>
      `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUN2RCxNQUFNLE9BQU8sR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNyRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtBQUM1QixDQUFDO0FBWUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUF1QixFQUFFLE1BQWU7SUFDaEUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBRXBCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNqQixXQUFXLEdBQUc7aURBQzJCLE9BQU8sQ0FBQyxJQUFJO2VBQzlDLE9BQU8sQ0FBQyxJQUFJOzJDQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUzs7T0FFN0QsQ0FBQTtLQUNGO0lBRUQsV0FBVyxDQUNQLGFBQWEsRUFDYixXQUFXLENBQ2QsQ0FBQTtJQUVELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDaEIsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNiLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDMUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ25CO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JCLENBQUMsQ0FBQTtLQUNKO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZW5kZXJCbG9jayhlbGVtZW50SWQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sXG59XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdGV4dDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBBY3Rpb24ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBoYW5kbGVyOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2FzdChtZXNzYWdlOiBNZXNzYWdlIHwgbnVsbCwgYWN0aW9uPzogQWN0aW9uKSB7XG4gICAgbGV0IG1lc3NhZ2VUZXh0ID0gJydcblxuICAgIGlmIChtZXNzYWdlICE9IG51bGwpIHtcbiAgICAgICAgbWVzc2FnZVRleHQgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJpbmZvLWJsb2NrXCIgY2xhc3M9XCJpbmZvLWJsb2NrICR7bWVzc2FnZS50eXBlfVwiPlxuICAgICAgICAgIDxwPiR7bWVzc2FnZS50ZXh0fTwvcD5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwidG9hc3QtbWFpbi1hY3Rpb25cIj4ke2FjdGlvbj8ubmFtZSB8fCAn0JfQsNC60YDRi9GC0YwnfTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICB9XG5cbiAgICByZW5kZXJCbG9jayhcbiAgICAgICAgJ3RvYXN0LWJsb2NrJyxcbiAgICAgICAgbWVzc2FnZVRleHRcbiAgICApXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtbWFpbi1hY3Rpb24nKVxuICAgIGlmIChidXR0b24gIT0gbnVsbCkge1xuICAgICAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCAmJiBhY3Rpb24uaGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmhhbmRsZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyVG9hc3QobnVsbClcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=