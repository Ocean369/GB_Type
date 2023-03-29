export function getUserData() {
    const userData = localStorage.getItem('user');
    if (userData) {
        try {
            const user = JSON.parse(userData);
            if (typeof user.username === 'string' && typeof user.avatarUrl === 'string') {
                return user;
            }
        }
        catch (_a) {
            console.warn('No user data found in localStorage');
        }
    }
    return undefined;
}
export function getFavoriteItems() {
    const favoriteItems = localStorage.getItem('favoriteItems');
    if (favoriteItems) {
        try {
            const favoriteItem = JSON.parse(favoriteItems);
            // console.log('read from ls => ', favoriteItem, ' *type*', typeof (favoriteItem));
            // console.log('count =>', Object.keys(favoriteItem).length);
            // if (typeof favoriteItem.name === 'string' && typeof favoriteItem.image === 'string') {
            return favoriteItem;
            // }
        }
        catch (_a) {
            console.warn('No favoriteItems data found in localStorage');
        }
    }
    return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZEtleXNGcm9tTG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlYWRLZXlzRnJvbUxvY2FsU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsV0FBVztJQUN2QixNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLElBQUksUUFBUSxFQUFFO1FBQ1YsSUFBSTtZQUNBLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3pFLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUFDLFdBQU07WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FBRTtLQUNsRTtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFHRCxNQUFNLFVBQVUsZ0JBQWdCO0lBQzVCLE1BQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUQsSUFBSSxhQUFhLEVBQUU7UUFDZixJQUFJO1lBQ0EsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQyxtRkFBbUY7WUFDbkYsNkRBQTZEO1lBQzdELHlGQUF5RjtZQUN6RixPQUFPLFlBQVksQ0FBQztZQUNwQixJQUFJO1NBQ1A7UUFBQyxXQUFNO1lBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQUU7S0FDM0U7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHksIFVzZXIgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckRhdGEoKTogVXNlciB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UodXNlckRhdGEpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB1c2VyLnVzZXJuYW1lID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdXNlci5hdmF0YXJVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggeyBjb25zb2xlLndhcm4oJ05vIHVzZXIgZGF0YSBmb3VuZCBpbiBsb2NhbFN0b3JhZ2UnKTsgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZUl0ZW1zKCkge1xuICAgIGNvbnN0IGZhdm9yaXRlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVJdGVtcycpO1xuICAgIGlmIChmYXZvcml0ZUl0ZW1zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmYXZvcml0ZUl0ZW0gPSBKU09OLnBhcnNlKGZhdm9yaXRlSXRlbXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlYWQgZnJvbSBscyA9PiAnLCBmYXZvcml0ZUl0ZW0sICcgKnR5cGUqJywgdHlwZW9mIChmYXZvcml0ZUl0ZW0pKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCA9PicsIE9iamVjdC5rZXlzKGZhdm9yaXRlSXRlbSkubGVuZ3RoKTtcbiAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZmF2b3JpdGVJdGVtLm5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBmYXZvcml0ZUl0ZW0uaW1hZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmF2b3JpdGVJdGVtO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGNhdGNoIHsgY29uc29sZS53YXJuKCdObyBmYXZvcml0ZUl0ZW1zIGRhdGEgZm91bmQgaW4gbG9jYWxTdG9yYWdlJyk7IH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iXX0=