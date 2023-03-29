import { renderBlock } from './lib.js';
import { getFavoriteItems, getUserData } from './readKeysFromLocalStorage.js';
export function renderUserBlock(username, url) {
    const user = getUserData();
    const favoritesItems = getFavoriteItems();
    console.log(favoritesItems);
    const favoriteItemsAmount = favoritesItems ? Object.keys(favoritesItems).length : 0;
    const favoritesCaption = favoriteItemsAmount >= 1 ? favoriteItemsAmount.toString() : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="/${user.avatarUrl}" alt="${user.username}" />
      <div class="info">
          <p class="name">${user.username}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRzlFLE1BQU0sVUFBVSxlQUFlLENBQUMsUUFBaUIsRUFBRSxHQUFZO0lBRTdELE1BQU0sSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBQzNCLE1BQU0sY0FBYyxHQUFHLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QixNQUFNLG1CQUFtQixHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUNqRyxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFFaEUsV0FBVyxDQUNULFlBQVksRUFDWjs7a0NBRThCLElBQUksQ0FBQyxTQUFTLFVBQVUsSUFBSSxDQUFDLFFBQVE7OzRCQUUzQyxJQUFJLENBQUMsUUFBUTs7a0NBRVAsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGdCQUFnQjs7OztLQUl2RixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IGdldEZhdm9yaXRlSXRlbXMsIGdldFVzZXJEYXRhIH0gZnJvbSAnLi9yZWFkS2V5c0Zyb21Mb2NhbFN0b3JhZ2UuanMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sodXNlcm5hbWU/OiBzdHJpbmcsIHVybD86IHN0cmluZykge1xuXG4gIGNvbnN0IHVzZXIgPSBnZXRVc2VyRGF0YSgpO1xuICBjb25zdCBmYXZvcml0ZXNJdGVtcyA9IGdldEZhdm9yaXRlSXRlbXMoKTtcbiAgY29uc29sZS5sb2coZmF2b3JpdGVzSXRlbXMpO1xuICBjb25zdCBmYXZvcml0ZUl0ZW1zQW1vdW50ID0gZmF2b3JpdGVzSXRlbXMgPyBPYmplY3Qua2V5cyhmYXZvcml0ZXNJdGVtcykubGVuZ3RoIDogMDtcblxuICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA+PSAxID8gZmF2b3JpdGVJdGVtc0Ftb3VudC50b1N0cmluZygpIDogJ9C90LjRh9C10LPQviDQvdC10YInXG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXMgPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID49IDEgPyB0cnVlIDogZmFsc2VcblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiLyR7dXNlci5hdmF0YXJVcmx9XCIgYWx0PVwiJHt1c2VyLnVzZXJuYW1lfVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59Il19