import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  searchHistory: { searchTerm: string, username: string, avatar_url: string, success: boolean }[] = [];

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.searchHistory = this.stateService.getSearchHistory();
  }

  removeHistory(history: { searchTerm: string, username: string, avatar_url: string, success: boolean }) {
    this.stateService.removeSearchHistory(history.username);
    this.searchHistory = this.stateService.getSearchHistory();
  }
  clearData(){
    if (confirm("Do you want to clear search history?")){
      this.stateService.removeAllSearchHistory()
      this.searchHistory = this.stateService.getSearchHistory();
    }
  }
}
