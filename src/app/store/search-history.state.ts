// src/app/store/search-history.state.ts

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class AddSearchHistory {
  static readonly type = '[SearchHistory] Add';
  constructor(public searchTerm: string, public user: any, public success: boolean) {}
}

export class RemoveSearchHistory {
  static readonly type = '[SearchHistory] Remove';
  constructor(public username: string) {}
}

export class ClearSearchHistory {
  static readonly type = '[SearchHistory] Clear';
}

export interface SearchHistoryModel {
  searchTerm: string;
  username: string;
  avatar_url: string;
  success: boolean;
}

@State<SearchHistoryModel[]>({
  name: 'searchHistory',
  defaults: []
})
@Injectable()
export class SearchHistoryState {

  @Selector()
  static getHistory(state: SearchHistoryModel[]): SearchHistoryModel[] {
    return state;
  }

  @Action(AddSearchHistory)
  add({ getState, patchState }: StateContext<SearchHistoryModel[]>, { searchTerm, user, success }: AddSearchHistory) {
    const state = getState();
    patchState([...state, { searchTerm, username: user.login, avatar_url: user.avatar_url, success }]);
  }

  @Action(RemoveSearchHistory)
  remove({ getState, patchState }: StateContext<SearchHistoryModel[]>, { username }: RemoveSearchHistory) {
    patchState(getState().filter(item => item.username !== username));
  }

  @Action(ClearSearchHistory)
  clear({ setState }: StateContext<SearchHistoryModel[]>) {
    setState([]);
  }
}
