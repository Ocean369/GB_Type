export function createLocalStorage(keys) {
    if (!localStorage.getItem('user') || !localStorage.getItem('favoritesAmount')) {
        localStorage.setItem('user', JSON.stringify(keys.user));
        localStorage.setItem('favoritesAmount', keys.favoritesAmount.toString());
        console.log('Local Storage created!');
    }
    else
        console.log('Local Storage already exists!');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NyZWF0ZUxvY2FsU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVTtJQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUM3RSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtLQUN0Qzs7UUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2V5cyB9IGZyb20gJy4vdHlwZXMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbFN0b3JhZ2Uoa2V5czogS2V5cyk6IHZvaWQge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgfHwgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXNBbW91bnQnKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoa2V5cy51c2VyKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlc0Ftb3VudCcsIGtleXMuZmF2b3JpdGVzQW1vdW50LnRvU3RyaW5nKCkpO1xuICAgIGNvbnNvbGUubG9nKCdMb2NhbCBTdG9yYWdlIGNyZWF0ZWQhJylcbiAgfSBlbHNlIGNvbnNvbGUubG9nKCdMb2NhbCBTdG9yYWdlIGFscmVhZHkgZXhpc3RzIScpXG59XG4iXX0=