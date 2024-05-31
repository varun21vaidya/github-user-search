import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private searchHistoryKey = 'searchHistory';

  addSearchHistory(searchTerm: string, user: any, success: boolean): void {
    const history = this.getSearchHistory();
    history.push({ searchTerm, username: user.login, avatar_url: user.avatar_url, success });
    localStorage.setItem(this.searchHistoryKey, JSON.stringify(history));
  }

  getSearchHistory(): { searchTerm: string, username: string, avatar_url: string, success: boolean }[] {
    const history = localStorage.getItem(this.searchHistoryKey);
    return history ? JSON.parse(history) : [];
  }

  removeSearchHistory(username: string): void {
    let history = this.getSearchHistory();
    history = history.filter(item => item.username !== username);
    localStorage.setItem(this.searchHistoryKey, JSON.stringify(history));
  }

  removeAllSearchHistory(){
    localStorage.setItem(this.searchHistoryKey, "");
    console.log("localstorage",localStorage.getItem(this.searchHistoryKey))
  }
}
